import yaml from "js-yaml";
import Log from "../abstract/log";

export default class LoadYML extends Log {
    constructor(){
        super();
        let ymlObject = yaml.load(getCompose);

    }

    getCompose = () => {
        return fs.readFileSync( this.getProjectRoot() +'/sync-compose.yml', 'utf8');
    };
}