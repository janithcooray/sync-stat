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
	static resolvedOriginPath(path) {}

	/**
	 *
	 * @param {String} path
	 */
	static resolvedDockerPath(path) {}
}
