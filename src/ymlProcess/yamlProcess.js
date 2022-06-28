/**
 * Process YML file
 */
 import Log from "./abstract/log.js";
 import yaml from "js-yaml";
import LoadYML from "./loadYML.js";


 export default class ProcessYML extends Log {
 
     constructor(){
        this.yml = new LoadYML();
     }
 
 }
 