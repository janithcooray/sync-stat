import Util from './util.js';
/**
 * Abstract Class Log
 *
 * @class Log
 */
export default class Log extends Util {
	output(arg) {
		console.log(arg);
	}

	/**
	 * Information Outout
	 * @param {String} arg
	 */
	static output(arg) {
		console.log(Util.INFO + ' ' + arg);
	}

	/**
	 * Start Ops output
	 * @param {String} arg
	 */
	static outputS(arg) {
		console.log(Util.START_OPS + ' ' + arg);
	}

	/**
	 * Middle Ops Output
	 * @param {String} arg
	 */
	static outputO(arg) {
		console.log(Util.ONGOING_OPS + ' ' + arg);
	}

	/**
	 * Finished Output
	 * @param {String} arg
	 */
	static outputF(arg) {
		console.log(Util.FINISHED_SUCCESS_OPS + ' ' + arg);
	}

	/**
	 * Error Output
	 * @param {String} arg
	 */
	static outputE(arg) {
		console.log(Util.ERROR_OPS + ' ' + arg);
	}

	/**
	 * Hidden Output, for debugging
	 * @param {String/Object} arg
	 */
	static outputH(arg) {}
}
