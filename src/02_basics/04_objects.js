const tinderUser=new Object()// ye singleton object hy
const appleUser={}// ye non singleton object hy
tinderUser.name="abad"// hum empty object ko bad me key and value add kar sakte hy
tinderUser.age=20
tinderUser.loggedIn="true"
// console.log(tinderUser);
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
// console.log(biodata.fullname?.username?.firstname); 


 // how to merge object
 const obj1={1:"a",2:"b"}
 const obj2={3:"c",4:"d"}
//  console.log(Object.assign({},obj1,obj2))// first is target jis me all object ki value store hogay baki source hogay ab woh kalo obj ho ya phir or 
// // second is spread operator
// console.log({...obj1,...obj2});
   

// array of object
const arr=[
    {id:1},
    {id:2},
    {id:3}
]
// console.log(arr[2].id);
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));//[ 'name', 'age', 'loggedIn' ]
// console.log(Object.values(tinderUser));//[ 'abad', 20, 'true' ]
// console.log(Object.entries(tinderUser));//[ [ 'name', 'abad' ], [ 'age', 20 ], [ 'loggedIn', 'true' ] ]
// How to check this property in object
// console.log(tinderUser.hasOwnProperty("logged   n"));

// de structure in Object

const course={
    coursename:"java script",
    price:"999"
}
const {coursename}=course // {kya value nikalny hy:kya isko koi name dena hy}= kis object se value niklany
console.log(coursename);
// apna kaam kisi or sir me  dal dehna hy isse api kehte hy  
// ye json
{
    "name":"alex",
    "age":"17",

}
// kabhi kabhar array of object me api ka response ata hygigi
[
    {},
    {},
    {}
]