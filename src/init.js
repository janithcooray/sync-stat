import fs from 'fs';
import { default as stdio } from 'stdio';
import Log from "./abstract/log.js";
import Convert from './convert.js';
import ProcessLinkYml from './processYML.js';
import Sync from './sync.js';

export default class Init extends Log {
    constructor () {
        super();
        /**
         * Add init 
         */
        
        const args_ = process.argv.slice(2);

        switch (args_[0]) {
            case "run":
                    new ProcessLinkYml();
                break;
            case "install":
                    new Convert();
                break;
            case "test":
                this.output("OK");
            case "help":
                this.output("OK");
                break;
            default:
                this.output(ops)
                break;
        }
        
        
        
    }

    
}