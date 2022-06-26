import Log from "./abstract/log.js";
import chokidar from 'chokidar';
import child_process from 'child_process';

export default class Sync extends Log {
    constructor(containerName,volumePath,fromPath){
        this.containerName = containerName;
        this.volumePath = volumePath;
        this.fromPath = fromPath;
    }

    async startSync() {

    }

    dockerpath(params) {
        return '"'+params.replace(this.fromPath,'"'+volumePath)+'"';
    }
    
    getPath(params) {
        let pieces = params.split('/')
        pieces.pop();
        return pieces.join('/');
    }
}