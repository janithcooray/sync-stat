import Log from '../../abstract/log.js';
import Util from '../../abstract/util.js';
import DarwinDockerVersion from '../darwin/DockerVersion.js';
import LinuxDockerVersion from '../linux/dockerVersion.js';
import Win32DockerVersion from '../win32/dockerVersion.js';

export default class DockerVersion extends Log {
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
}
