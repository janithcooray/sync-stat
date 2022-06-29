/**
 * Process YML file
 */
 import Log from "../abstract/log.js";
 import yaml from "js-yaml";
import LoadYML from "./loadYML.js";
import GetContainers from "./getContainers.js";
import getVolumes from "./getVolumes.js";


 export default class ProcessYML extends Log {
 
     constructor(){
        super();
        this.yml = new LoadYML();
        this.containers = this.getContainers();
        this.output(this.containers);
        this.getVolumes(this.containers[0]);
     }

     getContainers(){
        return new GetContainers(this);
     }

     getVolumes(container){
        return new getVolumes(this).getVolumesFunction(this.container);
     }
 
 }
 