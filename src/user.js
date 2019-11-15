import shortid from "shortid"
class UserLogin {
    constructor() {
        this.token = shortid.generate();
    }
    login() {
        console.log("login", this.token)
    }
}
export default UserLogin
export {
    UserLogin
}