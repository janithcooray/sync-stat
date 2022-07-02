/**
 * Process YML file
 */
import Log from './abstract/log.js';
import yaml from 'js-yaml';
import ProcessYML from './ymlProcess/yamlProcess.js';
export default class ProcessLinkYml extends Log {

   constructor(arg){
        super();
        new ProcessYML(arg);
    }
}
