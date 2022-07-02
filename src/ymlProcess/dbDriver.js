import YamlVersion from "../abstract/ymlVersion.js";
import MysqlDriver from "./mysqlDriver.js";

export default class dbDriver extends Log {

    constructor(arg){
        super()
        this.yml = new LoadYML();

        return this.methodDriver();
    }

    methodDriver(){
        if ( this.yml.database != null) {
            let driver = this.yml.database.driver
            if (driver=="mysql") {
                this.output("using Mysql Driver")
                /**
                 * Later use loop here for array of db
                 * @remember
                 */
                 return this.isInProfile(this.yml.database.profile) ? new MysqlDriver(this.context) : true;

            }
            else{
                this.output("driver not supported")
            }
        }
        return true;
    }

}
/*
profile: staging
method: [ export | dump ]
file: [ ./relative | /absolute ]/path/to/dump.sql
server:
  database_user: 
  database_name:
  database_pass:
  host:
  port: 
local:
  database_user: 
  database_name:
  database_pass:
  root_password:
  host:
  port: 
*/