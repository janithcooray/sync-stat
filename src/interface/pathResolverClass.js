import Log from '../abstract/log.js';

export default class PathResolverClass extends Log {
	/**
	 * Is the Path a Directory
	 */
	static isDir(path) {}

	/**
	 * get Compatible Origin path
	 */
	static resolvedOriginPath(path) {}

	/**
	 * get Compatible Docker Path
	 */
	static resolvedDockerPath(from, to) {}
}
