import Log from '../abstract/log.js';

export default class DockerCp extends Log {
	constructor() {
		super();
	}

	copy(container, from, to) {
		try {
			child_process.execSync(`docker cp ${from} ${container}:${to}`);
		} catch (error) {
			return false;
		}

		return true;
	}
}
