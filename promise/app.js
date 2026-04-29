const Promiseone=new Promise((resolve, reject) => {
    setTimeout(function(){
        console.log("async task is completed");
        resolve()
    },1000)
})
Promiseone.then(()=>{
    console.log("promise consumed");
    
})
new Promise((resolve, reject) => {
      setTimeout(()=>{
         console.log("Async two");
        resolve(4+"result")
      },1000) 
}).then((data)=>{
    console.log(data);
    
})
const thirdPromise=new Promise((resolve,reject)=>{
    setTimeout(() => {
        
        resolve({
            username:"john",
            "email":"johngmail.com",

        })
        
    }, 1000);
})

thirdPromise.then((data)=>{
    console.log(data["email"]);
    
})
const fourthPromise=new Promise((resolve, reject) => {
    setTimeout(() => {
        
        let error=false
        if(!error){
            resolve({ username:"john",
            email:"johngmail.com",})
        }
        else{
            reject("Error : Something went  wrong")
        }
    }, 2000);
})
fourthPromise
.then((data)=>{
    console.log(data);
    return data.username
    
})
.then((username)=>{
    console.log(username);
    
})
.catch((err)=>{
    console.log(err);
    
})
.finally(()=> console.log("the promise is resolved or reject ")
)
 const promisefive=new Promise((resolve, reject) => {
     setTimeout(() => {
        
        let error=true
        if(!error){
            resolve({ username:"amir",
            email:"amirgmail.com",})
        }
        else{
            reject("Error : Something went  wrong")
        }
    }, 2000);
 })
 async function consumepromisefive() {
    try{
    const response=await promisefive
    console.log(response);
    }
    catch(error){
        console.log(error);
        
    }
    
 }
 consumepromisefive()
 async function getalluser() {
    try{
       const response=await fetch("https://jsonplaceholder.typicode.com/users")
        const data=await response.json()
console.log(data);

    }catch (error){
        console.log(error);
        
    }
    
 }getalluser()
 
 fetch("https://jsonplaceholder.typicode.com/users")
 .then((data)=>{
    return data.json
 })
 .then((response)=>{
    console.log(response)
 })
 .catch((eroor)=>{
    console.log(eroor);
    
 })