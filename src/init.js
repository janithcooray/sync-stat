import fs from 'fs';
import Log from './abstract/log.js';
import Convert from './convert.js';
import ProcessLinkYml from './processYML.js';
import Sync from './sync.js';

export default class Init extends Log {
	constructor() {
		super();
		/**
		 * Add init
		 */

		const args_ = process.argv.slice(2);

		switch (args_[0]) {
			case 'run':
				new ProcessLinkYml();
				break;
			case 'convert':
				new Convert();
				break;
			case 'test':
				this.output('OK');
			case 'help':
				this.help();
			case '--help':
				this.help();
			case '-h':
				this.help();
				break;
			case null:
				this.output('Missing Command!');
				this.help();
			default:
				this.output(`Unknown Command "${args_[0]}"`);
				this.help();
				break;
		}
	}

	help() {
		this.output(
			`Commands: [Option] <ARG1> <ARG2> ...

    run                 - run sync compose
    help,-h , --help    - display this help message
    convert             - convert an existing docker-compose.yml
    version             - Display Version

    `
		);
	}
}
