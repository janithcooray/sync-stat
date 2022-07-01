import yaml from 'js-yaml';
import fs from 'fs';
import Log from '../abstract/log.js';

export default class LoadYML extends Log {
	constructor() {
		super();
		return this.getYML();
	}

	/**
	 *
	 * @returns yml data
	 */
	getYML() {
		return yaml.load(this.getCompose());
	}

	/**
	 *
	 * @returns sync-compose.yml
	 */
	getCompose = () => {
		return fs.readFileSync(this.getProjectRoot() + '/sync-compose.yml', 'utf8');
	};
}
