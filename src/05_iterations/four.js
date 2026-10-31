// For in loop
// map and array and object me loop lagana hy
const myobject={
    js:"javascript",
    cpp:"c++",
    Rb:"ruby",
    swift:"swift"
}
for (const key in myobject) {
//   console.log(`this is key :- *${key}* , and this value :- **${myobject[key]}**`);

}
 const arr=["js","ruby"]
    // for in loop array me bah work karta hy
    for (const key in arr) {
       console.log(` this is array key ${key}`);
       console.log(` this is array value ${arr[key]}`);

       
        
        
    }
    // map par fot in loop ni lag sakta bcz ye iteratable nhi hy
    const map=new Map()
map.set("PK","pakistan")
map.set("IN","India")
map.set("CH","china")
 for (const key in map) {
   console.log(key);//kuch nhi ayega na error na hay value bcz map is not iteratable
   
    
    
 }



