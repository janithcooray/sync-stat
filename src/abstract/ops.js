import { default as Log } from "./log";
/**
 * Ops.
 *
 * @class Ops
 * @extends {Log}
 */
class Ops extends Log {

    constructor(){
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