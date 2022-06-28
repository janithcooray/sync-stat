import { default as Log } from "./log.js";

export default class YamlVersion extends Log {
    
    constructor(context){
        this.yml = context.yml;
    }


    checkCompatibility(){
        if (this.version > context.version) {
            throw "Version Mismatch - "+ this.issueMessage;
        }
    }

    /**
     * Some Yaml functions will be limited to versions
     */
    setMinVersion(version){
        this.version = version;
    }

    getMinVersion(){
        return this.version;
    }

    /**
     * set Version Incompatibility Issue
     * @param {*} text 
     */
    whenOnIncompatible(text){
        this.issueMessage = text;
    }

    onIncompatible(){
        return this.issueMessage;
    }

}