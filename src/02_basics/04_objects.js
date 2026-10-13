const tinderUser=new Object()// ye singleton object hy
const appleUser={}// ye non singleton object hy
tinderUser.name="abad"// hum empty object ko bad me key and value add kar sakte hy
tinderUser.age=20
tinderUser.loggedIn="true"
console.log(tinderUser);
// nested object and how to print
const biodata={
    fullname:{
        // username:{
        //     firstname:"abid",
        //     lastname:"ali"
        // }
    },
    age:20,
    
}
console.log(biodata.fullname?.username?.firstname); 
