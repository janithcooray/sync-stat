class VolumeInfo {
    constructor(object){
        this.container = object.container;
        this.volumeId = object.id;
        this.from= object.from,
        this.to= object.to,
        this.mode = object.mode,
        this.owner = object.owner,
        this.cmd = object.cmd,
        this.ignore = object.ignore,
        this.replace = object.replace
    }
}