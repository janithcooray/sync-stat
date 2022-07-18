import child_process from 'child_process';
import Log from '../../abstract/log.js';
import PathHelper from './path.js';

export default class DockerCp extends Log {
	/**
	 *
	 * @param {*} container
	 * @param {*} from
	 * @param {*} to
	 * @returns
	 */
	static copy(container, from, to) {
		Log.output(`docker cp ${PathHelper.isDir(from)} ${container}:${to}`);
		try {
			child_process.execSync(
				`docker cp ${PathHelper.isDir(from)} ${container}:${to}`
			);
			this.outputF('ok');
		} catch (error) {
			return false;
		}

		return true;
	}

	/**
	 *
	 * @param {*} container
	 * @param {*} from
	 * @param {*} to
	 * @returns
	 */
	static copyD(container, from, to) {
		Log.output(
			`docker cp ${PathHelper.isDir(
				PathHelper.resolvedOriginPath(from)
			)} ${container}:${PathHelper.resolvedDockerPath(from, to)}`
		);
		/*try {
			child_process.execSync(
				`docker cp ${PathHelper.isDir(from)} ${container}:${to}`
			);
			this.outputF('ok');
		} catch (error) {
			return false;
		}*/

		return true;
	}
}
