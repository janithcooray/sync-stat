import yaml from "js-yaml";
import fs from 'fs';

export default class LoadYML {

    
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
    getCompose = () => {
        return fs.readFileSync( this.getProjectRoot() +'/sync-compose.yml', 'utf8');
    };
}
