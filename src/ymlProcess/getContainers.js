import YamlVersion from "../abstract/ymlVersion";

export default class GetContainers extends YamlVersion{
    constructor(){
        super();
        this.setMinVersion(1);
        this.whenOnIncompatible("Cannot be under 1, Please Update sync-compose");
    }
}