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
  const user2=userLogged()

  // console.log(user1);
  // console.log(user2);

  // agar shoping cart price ko kaise function me laye
  function myshoppigcartprice(...num){
    return num

  }
  // rest operator bohot sari value ko array me convert kardeta hy jab functioon ke parameter me use kare
  console.log(myshoppigcartprice(200,400,600,800));
  const user={
    username:"alex",
    itemPrice:200,
  }
  // array and object ko ahram se function ke parameter ke zarye exces kar sakte hy 
  function handleObject(anyobject){
    return anyobject.username
  }
  const arr=[200,400,500,600]
    function handlearray(anyarray){
    return anyarray[1]
  }
  console.log(handleObject(user),handlearray(arr));
  