import ErrorClass from './errorClass.js';
import Util from './util.js';

export default class ErrorWatch extends Util {
	/** ----------------<FILE HANDLING>-------------- */
	/**
	 * Sync compose Errors
	 * use code rage 10000 - 19999
	 */

	/**
	 * File is not found in project root
	 *
	 * @returns @ErrorClass
	 */
	static SYNC_FILE_SYNTAX_ERROR = new ErrorClass(
		10000,
		'FILE_NOT_FOUND',
		'sync-compose.yml file not found'
	);
	/**
	 * File has syntax errors
	 *
	 * @returns @ErrorClass
	 */
	static SYNC_FILE_SYNTAX_ERROR = new ErrorClass(
		10001,
		'FILE_SYNTAX_ERROR',
		'sync-compose.yml has a syntax error'
	);

	/** ----------------<DATABASE>-------------- */

	/***
	 * Database Hadnling Errors
	 * use code range 20000 - 29999
	 *
	 */

	static CREDENTIALS_NOT_DEFINED = new ErrorClass(
		20000,
		'CREDENTIALS_NOT_DEFINED',
		'Credentials are not correct'
	);
}

ErrorClass.throwError(ErrorWatch.FILE_NOT_FOUND);
