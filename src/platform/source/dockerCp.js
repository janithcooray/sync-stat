import Log from '../abstract/log.js';
import child_process from 'child_process';

export default class DockerCp extends Log {
	constructor() {
		super();
	}

	/**
	 *
	 * @param {*} container
	 * @param {*} from
	 * @param {*} to
	 * @returns
	 */
	copy(container, from, to) {
		try {
			child_process.execSync(`docker cp ${from} ${container}:${to}`);
		} catch (error) {
			return false;
		}

		return true;
	}
}
