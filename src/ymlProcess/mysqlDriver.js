import YamlVersion from "../abstract/ymlVersion.js";
import mysql from 'mysql';

export default class MysqlDriver extends YamlVersion {

    constructor(context){
        super(context)
        this.setMinVersion(1);
        this.whenOnIncompatible("Cannot be under version 1, Please Update sync-compose");
        this.checkCompatibility();
        //return true;
    }

    start(){
        return true;
    }

    method(){
        if ( this.yml.database != null) {
            let mysql_method = this.yml
            return true;
        } 
        return true;
    }

    /**
     * Export a copy from sever directly
     * @returns true always
     */
    useFromServer(){

        return true;
    }


    /**
     * Import From data from a sql copy
     * @returns true 
     */
    useDump(){

        return true;
    }

}