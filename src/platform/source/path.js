import Log from '../../abstract/log.js';
import Util from '../../abstract/util.js';
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
				return LinuxDockerVersion.isDir();
			case Util.WINDOWS:
				return Win32PathResolver.isDir(path);
		}
	}

	/**
	 *
	 * @param {string} path
	 * @returns unix-friendly path of project
	 */
	static resolvedOriginPath(path) {
		switch (Util.getPlatfrom()) {
			case Util.MAC_OS:
				return DarwinPathResolver.resolvedOriginPath(path);
			case Util.LINUX:
				return LinuxDockerVersion.resolvedOriginPath(path);
			case Util.WINDOWS:
				return Win32PathResolver.resolvedOriginPath(path);
		}
	}

	/**
	 *
	 * @param {string} path
	 * @returns unix-friendly path of docker
	 */
	static resolvedDockerPath(from, proot, croot) {
		switch (Util.getPlatfrom()) {
			case Util.MAC_OS:
				return DarwinPathResolver.resolvedDockerPath(from, proot, croot);
			case Util.LINUX:
				return LinuxDockerVersion.resolvedDockerPath(from, proot, croot);
			case Util.WINDOWS:
				return Win32PathResolver.resolvedDockerPath(from, proot, croot);
		}
	}
}
