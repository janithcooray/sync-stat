/**
 * Abstract classes for utility
 */

export default class Util {
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
	 * @param {functionname} name
	 * @returns function
	 */
	getPlatformFunction(name) {
		let opsys = this.getPlatfrom();
		return `${opsys}/${name}`;
	}
}
