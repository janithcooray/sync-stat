export default class Constants {
	/**
	 * -------------------------
	 * 		OS Naming Schemes
	 * -------------------------
	 */

	/**
	 * Codename For MacOs
	 * @returns {String}
	 */
	static get MAC_OS() {
		return 'darwin';
	}

	/**
	 * Codename For Linux
	 * @returns {String}
	 */
	static get LINUX() {
		return 'linux';
	}

	/**
	 * Codename For Windows
	 * @returns {String}
	 */
	static get WINDOWS() {
		return 'win32';
	}

	/**
	 * -------------------------
	 * 		Emojis
	 * -------------------------
	 */

	static get INFO() {
		return 'ℹ';
	}

	static get START_OPS() {
		return '✈';
	}

	static get ONGOING_OPS() {
		return '➤';
	}

	static get FINISHED_SUCCESS_OPS() {
		return '✔';
	}

	static get ERROR_OPS() {
		return '✘';
	}
}
