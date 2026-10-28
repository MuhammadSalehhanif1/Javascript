// ********* Truethy and Falsy Value
// bigint me 0n rakha jata hy isko bah false value kehte hy 
// false,0,-0,BigInt 0n, "",null,undefined,NaN // this is falsey value

// truethy vlaue
"0",'false',[],{},function(){}

const user=[]

if(user.length==0){
    console.log("Array length is zero");
    
} 
const user1={}
if (Object.keys(user1).length==0) {
    console.log("object is empty");
    
    
}
// Nullish Coalescing operator (??) : null undefined 
// basically kabh kabhar ya most time DB se response thora late hojata hy isliye hum 
// nullish opeartor lagaty hy like DB se kuch nhi ayega tou null ya undefined aye ga isse bechne ke liye ye operotr use karte hy
let val1;
val1= null ?? 10
val1= 5 ?? null
val1 = null ?? undefined  

console.log(val1);
// ternary operator
// this is condition opertor ? true : false
10 >=90 ? console.log("true"): 10 <=90 ?console.log( true)
 :console.log("false");

