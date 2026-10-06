const mydate=new Date()
// console.log(mydate.toLocaleString());//Output :10/6/2026, 9:28:37 PM
// console.log(mydate.toDateString());//Tue Oct 06 2026
// console.log(mydate.toISOString());// 2026-10-06T16:28:37.989Z                        
// console.log(mydate.toJSON());// 2026-10-06T16:28:37.989Z               
// console.log(mydate.toLocaleDateString());//10/6/2026
// console.log(mydate.toLocaleTimeString());// 9:28:37 PM
// console.log(mydate.toString());// Tue Oct 06 2026 21:28:37 GMT+0500 (Pakistan Standard Time)
// console.log(mydate.toTimeString());// 21:28:37 GMT+0500 (Pakistan Standard Time)
// console.log(mydate.toUTCString());//Tue, 06 Oct 2026 16:28:37 GMT
  

// const myCreatedDate=new Date("2025-01-14" )
const myCreatedDate=new Date(2025,1,14,5,0 )

console.log(myCreatedDate.toString());


let timestamp=Date.now()
// console.log(timestamp)
// console.log(myCreatedDate.getTime());   
// ;
// console.log(Math.floor(Date.now()/1000));// ye second me ayega


const newDate=new Date()
console.log(newDate.getMonth()+1);

newDate.toLocaleString("default",{
    weekday:"long",
    
})
// console.log(newDate);



