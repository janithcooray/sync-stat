import Log from '../../abstract/log.js';
import DarwinPathResolver from '../darwin/pathResolver.js';
import Win32PathResolver from '../win32/pathResolver.js';

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
				return Win32PathResolver.isDir(path);
		}
	}

	static resolvedOriginPath(path) {
		switch (Util.getPlatfrom()) {
			case Util.MAC_OS:
				return DarwinPathResolver.resolvedOriginPath(path);
			case Util.LINUX:
				return LinuxDockerVersion.running();
			case Util.WINDOWS:
				return Win32PathResolver.resolvedOriginPath(path);
		}
	}

	static resolvedDockerPath(path) {
		switch (Util.getPlatfrom()) {
			case Util.MAC_OS:
				return DarwinPathResolver.resolvedDockerPath(path);
			case Util.LINUX:
				return LinuxDockerVersion.running();
			case Util.WINDOWS:
				return Win32PathResolver.resolvedDockerPath(path);
		}
	}
}
