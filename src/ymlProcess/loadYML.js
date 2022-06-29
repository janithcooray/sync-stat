import yaml from "js-yaml";
import fs from 'fs';
import Log from "../abstract/log.js";

export default class LoadYML extends Log {

    
    /**
     * 
     * @returns yml data
     */
    static getYML(){
        return yaml.load(this.getCompose());
    }

    /**
     * 
     * @returns sync-compose.yml
     */
    static getCompose = () => {
        return fs.readFileSync( this.getProjectRoot() +'/sync-compose.yml', 'utf8');
    };
}
