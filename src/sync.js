import Log from "./abstract/log.js";
import chokidar from 'chokidar';
import child_process from 'child_process';

export default class Sync extends Log {
    constructor(containerName,volumePath,fromPath){
        super();
        this.containerName = containerName;
        this.volumePath = volumePath;
        this.fromPath = fromPath;
        this.output(this.dockerpath("test/index.php"));
    }

    async startSync() {
        chokidar.watch(this.fromPath,{ignoreInitial: true,usePolling: false}).on('all', (event, path) => {
            if (event=="change" || event == "add") {
                console.log('copy '+path);
                try {
                  child_process.execSync('docker exec ' + this.containerName +' mkdir -p '+this.dockerpath(this.getPath(path)));
                  child_process.execSync('docker cp "'+path+'" ' + this.containerName +':'+this.dockerpath(path));
                } catch (error) {
                    console.log(this.getPath(path));
                }
            }
            if (event=="addDir") {
              console.log('mkdir'  +this.dockerpath(path));
              child_process.execSync('docker exec ' + this.containerName +' mkdir -p '+this.dockerpath(path));
            }
            if (event=="unlink") {
              console.log('remove file ' +this.dockerpath(path));
              child_process.execSync('docker exec ' + this.containerName +' rm -f '+this.dockerpath(path)+'');
            }
            if (event=="unlinkDir") {
              console.log('remove dir '+this.dockerpath(path));
              child_process.execSync('docker exec ' + this.containerName +' rm -rf '+this.dockerpath(path)+'');
            }
          });
    }

    dockerpath(params) {
        this.output(params)
        return '"'+params.replace(this.fromPath,this.volumePath)+'"';
    }
    
    getPath(params) {
        let pieces = params.split('/')
        pieces.pop();
        return pieces.join('/');
    }
}