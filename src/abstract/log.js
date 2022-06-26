import Util from './until';
/**
 * Abstract Class Log
 *
 * @class Log
 */
export default class Log extends Util {
    output(arg){
        console.log(arg);
    }
}