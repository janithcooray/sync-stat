import Log from '../abstract/log.js';
import child_process from 'child_process';

export default class DockerExec extends Log {
	constructor() {
		super();
	}

	/**
	 * Execute Docker Commands None-Interactively
	 *
	 * @param {Docker Container} container
	 * @param {Execution arguments} arg
	 * @param {Continue on Fail?} acceptFail
	 * @returns
	 */
	static execNoneInteractivly(container, arg, acceptFail = false) {
		try {
			child_process.execSync(`docker exec ${container} ${arg}`);
		} catch (error) {
			return false;
		}

		return true;
	}

	/**
	 * Execute Docker Commands Interactively
	 *
	 * @param {Docker Container} container
	 * @param {Execution arguments} arg
	 * @param {Continue on Fail?} acceptFail
	 * @returns
	 */
	static execInteractivly(container, arg, acceptFail = false) {
		try {
			child_process.execSync(`docker exec -i ${container} ${arg}`);
		} catch (error) {
			return false;
		}

		return true;
	}
}
