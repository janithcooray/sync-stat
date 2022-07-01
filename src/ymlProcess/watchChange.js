import Log from "../abstract/log.js";
import chokidar from 'chokidar';
import child_process from 'child_process';
export default class WatchChange extends Log {
    constructor(volume){
        super();
        this.containerName = volume.container;
        this.volumePath = volume.to;
        this.fromPath = volume.from;
        this.owner = volume.owner;
        this.cmd = volume.cmd;
        this.mode = volume.mode;
    }
    


    async startSync() {
        chokidar.watch(this.fromPath,{ignoreInitial: true,usePolling: false}).on('all', (event, path) => {
            if (event=="change" || event == "add") {
                try {
                  child_process.execSync('docker exec ' + this.containerName +' mkdir -p '+this.dockerpath(this.getPath(path)));
                  child_process.execSync('docker cp "'+path+'" ' + this.containerName +':'+this.dockerpath(path));
                  //child_process.execSync('docker exec ' + this.containerName +' chown -R '+this.owner+' '+this.dockerpath(this.getPath(path)));
                  //child_process.execSync('docker exec ' + this.containerName +' chmod -R '+this.mode+' '+this.dockerpath(this.getPath(path)));
                  console.log('✅ copied '+path + " to " + this.containerName +":"+ this.dockerpath(path));
                } catch (error) {
                    console.log("❌ unable to copy"+this.dockerpath(this.getPath(path)));
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

    up(){
      this.output("🚀 Copying Source to "+ this.containerName);
      child_process.execSync('docker cp "'+this.dcpeParse(this.fromPath)+'" ' + this.containerName +':'+this.volumePath);
      console.log('✅ Ok');

      this.output("🚀 Changing Destination Owner for "+ this.containerName);
      child_process.execSync('docker exec ' + this.containerName +' chown -R '+this.owner+' '+this.volumePath);
      console.log('✅ Ok');

      this.output("🚀 Changing Destination Mode for "+ this.containerName);
      child_process.execSync('docker exec ' + this.containerName +' chmod -R '+this.mode+' '+this.volumePath);
      console.log('✅ Ok');

      this.output("✅ Sync Ready for "+this.containerName);

      if(this.cmd != null){
        this.cmd.forEach(element => {
          this.output("🚀 "+ this.containerName+ " "+element);
          child_process.execSync('docker exec ' + this.containerName +" "+ element);
          console.log('✅ Ok');
        });
      }

      this.startSync();
    }

    dockerpath(params) {
        //this.output(params)
        return '"'+params.replace(this.fromPath,this.volumePath)+'"';
    }

    dcpeParse(path){
      return path.endsWith("/")?path+".":path;
    }
    
    getPath(params) {
        let pieces = params.split('/')
        pieces.pop();
        return pieces.join('/');
    }

}