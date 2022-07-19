import child_process from 'child_process';
import DockerVersionClass from '../../interface/dockerVersionClass.js';

export default class Win32DockerVersion extends DockerVersionClass {
	/**
	 *
	 * @returns true if docker is installed
	 */
	static installed() {
		try {
			let docker = child_process.execSync(`docker --version`).toString().trim();
			this.output('Docker Seems to be installed');
			return true;
		} catch (error) {
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
			child_process.execSync(`docker ps`).toString().trim();
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

	/**
	 *
	 * @returns
	 */
	static startDocker() {
		/** NOT Implemented yet */
	}

	/**
	 *
	 * @returns boolean
	 */
	static startCompose(yml) {
		try {
			child_process
				.execSync(`docker-compose -f "${yml.start_compose}" up -d --build`)
				.toString()
				.trim();
			return true;
		} catch (error) {
			return false;
		}
	}
}
