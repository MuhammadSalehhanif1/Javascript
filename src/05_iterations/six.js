// filter loop
// filter retrun karta hy jabke foreach return nhi karta 
const coding=[1,2,3,4,5,6,7,8]
coding.forEach((item)=>{
    // console.log(item);
    
})// 
//output :
// false
// false
// true
// true
// true
// true
// isliye kyu ki for each har item par loop chala raha hy isliye true false aya
 // agar conditon check karne hotu filter hy jisse hum conditon se array ko print karsakte hy
//  const result =coding.filter((num)=>(
//  num >4))

 console.log(coding.filter((num)=>(
 num >4)));
 
 


