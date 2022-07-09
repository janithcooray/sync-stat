import Log from '../../abstract/log.js';
import DarwinPathResolver from '../darwin/pathResolver.js';

export default class PathHelper extends Log {
	constructor() {
		super();
	}

	/**
	 * Resolve Paths
	 */

	static isDir(path) {
		switch (Util.getPlatfrom()) {
			case Util.MAC_OS:
				return DarwinPathResolver.isDir(path);
			case Util.LINUX:
				return LinuxDockerVersion.running();
			case Util.WINDOWS:
				return Win32DockerVersion.running();
		}
	}

	static resolvedOriginPath(path) {
		switch (Util.getPlatfrom()) {
			case Util.MAC_OS:
				return DarwinPathResolver.resolvedOriginPath(path);
			case Util.LINUX:
				return LinuxDockerVersion.running();
			case Util.WINDOWS:
				return Win32DockerVersion.running();
		}
	}

	static resolvedDockerPath(path) {
		switch (Util.getPlatfrom()) {
			case Util.MAC_OS:
				return DarwinPathResolver.resolvedDockerPath(path);
			case Util.LINUX:
				return LinuxDockerVersion.running();
			case Util.WINDOWS:
				return Win32DockerVersion.running();
		}
	}
}
