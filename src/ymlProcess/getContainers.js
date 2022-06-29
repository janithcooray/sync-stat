import YamlVersion from "../abstract/ymlVersion.js";

export default class GetContainers extends YamlVersion {

    constructor(context){
        super(context);
        this.setMinVersion(1);
        this.whenOnIncompatible("Cannot be under version 1, Please Update sync-compose");
        this.checkCompatibility();

        return this.getContainersFunction();
    }

    getContainersFunction = () => {
        let containers = [];
        this.output(this.yml);
        this.yml.containers.forEach((key) => {
            containers.push(key);
        });
        return containers;
    }

}