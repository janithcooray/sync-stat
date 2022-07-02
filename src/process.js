/**
 * ProccessAction
 *
 * Will decide if the project uses JSON verion or YAML version
 */
import Log from './abstract/log.js';
import ProcessJSON from './processJSON.js';

export default class ProccessAction extends Log {
	constructor() {
		/**
		 * For now Only JSON version Will work
		 */
		let ProccessJSON = new ProcessJSON();
		let volumes = ProccessJSON.getAllVolumes();
		ProccessJSON.assignSync(volumes);
	}
}
