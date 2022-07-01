export default class VolumeInfo {
	constructor(object) {
		return this.parse(object);
	}

	parse(object) {
		let volumeInfo = object.volume.volume;
		volumeInfo.id = object.id;
		volumeInfo.container = object.container;
		return this.convert(volumeInfo);
	}

	convert(object) {
		this.container = object.container;
		this.volumeId = object.id;
		(this.from = object.from),
			(this.to = object.to),
			(this.mode = object.mode),
			(this.owner = object.owner),
			(this.cmd = object.cmd),
			(this.ignore = object.ignore),
			(this.replace = object.replace);
	}
}
