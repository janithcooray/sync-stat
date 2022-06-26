const chokidar = require('chokidar');
const child_process = require('child_process')




// One-liner for current directory
chokidar.watch('./app',{ignoreInitial: true,usePolling: false}).on('all', (event, path) => {
  //console.log(event, path);
  if (event=="change" || event == "add") {
      console.log('copy '+path);
      try {
        child_process.execSync('docker exec keells-2022-wp mkdir -p '+dockerpath(getPath(path)));
        child_process.execSync('docker cp "'+path+'" keells-2022-wp:'+dockerpath(path));
      } catch (error) {
          console.log(getPath(path));
      }
  }
  if (event=="addDir") {
    console.log('mkdir'  +dockerpath(path));
    child_process.execSync('docker exec keells-2022-wp mkdir -p '+dockerpath(path));
  }
  if (event=="unlink") {
    console.log('remove file ' +dockerpath(path));
    child_process.execSync('docker exec keells-2022-wp rm -f '+dockerpath(path)+'');
  }
  if (event=="unlinkDir") {
    console.log('remove dir '+dockerpath(path));
    child_process.execSync('docker exec keells-2022-wp rm -rf '+dockerpath(path)+'');
  }
});