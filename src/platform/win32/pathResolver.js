import PathResolverClass from '../../interface/pathResolverClass.js';

export default class Win32PathResolver extends PathResolverClass {
	/**
	 *
	 * @param {*} path
	 */
	static isDir(path) {
		return path.endsWith('/') ? path + '.' : path;
	}

	/**
	 *
	 * @param {String} path
	 */
	static resolvedOriginPath(path) {
		return path.split('\\').join('/');
	}

	/**
	 *
	 * @param {String} path
	 */
	static resolvedDockerPath(from, proot, croot) {
		console.log(from + ' - ' + proot + ' - ' + croot);
		return '"' + from.replace(proot, croot) + '"';
	}
}
