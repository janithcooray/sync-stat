import YamlVersion from '../abstract/ymlVersion.js';

export default class GetContainers extends YamlVersion {
	/**
	 *
	 * @param {Parent Context} context
	 * @returns function Get Containers Function
	 */
	constructor(context) {
		super(context);
		this.setMinVersion(1);
		this.whenOnIncompatible(
			'Cannot be under version 1, Please Update sync-compose'
		);
		this.checkCompatibility();

		return this.getContainersFunction();
	}

	/**
	 * Get Containers
	 * @returns Containers
	 */
	getContainersFunction = () => {
		let containers = [];
		this.yml.containers.forEach(key => {
			containers.push(key);
		});
		return containers;
	};
}
