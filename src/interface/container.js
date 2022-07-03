import Log from '../abstract/log.js';

export default class Container extends Log {
	constructor(name) {
		super();
		validate(name);
	}

	validate(name) {
		/**
		 * Use validation
		 */
		return true;
	}
}
