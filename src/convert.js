/**
 * Convert compose file to sync stat
 */
import Ops from './abstract/ops.js'
import fs from 'fs';

export default class Convert extends Ops {
    constructor() {
        super();
        this.output("adding run script");
        let package_file = this.getConvertData();
        if (package_file.scripts == null) {
            package_file.scripts = {};
        }
        package_file.scripts["sync-stat"] = "node node_modules/sync-stat/index";
        fs.writeFile( this.getProjectRoot() +'/package.json', JSON.stringify(package_file,null,4), err => {
            if (err) {
              console.error(err);
            }
            // file written successfully
          });
    }

    getConvertData(){
        return JSON.parse(fs.readFileSync( this.getProjectRoot() +'/package.json', 'utf8'));
    }

}