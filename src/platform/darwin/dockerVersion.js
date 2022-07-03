import Log from '../../abstract/log.js';
import child_process from 'child_process';

export default class DockerVersion extends Log {
	/**
	 *
	 * @returns true if docker is installed
	 */
	static installed() {
		let docker = child_process
			.execSync(
				`
        if [ -x "$(command -v docker)" ]; then
            echo "OK"
        else
            echo "FAIL"
        fi`
			)
			.toString()
			.trim();
		if (docker == 'OK') {
			this.output('Docker is installed.. OK');
			return true;
		} else {
			this.output('Docker is not installed!');
			return false;
		}
	}

	/**
	 *
	 * @returns @boolean
	 */
	static isRunning() {
		let isDockerRunning = false;
		try {
			child_process
				.execSync(`docker version > /dev/null 2>&1`)
				.toString()
				.trim();
			isDockerRunning = true;
		} catch (error) {
			isDockerRunning = false;
		}
		if (isDockerRunning) {
			this.output('Docker is running');
			return true;
		} else {
			this.output('Docker is Not Running, Please Start Docker!');
			return false;
		}
	}

	static startDocker() {}
}
DockerVersion.isRunning();
