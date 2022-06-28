import fs from 'fs';
import { default as stdio } from 'stdio';
import Log from "./abstract/log.js";
import Convert from './convert.js';
import Sync from './sync.js';

export default class Init extends Log {
    constructor () {
        super();
        /**
         * Add init 
         */
        let ops =  stdio.getopt({
            'mode': {key: 'm', args: 1, description: ' GCS or Local??',required: true, default : ["run"]},
        });

        switch (ops.mode) {
            case "run":
                      
                break;
            case "install":
                    new Convert();
                break;
            case "test":
                this.output("OK")
                break;
            default:
                break;
        }
        
        
        
    }

    
}