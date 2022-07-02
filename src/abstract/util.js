/**
 * Abstract classes for utility
 */

export default class Util {
    getProjectRoot = () => "./";
    //getProjectRoot = () => process.env.PWD;

    isInProfile(profile){
        if (this.profile != null) {
            if (profile == this.profile || profile== null ) {
                return true;
            }
            else{
                return false;
            }
        }
        return true;
     }

}
