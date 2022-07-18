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

	static resolvedDockerPath(from, to) {
		/**
		 * Uses Unix Like paths
		 */
		let pieces = params.split('/');
		pieces.pop();
		let origin_relative = pieces.join('/');

		return;
	}
}
