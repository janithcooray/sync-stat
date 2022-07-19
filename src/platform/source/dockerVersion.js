import Log from '../../abstract/log.js';
import Util from '../../abstract/util.js';
import DarwinDockerVersion from '../darwin/DockerVersion.js';
import LinuxDockerVersion from '../linux/dockerVersion.js';
import Win32DockerVersion from '../win32/dockerVersion.js';

export default class DockerVersion extends Log {
	/**
	 * Check if the container is installed
	 *
	 * @returns boolean
	 */
	static isInstalled() {
		switch (Util.getPlatfrom()) {
			case Util.MAC_OS:
				return DarwinDockerVersion.installed();
			case Util.LINUX:
				return LinuxDockerVersion.installed();
			case Util.WINDOWS:
				return Win32DockerVersion.installed();
		}
	}

	/**
	 * Check if Docker is running
	 *
	 * @returns boolean
	 */
	static isRunning() {
		switch (Util.getPlatfrom()) {
			case Util.MAC_OS:
				return DarwinDockerVersion.running();
			case Util.LINUX:
				return LinuxDockerVersion.running();
			case Util.WINDOWS:
				return Win32DockerVersion.running();
		}
	}

	/**
	 * Start docker compose
	 *
	 * @returns bool
	 */
	static startCompose(yml) {
		this.outputS('Starting Compose');
		switch (Util.getPlatfrom()) {
			case Util.MAC_OS:
				return DarwinDockerVersion.startCompose(yml);
			case Util.LINUX:
				return LinuxDockerVersion.startCompose(yml);
			case Util.WINDOWS:
				return Win32DockerVersion.startCompose(yml);
		}
	}
}
