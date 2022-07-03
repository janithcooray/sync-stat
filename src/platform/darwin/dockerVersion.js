import child_process from 'child_process';
import DockerVersionClass from '../../interface/dockerVersionClass.js';

export default class DarwinDockerVersion extends DockerVersionClass {
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
	static running() {
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

	static startDocker() {
		/** NOT Implemented yet */
	}

	/**
	 *
	 * @returns boolean
	 */
	static startCompose() {
		try {
			child_process
				.execSync(`docker-compose -f "docker-compose.yml" up -d --build`)
				.toString()
				.trim();
			return true;
		} catch (error) {
			return false;
		}
	}
}
