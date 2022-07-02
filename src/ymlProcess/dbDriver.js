import Log from "../abstract/log.js";
import LoadYML from "./loadYML.js";
import MysqlDriver from "./mysqlDriver.js";

export default class DbDriver extends Log {

    constructor(arg){
        super()
        this.profile = arg[1];
        this.yml = new LoadYML();

        this.methodDriver();
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
                if (this.isInProfile(this.yml.database.profile)) {
                    let mysqlDriverInst = new MysqlDriver(this);
                    let statDriver = mysqlDriverInst.start();
                    return statDriver;
                }
                else{
                    return  true;
                }

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