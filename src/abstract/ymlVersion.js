import { default as Log } from "./log.js";

export default class YamlVersion extends Log {
    
    constructor(context){
        super();
        this.yml = context.yml;
        this.context = context;
    }


    /**
     * will Throw an error if version is below expected
     */
    checkCompatibility(){
        //if (this.version > context.version) {
       //     this.output("ignoring error - " + this.issueMessage)
       // }
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