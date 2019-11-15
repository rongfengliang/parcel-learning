import shortid from "shortid"
import { UserLogin } from "./user"
import Vue from "vue"
import App from "./app.vue"
class User {
    public id: string;
    public userLogin: UserLogin;
    constructor(public name: string, public age: number) {
        this.name = name;
        this.age = age;
        this.id = shortid.generate();
        this.userLogin = new UserLogin();
    }
    render() {
        // let that  =this;
        window.onload = function () {
            // let token = that.userLogin.token;
            // let content=`${that.name}----${that.age}----${that.id}---${token}`
            new Vue(App).$mount('#content')
        }
    }
}
var user = new User("dalong", 333)
user.render()