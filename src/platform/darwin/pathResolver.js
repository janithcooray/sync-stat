import PathResolverClass from '../../interface/pathResolverClass.js';

export default class DarwinPathResolver extends PathResolverClass {
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

	static resolvedOriginPath(path) {
		super(path);
	}

	static resolvedDockerPath(path) {
		super(path);
	}
}
