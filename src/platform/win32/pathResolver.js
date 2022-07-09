import PathResolverClass from '../../interface/pathResolverClass.js';

export default class Win32PathResolver extends PathResolverClass {
	constructor() {
		super();
	}

	/**
	 *
	 * @param {*} path
	 */
	static isDir(path) {
		super(path);
	}

	/**
	 *
	 * @param {String} path
	 */
	static resolvedOriginPath(path) {
		super(path);
	}

	/**
	 *
	 * @param {String} path
	 */
	static resolvedDockerPath(path) {
		super(path);
	}
}
