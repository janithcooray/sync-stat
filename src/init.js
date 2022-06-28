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
                    let volumes = this.getAllVolumes();
                    this.assignSync(volumes);    
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
        let containers = []
        Object.entries(compose).forEach(([key, value]) => {
            containers.push(key);
        });
        return containers;
    };

    getVolumesAttached = (compose,container) => {
        let volumes = [];
        Object.entries(compose[container].volumes).forEach(element => {
            volumes.push(element);
        });
        return volumes;
    };

    getAllVolumes = () => {
        let compose = this.getCompose()["containers"];
        let containers = this.getContainers(compose);

        let allVolumes = [];
        containers.forEach(element => {
          let container = element;
          let volumes = this.getVolumesAttached(compose,container);
          volumes.forEach(vols => {
            allVolumes.push([ container,vols[0], vols[1]]);
          });
        });
        return allVolumes;
    };

    assignSync = (volumes) => {
        volumes.forEach(element => {
            this.output(`in ${element[0]} from ${element[2]} to ${element[1]}`);
            //let sync = new Sync(element[0],element[1],element[2]);
            //sync.startSync();      
        });
    };
}