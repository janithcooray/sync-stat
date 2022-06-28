import YamlVersion from "../abstract/ymlVersion";

export default class getVolumes extends YamlVersion{

    constructor(context){
        super(context);
        this.setMinVersion(1);
        this.whenOnIncompatible("Cannot be under version 1, Please Update sync-compose");
        this.checkCompatibility();

        return this.getContainersFunction();
    }

    getContainersFunction = () => {
        let containers = []
        this.yml.containers.forEach((key) => {
            containers.push(key);
        });
        return containers;
    }

}