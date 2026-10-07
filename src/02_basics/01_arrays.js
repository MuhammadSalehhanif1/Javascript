// The array object ,storing a multiple items in single variable name
// * shallow copy : property share the same reference : mean jo chez wo copy me change kare gy woh orignal array me change hoga
// deep copy :property do not share the same reference : mean jo chez wo copy me change kare gy woh orignal array me change nhi hoga 

const arr=[0,1,2,3,4,5]
console.log(arr[0]);
const myarr=["heros","villans"]
const myarr1=new Array("marvel","superman")
console.log(myarr.length,myarr1.indexOf("marvel"));

// array method
arr.push(6)// last se add karo
arr.pop()// last se remove karo
arr.unshift(7)//first se add karo
arr.shift()// first se remove karo
console.log(arr)
// kuch questionable method hotay;
console.log(arr.includes(9));// ye boolean me result dega : false
console.log(arr.indexOf(5)); // agar woh value exist karte hogay toh index dega or nhi karti hogay toh -1 output ayega
  
const myarr3=arr.join()//ye apko string me value dega mean iske  type string hogay

//slice , splice
const myn1=arr.slice(1,3)// fisrt parameter me starting index and 2nd me kaha tak array chaye woh index
// slice original array me kuch change nhi karta and one copy deta hy

console.log(myn1);

const myn2=arr.splice(1,3,"hello")
console.log(myn2);//[ 1, 2, 3 ]
console.log(arr);//[ 0, 'hello', 4, 5 ]
// splice mean woh first parameter me start and kaha tak ka portion nikalna hy and kuch add karna 
// and ye oringal array me changes hogay

