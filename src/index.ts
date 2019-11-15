import  shortid from "shortid"
class User {
    public id:string;
    constructor(public name:string,public age:number){
       this.name=name;
       this.age=age;
       this.id=shortid.generate();
    }
    render(){
        let that  =this;
        window.onload=function(){
        let el = document.getElementById("content");
        let content=`${that.name}----${that.age}----${that.id}`
        el.innerHTML=content;
        console.log(content)
     }
    }

}
var user = new User("dalong",333)
user.render()