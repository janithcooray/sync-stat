import PathResolverClass from '../../interface/pathResolverClass.js';

export default class DarwinPathResolver extends PathResolverClass {
	/**
	 *
	 * @param {*} path
	 */
	static isDir(path) {
		return path.endsWith('/') ? path + '.' : path;
	}

	static resolvedOriginPath(path) {
		return path;
	}

	static resolvedDockerPath(from, proot, croot) {
		/**
		 * Uses Unix Like paths
		 */
		//let origin_relative = from.split('/');
		//origin_relative.pop();
		//origin_relative.join('/');

		return '"' + from.replace(proot, croot) + '"';
	}
}
