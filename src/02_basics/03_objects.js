// agar object literal se bane ga tou woh sigleton nhi hoga 
// and constructor se bane ga toh woh single ton hoga


// object literals
const mySym=Symbol("key1")

const jsuser={
    name:"developer",
    age:18,
    "full name":"ai developer",
    location:"Arab",
    isLoggedIn:false,
    lastLoginDays:["monday","sunday"],
    // mySym:"key1", ye symbol nhi hy balki ye string hy symbol ka sahi syntax ye hy
    [mySym]:"key1",// ab ye symbol hy

}//this is object literals

console.log(jsuser.name)// ye tarika bah sahi hy 
console.log(jsuser["location"]);// object ki key string hotay  value kuch bah ho

// value ko change bah karsakte hy
jsuser.age=20
// Object.freeze(jsuser)
jsuser.age=30

// isse tarha hum new key bah add karsakte hy jisme function bah hosakta hy
jsuser.greeeting=function(){
    console.log("hello world");
    
}
jsuser.greeeting1=function(){
    console.log(`hello ${this.name}`)}
    console.log(jsuser.greeeting(),jsuser.greeeting1());
console.log(jsuser);
    