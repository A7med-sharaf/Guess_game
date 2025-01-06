

let house=document.querySelector("fa-house")
const form=document.querySelector("form")
let h=document.querySelector("h1")
form.addEventListener('submit', (e)=>{
    let x=0
    
    e.preventDefault()
    let box=document.querySelectorAll('[type="checkbox"]')
    console.log()
    for(let i=0; i<box.length;i++){
        if(box[i].checked == true){
        x+=  Number(box[i].value)
            
            
              
     }
    }
    window.location.href="#value"
   
    h.innerHTML=x
    
    


})

function reload(){
     window.location.reload()
}





