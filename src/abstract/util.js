/**
 * Abstract classes for utility
 */

import Constants from './constant.js';

export default class Util extends Constants {
	getProjectRoot = () => './';

	isInProfile(profile) {
		if (this.profile != null) {
			if (profile == this.profile || profile == null) {
				return true;
			} else {
				return false;
			}
		}
		return true;
	}

	/**
	 *
	 * @returns platform
	 */
	getPlatfrom() {
		return process.platform;
	}

	/**
	 *
	 * @returns platform
	 */
	static getPlatfrom() {
		return process.platform;
	}

	/**
	 *
	 * @param {functionname} name
	 * @returns function
	 */
	getPlatformFunction(name) {
		let opsys = this.getPlatfrom();
		return `${opsys}/${name}`;
	}
}
