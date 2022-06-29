/**
 * Process YML file
 */
import Log from "./abstract/log.js";
import yaml from "js-yaml";
import ProcessYML from "./ymlProcess/yamlProcess.js";
export default class ProcessLinkYml extends Log {

    constructor(){
        super();
        new ProcessYML();
    }

    /**
     * Load Yaml File
     */
    loadYML(){

    }

    /**
     * list Containers
     */
    getContainers(){

    }
}
new ProcessLinkYml();