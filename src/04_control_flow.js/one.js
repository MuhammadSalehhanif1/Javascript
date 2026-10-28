// if condition
const userLogged=false
 
if (userLogged) {
     console.log("user logged in");
     
}
else{
    console.log("false");
    
}
// single equal sign assigned ka like const ... =....
//  
// <,>,<=,>=,==


// scope problen if you use var because var have no block scope
const score=200
if (score >100) {
    let power="fly"
    var energy="long breathe"
    console.log(`user is ${power} and ${energy}`);
    
}
    // console.log(`user is ${power}`);// we use let and let have block scope
    // if we use  var 
    console.log(`user is  ${energy}`);// we use var so var have no block scope

    // and and if have implement sope 
    const balance=Math.random()*999+1
    console.log(balance);
    // this is implesent scope mean mene maan liya ye scope hy 
    if (balance >500) console.log("you won");
    else console.log("try again");
    // nested if else else if
    // a result of student

//     const studentMark=Math.random()*100+1
//  if(studentMark >=86){
//     console.log("student got full mark and Grade A++");
    
//  }
//  else if(studentMark >=80){
//     console.log("Grade A+");
    
//  }
//   else if(studentMark >=70){
//     console.log("Grade A");
    
//  }
//  else if(studentMark >=60){
//     console.log("Grade B");
    
//  }
//   else if(studentMark >=50){
//     console.log("Grade C");
    
//  }
//   else if(studentMark >=40){
//     console.log("Grade D");
    
//  }
//  else console.log("sorry your are fail but keep hardwork");
//  console.log(studentMark);
 
// AND && and OR || concept
//AND ka mean ke first true and second bah true ho
// OR me first ya second me koi bah true ho 
const userLoggedIN=true
const debitCard=true
const userLoggedWithEmail=true
const userLoggedWithgoogle=true

if(userLogged && debitCard){
console.log("you most welcome sir and Start purchasing");

}

if (userLoggedWithEmail || userLoggedWithgoogle) {
    if (userLoggedWithEmail) {
        console.log("you logged with email");
        
    }
    else console.log("you logged with google");
    
    
}
