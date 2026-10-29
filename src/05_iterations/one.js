// For loop

for(let i=0; i <=10; i++){
    // console.log(i);
    
}
// nested loop
// if statement in loop
// array loop 

for (let index = 0; index <= 10; index++) {
// console.log(index);
for (let j = 0; j < 3; j++) {
    // console.log(index + " * " + j + " = "+index*j);
    
    
}
    
}
for (let i = 0; i < 10; i++) {
    // console.log(i);
    
    if (i ==5) {
        // console.log( i+"5 is here");
        
        
    };
    
}
const myarray=[1,2,3,4,5,6,"superman","old man"]
for (let index = 0; index < myarray.length; index++) {
    const element = myarray[index];
    // console.log(element);
    
    
}
// break and continue
// breal jese hy condition true howe if me tou woh loop ko ruk dega 
// continue aik step skip kardeta hy 
for (let index = 1; index < 20; index++) {
    if (index ==5) {
        // console.log(" 5 agaya hy ");
        break
        
    }
    const element = index;
    console.log(element);
    
    
}
for (let index = 1; index < 20; index++) {
    if (index ==5) {
        // console.log(" 5 agaya hy ");
        continue
        
    }
    const element = index;
    console.log(element);
    
    
}
// ye mere kuch thought :--
for (let index = 1; index < 20; index++) {
    index == 6 ? console.log("6 bah mil gaya"): console.log(6+ "nhi mila");
    
     
    
    // const element = index;
    // console.log(element);
    
    
}