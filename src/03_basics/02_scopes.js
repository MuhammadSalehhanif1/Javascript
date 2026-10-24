var c =300
const b=200
   let a=100


// {} ye block scope hy 
if(true){
   let a=10
const b=20
var c =30
 
}
// console.log(a);// mean woh block scope hy 
// console.log(b);// mean woh block scope hy 
// console.log(c);// ye global me nhi hy iska block scope nhi hota isliye all developer isko var avaiod karte hy

// scope level ya  scope chainig
// child apne parent ko axces kar sakta hy lekin parent child ke value ko excess nhi kar skata 
// mean nested scope
function one(){
   const username="alex"
   function two(){
      const website="youtube"
      console.log(username);
      
   }
   // console.log(website);// kyu ki webiste variable child me hy isliye error aya
   two()
}
one()
// and function excute function se pehle hosaktahy
three(2)
function three(num){
   console.log(num+3);
   
}
// lekin function expression me aesaa koi seen nhi hy kui kay woh variable me hota hy
// four()// error 
const four=function(num){
   console.log(num+4);
   

}
four()
