import Log from '../abstract/log.js';
import chokidar from 'chokidar';
import child_process from 'child_process';
export default class WatchChange extends Log {
	constructor(volume) {
		super();
		this.containerName = volume.container;
		this.volumePath = volume.to;
		this.fromPath = volume.from;
		this.owner = volume.owner;
	}

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
						child_process.execSync(
							'docker exec ' +
								this.containerName +
								' chown -R ' +
								this.owner +
								' ' +
								this.dockerpath(this.getPath(path))
						);
						child_process.execSync(
							'docker exec ' +
								this.containerName +
								' chmod -R ' +
								this.mode +
								' ' +
								this.dockerpath(this.getPath(path))
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

	dockerpath(params) {
		//this.output(params)
		return '"' + params.replace(this.fromPath, this.volumePath) + '"';
	}

	getPath(params) {
		let pieces = params.split('/');
		pieces.pop();
		return pieces.join('/');
	}
}
