//Immediately  Invoked Function Expression
// mean function ko create karke immediate excute karwa do
// global scope ke pollution se problem hotay hy ky bar is pollution ko hatani ke liye iffe use kia 
(function code(){
    console.log("DB CONNECTED");
    console.log("This is iife function ");

    
})();// name iife function
// two iife aik sath me problem atay hy context mean iska scope/context kaha khatam ho raha hy isliye (end ;) lagana zaroori hy
((name)=>{console.log(`DB CONNECTED ${name}` );// unnamed iife function
})("alex") 