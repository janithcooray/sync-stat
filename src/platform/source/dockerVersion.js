import Log from '../../abstract/log.js';
import DarwinDockerVersion from '../darwin/DockerVersion.js';

export default class DockerVersion extends Log {
	static installed() {}
	static running() {}

	static isInstalled() {
		switch (this.getPlatform()) {
			case this.MAC_OS:
				return DarwinDockerVersion.installed();
			default:
				break;
		}
	}
}
