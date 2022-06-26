import { default as Log } from "./log.js";
/**
 * Ops.
 *
 * @class Ops
 * @extends {Log}
 */
export default class Ops extends Log {

    constructor(){
        super();
        //empty construct
    }
     
    /**
     * 
     * @param {*} key 
     */
    setKey(key){
        this.key=key;
    }
    
    /**
     * 
     * @param {*} arg 
     */
    setArg(arg){
        this.arg=arg;
    }

    /**
     * 
     * @param {*} arg 
     */
    setDescription(arg){
        this.description=description;
    }

    /**
     * 
     * @param {*} required 
     */
    setRequiredn(required){
        this.required=required;
    }

    /**
     * 
     * @param {*} default_ 
     */
    setDefault(default_){
        this.default=default_;
    }

    /**
     * 
     * @param {*} function_ 
     */
    mainFunction(arg){
       //implement
    }

    /**
     * on End Function
     */
    onEnd(){

    }


    /**
     * 
     * @param {*} trigger
     * 
     * This Should be the negative output. if the
     * ops value matches this value, it will not
     * run.  
     */
    setRunTrigger(trigger=0){
        this.runTrigger=trigger;
    }

    /**
     * 
     * @returns key for ops
     */
    getKey(){
        return this.key;
    }
       
    /**
     * 
     * @returns Description for ops
     */
    getDescription(){
        return this.description;
    }

    /**
     * 
     * @returns arg for ops
     */
    getArg(){
        return this.arg;
    }

    /**
     * 
     * @returns required?
     */
    getRequiredn(){
        return  this.required;
    }

    /**
     * 
     * @returns default value
     */
    getDefault(){
        return this.default;
    }


    trigger(ops,arg){
        let shouldrun = ops[this.key]!=this.runTrigger;
        if (shouldrun) {
            this.mainFunction(arg);
        }
    }

    getOps(){
        return {
            key: this.key,
            args: this.arg,
            description: this.description,
            required: this.required,
            default: this.default
        };
    }
}