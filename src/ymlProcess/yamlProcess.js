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
        this.volumes = this.getVolumes(this.containers);
        this.output(this.volumes);
     }

     getContainers(){
        return new GetContainers(this);
     }

     getVolumes(containers){
        let allVolumes = [];
        containers.forEach(container => {
            new getVolumes(this).getVolumesFunction(container).forEach(volume => {
                allVolumes.push(volume) 
            });
        });
        return allVolumes;
     }

     startSync(volumes){
        volumes.forEach(element => {
            
        });
     }
 
 }
 