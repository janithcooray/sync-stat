/**
 * Abstract classes for utility
 */

export default class Util {

    getProjectRoot = () => process.env.PWD;

    //parse Convertdata
    syncCompose = () => {
        return JSON.parse(fs.readFileSync( getProjectRoot() +'/sync-compose.json', 'utf8'));
    };

    getContainers = (compose) =>{
        let composeOBJ = JSON.parse(compose);
        
    };
}