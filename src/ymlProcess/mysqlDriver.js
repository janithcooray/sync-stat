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
		return method();
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
					this.output('Starting Dump');
					this.useFromServer();
					this.importFromFile('./dump.sql');
					break;
				case 'export':
					this.output('Starting Export');
					this.importFromFile(this.yml.database.file);
					break;

				default:
					this.output('unknow db export method');
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
	useFromServer() {
		let server = this.yml.database.server;
		mysqldump({
			connection: {
				host: server.host,
				user: server.database_user,
				password: server.database_pass,
				database: server.database_name,
			},
			dumpToFile: './dump.sql',
		});

		return true;
	}

	/**
	 * Import From data from a sql copy
	 * @returns true
	 */
	importFromFile(file) {
		let server = this.yml.database.local;

		const host = server.host;
		const user = server.database_name;
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
}
