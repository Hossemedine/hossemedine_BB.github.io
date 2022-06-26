

let linkes= document.querySelectorAll('ul > li >a')
    

   

    

   for (let i=0 ; i<5 ; i++){
    linkes[i].addEventListener('click',function(){
       
        localStorage.setItem("page" , linkes[i].id)
        
    })
      
   }