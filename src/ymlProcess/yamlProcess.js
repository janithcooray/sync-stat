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
        this.getVolumes();
     }

     getContainers(){
        return new GetContainers(this);
     }

     getVolumes(){
        let a = new getVolumes(this).getVolumesFunction(this.containers[0]);
        this.output(a);
     }
 
 }
 