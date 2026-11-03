// reduce isme 4 parameter hotay 
// and one intial value hota hy 
const num=[1,2,3,4,5,6,7,8]
// const result=num.reduce(function (acc,currval){
//     console.log(`acc : ${acc} and current value : ${currval}`);
    
//     return acc+currval
// },0) // ye readable code
// console.log(result);
console.log(num.reduce((a,b)=>a+b)); //smart code 
const shoppingcart=[
    {
        name:"js",
        price:1000
},
   {
        name:"java",
        price:2000
},
   {
        name:"c++",
        price:3000
}
]
const result =shoppingcart.reduce((acc,items)=> (
    console.log(acc,items.price),
    acc+items.price
),0)
console.log(result);

