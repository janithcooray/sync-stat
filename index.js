/**
 * Nodejs sync-stat Setup
 */
const fs = require('fs');
const { default: stdio } = require('stdio');
let package = JSON.parse(fs.readFileSync('package.json', 'utf8'));

let ops =  stdio.getopt({
    'mode': {key: 'm', args: 1, description: ' GCS or Local??',required: false, default : ["local"]},
    'debug': {description: 'will only debug',default: 0},
});

switch (ops.mode) {
    case "local":
            console.log("yay");
            if (ops.debug!=0) {
                console.log("yay2");
            }
        break;
    default:
        break;
}