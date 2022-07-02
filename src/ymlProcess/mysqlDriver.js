import YamlVersion from "../abstract/ymlVersion.js";

export default class MysqlDriver extends YamlVersion {

    constructor(context){
        super(context)
        this.setMinVersion(1);
        this.whenOnIncompatible("Cannot be under version 1, Please Update sync-compose");
        this.checkCompatibility();

    }

    method(){
        if ( this.yml.database != null) {
            let mysql_method = this.yml

        }
    }

}