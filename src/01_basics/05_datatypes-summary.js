// primitive 
// 7 : string,number,boolean,null, undefined, bigInt, symbol
// js aik dynaimcally language hy mean isko ye nhi batana parta ke iski type kia hy 
    const name="abid" // iske type js ko pata hy string hy
    const num=123 // number
    const isloggedin=true// boolean
    const outtemp=null // null
    let age; // undefined
    const id=Symbol("123")
    const anotherId=Symbol("123") // agar value same bah ho to ye phir bah unique hy 
    console.log(id,anotherId);
    console.log(id=== anotherId);// false bcz unique
    
    const bigNumber=999777355566679999999999999998n
    console.log(bigNumber);
    
// Reference ( non primitive data types)
// Array Object Function
// non primitive data type ka output object hy hota hy and function object function hota hy
const Arr=["superman", "Ironman","batman"] // output object
let obj={
    name:"abid",
    age:20,

}// object
const myFunction=function(){
     console.log("hello world");
     
}// function but real object funtion
myFunction()
console.log(typeof Arr);
