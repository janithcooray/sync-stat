import Log from './log.js';

export default class ErrorClass extends Log {
	/**
	 * Constructs a new Error
	 *
	 * @param {int} code
	 * @param {String} name
	 * @param {String} message
	 * @returns
	 */
	constructor(code, name, message) {
		let error = new Error();
		error.code = code;
		error.name = name;
		error.message = message;
		error.url = `https://sync-stat.nova64.xyz/error/${code}`;
		return error;
	}

	static throwError(ERROR_VAR) {
		this.output(ERROR_VAR);
		process.exit(1);
	}
}
