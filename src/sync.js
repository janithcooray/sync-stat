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
        chokidar.watch(fromPath,{ignoreInitial: true,usePolling: false}).on('all', (event, path) => {
            //console.log(event, path);
            if (event=="change" || event == "add") {
                console.log('copy '+path);
                try {
                  child_process.execSync('docker exec ' + this.containerName +' mkdir -p '+dockerpath(getPath(path)));
                  child_process.execSync('docker cp "'+path+'" ' + this.containerName +':'+dockerpath(path));
                } catch (error) {
                    console.log(getPath(path));
                }
            }
            if (event=="addDir") {
              console.log('mkdir'  +dockerpath(path));
              child_process.execSync('docker exec ' + this.containerName +' mkdir -p '+dockerpath(path));
            }
            if (event=="unlink") {
              console.log('remove file ' +dockerpath(path));
              child_process.execSync('docker exec ' + this.containerName +' rm -f '+dockerpath(path)+'');
            }
            if (event=="unlinkDir") {
              console.log('remove dir '+dockerpath(path));
              child_process.execSync('docker exec ' + this.containerName +' rm -rf '+dockerpath(path)+'');
            }
          });
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