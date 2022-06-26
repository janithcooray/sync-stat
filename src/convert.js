/**
 * Convert compose file to sync stat
 */
import Ops from './abstract/ops.js'

export default class Convert extends Ops {
    constructor() {
        super();
    }

    getConvertData(){
        return JSON.parse(fs.readFileSync( getProjectRoot() +'/sync-compose.json', 'utf8'));
    }

}