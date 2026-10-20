//   console.log("a");
//   console.log("l");
//   console.log("e");
//   console.log("x");

  function saymyname(){
  console.log("a");
  console.log("l");
  console.log("e");
  console.log("x");

  }
//   saymyname()// ye saymyname ye refernce hy and jab paranthesis lag diye toh woh execute hojaye ga ()

  // argument and parameter in function
   //           !! parameter!!
//   function addnum(num1,num2){
//     console.log(num1+num2);
    

//   }
//   addnum(4+4)
 function addnum(num1,num2){
   return num1+num2;
    

  }
  console.log(addnum(3,4))// hum nah return use kia toh hum isko variable me bah rakh sakte hy
  // logged in work in function
//   function userLogged(username=user){
//     if(!username){
//         console.log("invalid username");
        
//     }
//     else{return `${username} is  LoggedIn`}
//   }

 function userLogged(username="user"){
   
   return `${username} is  LoggedIn`
  }
  const user1=userLogged("adam")
  console.log(user1);
  