/**
 * Process YML file
 */
import Log from '../abstract/log.js';
import yaml from 'js-yaml';
import LoadYML from './loadYML.js';
import GetContainers from './getContainers.js';
import getVolumes from './getVolumes.js';
import WatchChange from './watchChange.js';
import DockerVersion from '../platform/source/dockerVersion.js';

export default class ProcessYML extends Log {
	/**
	 * Construct Process YML Class
	 *
	 * @param {Array<String>} arg
	 */
	constructor(arg) {
		super();
		this.yml = new LoadYML();
		this.containers = this.getContainers();
		this.volumes = this.getVolumes(this.containers);
		this.profile = arg[1];

		DockerVersion.isInstalled();
		DockerVersion.isRunning();

		this.outputS('no. of sync ops ' + this.volumes.length);
		if (this.yml.start_compose != null) {
			DockerVersion.startCompose(this.yml);
		}
		this.startSync(this.volumes);
	}

	/**
	 * Get Containers
	 * @returns Containers Arrat
	 */
	getContainers() {
		return new GetContainers(this);
	}

	/**
	 *
	 * @param {Containers} containers
	 * @returns volumes
	 */
	getVolumes(containers) {
		let allVolumes = [];
		containers.forEach(container => {
			new getVolumes(this).getVolumesFunction(container).forEach(volume => {
				allVolumes.push(volume);
			});
		});
		return allVolumes;
	}

	/**
	 * Start Sync proccess
	 * @param {Container Volumes} volumes
	 */
	startSync(volumes) {
		volumes.forEach(element => {
			if (this.isInProfile(element.profile)) {
				let changes = new WatchChange(element);
				this.output(
					element.container +
						' will be synced on ' +
						element.from +
						':' +
						element.to
				);
				changes.up();
			}
		});
	}
}
