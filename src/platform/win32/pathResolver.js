import PathResolverClass from '../../interface/pathResolverClass.js';

export default class Win32PathResolver extends PathResolverClass {
	/**
	 *
	 * @param {*} path
	 */
	static isDir(path) {}

	/**
	 *
	 * @param {String} path
	 */
	static resolvedOriginPath(path) {
		return path;
	}

	/**
	 *
	 * @param {String} path
	 */
	static resolvedDockerPath(from, proot, croot) {}
}
