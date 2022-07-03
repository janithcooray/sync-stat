/**
 * Volume Data Class
 *
 */

export default class VolumeInfo {
	/**
	 *
	 * @param {YML object} object
	 * @returns JSON Object
	 */
	constructor(object) {
		//super();
		return this.parse(object);
	}

	/**
	 *
	 * @param {YAML} object
	 * @returns Convert Function
	 */
	parse(object) {
		let volumeInfo = object.volume.volume;
		volumeInfo.id = object.id;
		volumeInfo.container = object.container;
		return this.convert(volumeInfo);
	}

	/**
	 * Sets Data to Context
	 * @param {Converted JSON} object
	 */
	convert(object) {
		this.container = object.container;
		this.volumeId = object.id;
		(this.from = object.from),
			(this.to = object.to),
			(this.mode = object.mode),
			(this.owner = object.owner),
			(this.cmd = object.cmd),
			(this.ignore = object.ignore),
			(this.replace = object.replace),
			(this.profile = object.profile);
	}
}
