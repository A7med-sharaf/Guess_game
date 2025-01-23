

let house=document.querySelector("fa-house")
const form=document.querySelector("form")
let NumberOfguess=document.querySelector("h1")
form.addEventListener('submit', (e)=>{
    
    let valueOfnumber=0
    
    e.preventDefault()
    let box=document.querySelectorAll('[type="checkbox"]')
    console.log()
    for(let i=0; i<box.length;i++){
        if(box[i].checked == true){
            valueOfnumber+=  Number(box[i].value)
            
            
              
     }
    }
    window.location.href="#up"
   
    NumberOfguess.innerHTML=valueOfnumber
    
    

})

function reload(){
    return window.location.reload()
}





