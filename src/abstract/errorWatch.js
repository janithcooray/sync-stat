import ErrorClass from './errorClass.js';
import Util from './util.js';

export default class ErrorWatch extends Util {
	/**
	 * Sync compose Errors
	 * use code rage 10000 - 19999
	 */

	/**
	 * File is not found in project root
	 *
	 * @returns @ErrorClass
	 */
	static FILE_NOT_FOUND = () => {
		return new ErrorClass(
			10000,
			'FILE_NOT_FOUND',
			'sync-compose.yml file not found'
		);
	};

	/**
	 * File has syntax errors
	 *
	 * @returns @ErrorClass
	 */
	static FILE_SYNTAX_ERROR = () => {
		return new ErrorClass(
			10001,
			'FILE_SYNTAX_ERROR',
			'sync-compose.yml has a syntax error'
		);
	};
}

throw ErrorWatch.FILE_NOT_FOUND();
