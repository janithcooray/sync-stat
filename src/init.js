import fs from 'fs';
import { default as stdio } from 'stdio';
import Log from "./abstract/log.js";

export default class Init extends Log {
    constructor () {
        super();
        /**
         * Add init 
         */
        let ops =  stdio.getopt({
            'mode': {key: 'm', args: 1, description: ' GCS or Local??',required: false, default : ["local"]},
            'debug': {description: 'will only debug',default: 0},
        });
        
        //switch (ops.mode) {}
    }

    /**
     * retuns the state of 
     * 
     * Is it the first time this is running
     */
    getState = () => {
       return JSON.parse(fs.readFileSync( getProjectRoot() +'/package.json', 'utf8'));
    }

        //parse Convertdata
        syncCompose = () => {
            return JSON.parse(fs.readFileSync( getProjectRoot() +'/sync-compose.json', 'utf8'));
        };
    
        getContainers = (compose) =>{
            let composeOBJ = JSON.parse(compose);
            composeOBJ.forEach(element => {
                console.log();
            });
        };
    }

}