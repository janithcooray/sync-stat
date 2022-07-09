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

	static output(arg) {
		console.log(Util.INFO + ' ' + arg);
	}

	static outputS(arg) {
		console.log(Util.START_OPS + ' ' + arg);
	}

	static outputO(arg) {
		console.log(Util.ONGOING_OPS + ' ' + arg);
	}

	static outputF(arg) {
		console.log(Util.FINISHED_SUCCESS_OPS + ' ' + arg);
	}

	static outputE(arg) {
		console.log(Util.ERROR_OPS + ' ' + arg);
	}
}
