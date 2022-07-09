/**
 *
 * MysqlDriver
 *
 * Handles All functions related to MYSQL DB
 *
 */

import YamlVersion from '../abstract/ymlVersion.js';
import mysqldump from 'mysqldump';
import Importer from 'mysql-import';
import child_process from 'child_process';

export default class MysqlDriver extends YamlVersion {
	/**
	 * Mysql Constuction
	 * @param {Parent} context
	 */
	constructor(context) {
		super(context);
		this.setMinVersion(1);
		this.whenOnIncompatible(
			'Cannot be under version 1, Please Update sync-compose'
		);
		this.checkCompatibility();
	}

	/**
	 *
	 * @returns Start method
	 */
	start() {
		return this.method();
	}

	/**
	 * Init Proccess of MysqlDriver
	 * @returns true
	 */
	method() {
		if (this.yml.database != null) {
			let mysql_method = this.yml.database.method;
			switch (mysql_method) {
				case 'dump':
					this.outputS('Starting Dump');
					this.useFromServer();
					break;
				case 'export':
					this.output('Starting Export');
					this.importFromFile(this.yml.database.file);
					break;

				default:
					this.outputE('unknow db export method');
					process.exitCode(0);
					break;
			}
			return true;
		}
		return true;
	}

	/**
	 * Export a copy from sever directly
	 * @returns true always
	 */
	async useFromServer() {
		let server = this.yml.database.server;
		await mysqldump({
			dump: {
				data: {
					maxRowsPerInsertStatement: 100,
					format: false,
				},
				trigger: {
					dropIfExist: true,
				},
			},
			connection: {
				host: server.host,
				user: server.database_user,
				password: server.database_pass,
				database: server.database_name,
			},
			dumpToFile: './dump.sql',
		});
		this.importFromFile('./dump.sql');
		return true;
	}

	/**
	 * Import From data from a sql copy
	 * @returns true
	 */
	importFromFile(file) {
		let method = this.yml.database.local.method;
		switch (method) {
			case 'CLIENT':
				this.importFromNode(file);
				break;
			case 'DOCKER':
				this.importFromDocker(file);
				break;
			case 'CLI':
				this.importFromCli(file);
				break;
			case 'SSH':
				this.importViaSSH(file);
				break;
			default:
				this.output('Local Import method not defined!');
				process.exit(1);
				break;
		}
	}

	/**
	 * Import Via Node-mysql importer
	 * @param {sql} file
	 */
	importFromNode(file) {
		let server = this.yml.database.local;

		const host = server.host;
		const user = server.database_user;
		const password = server.database_pass;
		const database = server.database_name;

		let importer = new Importer({ host, user, password, database });

		importer.onProgress(progress => {
			var percent =
				Math.floor((progress.bytes_processed / progress.total_bytes) * 10000) /
				100;
			console.log(`${percent}% Completed`);
		});

		importer
			.import(file)
			.then(() => {
				var files_imported = importer.getImported();
				console.log(`${files_imported.length} SQL file(s) imported.`);
			})
			.catch(err => {
				console.error(err);
			});
	}

	/**
	 * Copy to Docker container and import from their
	 * @param {sql} file
	 */
	importFromDocker(file) {
		let config = this.yml.database.local;
		//this.output(config);
		this.output('Copying SQL');

		child_process.execSync(
			'docker exec ' +
				config.container_name +
				` mysql -h ${config.host} -u ${config.database_user} -p${config.database_pass} -e "CREATE DATABASE IF NOT EXISTS ${config.database_name}" `
		);

		if (
			this.yml.database.local.provision != null &&
			this.yml.database.local.provision
		) {
			this.output('Dropping Tables');
			child_process.execSync(
				'docker exec ' +
					config.container_name +
					` mysql -h ${config.host} -u ${config.database_user} -p${config.database_pass} -e "drop DATABASE ${config.database_name}" `
			);

			child_process.execSync(
				'docker exec ' +
					config.container_name +
					` mysql -h ${config.host} -u ${config.database_user} -p${config.database_pass} -e "CREATE DATABASE ${config.database_name}" `
			);

			this.output('Importing data');
			child_process.execSync(
				'docker exec -i ' +
					config.container_name +
					` mysql -u root -p${config.root_password} ${config.database_name} < ${file}`
			);
		} else {
			this.output('Importing data');
			child_process.execSync(
				'docker exec -i ' +
					config.container_name +
					` mysql -u root -p${config.root_password} ${config.database_name} < ${file}`
			);
		}
		child_process.execSync(`rm -f ${file}`);
	}

	/**
	 * Import from mysql cli
	 *
	 * @requires MYSQLCLI
	 *
	 * @param {sql} file
	 */
	importFromCli(file) {}

	/**
	 * copy the file to remote machine and import via ssh
	 * @requires ssh-key named as default and mysql installed on client
	 * @param {file} file
	 */
	importViaSSH(file) {}
}
