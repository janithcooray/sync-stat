/**
 * Process YML file
 */
 import Log from "../abstract/log.js";
 import yaml from "js-yaml";
import LoadYML from "./loadYML.js";
import GetContainers from "./getContainers.js";


 export default class ProcessYML extends Log {
 
     constructor(){
        super();
        this.yml = new LoadYML();
        this.containers = this.getContainers();
        this.output(this.containers);
     }

     getContainers(){
        return new GetContainers(this);
     }
 
 }
 