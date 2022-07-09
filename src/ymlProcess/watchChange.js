/**
 *
 * Watch Change Class
 *
 * Heart of sync stat
 *
 * Uses Chokidar to detect file changes, must implement a different method here,
 *
 *
 */
import Log from '../abstract/log.js';
import chokidar from 'chokidar';
import child_process from 'child_process';
export default class WatchChange extends Log {
	/**
	 * Init Watch Change
	 * @param {VolumesData} volume
	 */
	constructor(volume) {
		super();
		this.containerName = volume.container;
		this.volumePath = volume.to;
		this.fromPath = volume.from;
		this.owner = volume.owner;
		this.cmd = volume.cmd;
		this.mode = volume.mode;
	}

	/**
	 * @REMEMBER @TODO
	 * this doesnt work on widnows due to path issues
	 */

	/**
	 * Start Syncing files
	 */
	async startSync() {
		chokidar
			.watch(this.fromPath, { ignoreInitial: true, usePolling: false })
			.on('all', (event, path) => {
				if (event == 'change' || event == 'add') {
					try {
						child_process.execSync(
							'docker exec ' +
								this.containerName +
								' mkdir -p ' +
								this.dockerpath(this.getPath(path))
						);
						child_process.execSync(
							'docker cp "' +
								path +
								'" ' +
								this.containerName +
								':' +
								this.dockerpath(path)
						);
						console.log(
							'✅ copied ' +
								path +
								' to ' +
								this.containerName +
								':' +
								this.dockerpath(path)
						);
					} catch (error) {
						console.log(
							'❌ unable to copy' + this.dockerpath(this.getPath(path))
						);
					}
				}
				if (event == 'addDir') {
					console.log('mkdir' + this.dockerpath(path));
					child_process.execSync(
						'docker exec ' +
							this.containerName +
							' mkdir -p ' +
							this.dockerpath(path)
					);
				}
				if (event == 'unlink') {
					console.log('remove file ' + this.dockerpath(path));
					child_process.execSync(
						'docker exec ' +
							this.containerName +
							' rm -f ' +
							this.dockerpath(path) +
							''
					);
				}
				if (event == 'unlinkDir') {
					console.log('remove dir ' + this.dockerpath(path));
					child_process.execSync(
						'docker exec ' +
							this.containerName +
							' rm -rf ' +
							this.dockerpath(path) +
							''
					);
				}
			});
	}

	/**
	 * Start watch by running initial Commands
	 */
	up() {
		this.output('🚀 Copying Source to ' + this.containerName);
		child_process.execSync(
			'docker cp "' +
				this.dcpeParse(this.fromPath) +
				'" ' +
				this.containerName +
				':' +
				this.volumePath
		);
		console.log('✅ Ok');

		this.output('🚀 Changing Destination Owner for ' + this.containerName);
		child_process.execSync(
			'docker exec ' +
				this.containerName +
				' chown -R ' +
				this.owner +
				' ' +
				this.volumePath
		);
		console.log('✅ Ok');

		this.output('🚀 Changing Destination Mode for ' + this.containerName);
		child_process.execSync(
			'docker exec ' +
				this.containerName +
				' chmod -R ' +
				this.mode +
				' ' +
				this.volumePath
		);
		console.log('✅ Ok');

		this.output('✅ Sync Ready for ' + this.containerName);

		if (this.cmd != null) {
			this.cmd.forEach(element => {
				this.output('🚀 ' + this.containerName + ' ' + element);
				child_process.execSync(
					'docker exec ' + this.containerName + ' ' + element
				);
				console.log('✅ Ok');
			});
		}

		this.startSync();
	}

	/**
	 *
	 * @param {Changes Filed path} params
	 * @returns Docker equivilent path
	 */
	dockerpath(params) {
		//this.output(params)
		return '"' + params.replace(this.fromPath, this.volumePath) + '"';
	}

	/**
	 *
	 * @param {relative} path
	 * @returns docker path
	 */
	dcpeParse(path) {
		return path.endsWith('/') ? path + '.' : path;
	}

	/**
	 *
	 * @param {gets directory of a file from local} params
	 * @returns docker directory
	 */
	getPath(params) {
		let pieces = params.split('/');
		pieces.pop();
		return pieces.join('/');
	}
}
