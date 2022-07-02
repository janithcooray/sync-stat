/**
 *
 * getVolumes
 *
 * Returns the volumes in Container array
 *
 * Author: janithcooray
 *
 */
import YamlVersion from '../abstract/ymlVersion.js';
import VolumeInfo from './volumeData.js';

export default class getVolumes extends YamlVersion {
	/**
	 * Returns Volumes function
	 * @param {parent} context
	 */
	constructor(context) {
		super(context);
		this.setMinVersion(1);
		this.whenOnIncompatible(
			'Cannot be under version 1, Please Update sync-compose'
		);
		this.checkCompatibility();
	}

	/**
	 *
	 * @param {Containers} container
	 * @returns volumes in containers
	 */
	getVolumesFunction = container => {
		let volumes = [];

		Object.entries(container).forEach(([key, value]) => {
			Object.entries(value.volumes).forEach(([id, volume]) => {
				volumes.push(new VolumeInfo({ container: key, id: id, volume }));
			});
		});

		return volumes;
	};
}
