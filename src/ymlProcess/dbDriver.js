import YamlVersion from "../abstract/ymlVersion.js";

export default class dbDriver extends YamlVersion {

    constructor(context){
        super(context)
        this.setMinVersion(1);
        this.whenOnIncompatible("Cannot be under version 1, Please Update sync-compose");
        this.checkCompatibility();

    }

    methodDriver(){
        if ( this.yml.database != null) {
            let driver = this.yml.database.driver
            
        }
    }

}