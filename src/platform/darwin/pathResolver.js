import PathResolverClass from '../../interface/pathResolverClass.js';

export default class DarwinPathResolver extends PathResolverClass {
	/**
	 *
	 * @param {*} path
	 */
	static isDir(path) {
		return path.endsWith('/') ? path + '.' : path;
	}

	static resolvedOriginPath(path) {}

	static resolvedDockerPath(path) {}
}
