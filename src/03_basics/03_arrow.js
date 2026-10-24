
 const user ={
    username:'alex',
    price:999,
    welcomemessage:function(){
        console.log(this.username);
        
    }
 }
 user.welcomemessage()
//  console.log(this);
user.username="sam"
 user.welcomemessage()
 // we are not use this in function
 function one(){
    const username="alex"
    console.log(this.username);// undefined
    
 }
 one()
 const two=() => {
      const username="alex"
    console.log(this.username);// undefined
 }
 two()  
 // jab ap parantheis (round bracket ) lagaye gy toh apko isme return lagana zaroori nhi
 // lekin curly bracket me return laga na zaroori hy
  const three=(num1,num2) => num1+num2

  console.log(three(1,2));
  const four=(num1,num2) =>
     (num1+num2) // isme reuturn karne ki zaroorat nhi
  
  