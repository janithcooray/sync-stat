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
        
        let compose = this.getCompose();
        let containers = this.getContainers(compose);
        let container = containers[0];
        this.getVolumesAttached(container);
        //switch (ops.mode) {}
    }

    /**
     * retuns the state of 
     * 
     * Is it the first time this is running
     */
    getState = () => {
       return JSON.parse(fs.readFileSync( this.getProjectRoot() +'/package.json', 'utf8'));
    }

    //parse Convertdata
    getCompose = () => {
        return JSON.parse(fs.readFileSync( this.getProjectRoot() +'/sync-compose.json', 'utf8'));
    };

    getContainers = (compose) =>{
        return compose.forEach(element => {
            containers.push(element);
        });
    };

    getVolumesAttached = (container) => {
        return compose.forEach(element => {
            containers.push(element);
        });
    };
}