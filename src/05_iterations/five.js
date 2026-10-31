// for each
// callback funtion ka name nhi hota
// for each loop ke is callback function ke  pass three parameter hotay hy 
// 1 item/value 2) index of array , 3) arr
const coding=["javascript","ruby","c++","swift","python"]
// isme noraml function ko laga sakte hy
coding.forEach(function(value){
    // console.log(value);
    
})
coding.forEach((value)=>{
    // console.log(value);
    
})
function item(value){
    // console.log(value);
    
}
coding.forEach(item)
// for each parameter 1) value 2) index ,3) full array
coding.forEach((value,index,array)=>{
// console.log(`Array index is :--- ${index} and Array Value is :-- ${value} and full array is ${array}`);

})
// foreach ka work array of object me zayada hota hy like database se jab data ata hy tub ye aray se data niklaty hy
const products = [
  { id: 1, name: "Laptop", price: 50000 },
  { id: 2, name: "Mobile", price: 30000 },
  { id: 3, name: "Headphones", price: 5000 }
];
products.forEach((item)=>{
console.log(item.price);

})
console.log(products[1]);
