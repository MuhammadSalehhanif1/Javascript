// for of loop
// hum lopp iterator me lagaty hy obejct array and stirng ye sub iterator hy
const arr=["superman","Spiderman"]
for (const val of arr) {
    // console.log(val);
    
    
}
// map
const map=new Map()
map.set("PK","pakistan")
map.set("IN","India")
map.set("CH","china")

for (const [key, value] of map) {
    console.log(key+":--"+ value);

    
    
}
// lekin ye object par nhi chalta 
const myobject={
    name:"ali",
    name2:"amir",

}

// for (const val of myobject) {
//     console.log(val);
    
// }