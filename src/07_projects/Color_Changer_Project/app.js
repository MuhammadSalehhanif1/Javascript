let button=document.querySelectorAll(".button")
let body=document.querySelector("body")

button.forEach((button)=>{
    button.addEventListener("click",(e)=>{
    switch (e.target.id) { 
        case "white":
            body.style.backgroundColor=e.target.id
            console.log(e.target.id);
            
            
            break;
               case "yellow":
            body.style.backgroundColor=e.target.id
            
            break;
               case "blue":
            body.style.backgroundColor=e.target.id
            
            break;
               case "green":
            body.style.backgroundColor=e.target.id
            
            break;
               case "red":
            body.style.backgroundColor=e.target.id
            
            break;

            default:
                console.log("color not available");
                
            break;
    
        
    }
    }

)})