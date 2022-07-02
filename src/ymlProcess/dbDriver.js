/**
 * dbDriver
 *
 * Handles DB functions in YAML
 * Author: janithcooray
 *
 */
import Log from '../abstract/log.js';
import LoadYML from './loadYML.js';
import MysqlDriver from './mysqlDriver.js';

export default class DbDriver extends Log {
	/**
	 * Start DB process
	 *
	 * @param {CLI argentents} arg
	 */
	constructor(arg) {
		super();
		this.profile = arg[1];
		this.yml = new LoadYML();
		this.methodDriver();
	}

	/**
	 * Pass proccess to relevant driver
	 * @returns true
	 */
	methodDriver() {
		if (this.yml.database != null) {
			let driver = this.yml.database.driver;
			if (driver == 'mysql') {
				this.output('using Mysql Driver');
				/**
				 * Later use loop here for array of db
				 * @remember
				 */
				if (this.isInProfile(this.yml.database.profile)) {
					let mysqlDriverInst = new MysqlDriver(this);
					let statDriver = mysqlDriverInst.start();
					return statDriver;
				} else {
					return true;
				}
			} else {
				this.output('driver not supported');
			}
		}
		return true;
	}
}
