//get all the button 
//add event listner
//on ckick check i fav //add or remove
//change background


//watchlater page
//get all from fav
//get all button 


//home page 
//same button 

//search page 
//same page


//designing the a tag


//work on heigh and width

console.log("from fav")

const favButtons=document.querySelectorAll('.add-to-fav');
favButtons.forEach((button)=>{
    
    button.background = 'url(https://cdn-icons-png.flaticon.com/512/4677/4677490.png) no-repeat';
    button.addEventListener('click' , function(e){
       
        console.log("clicking" , e.target.value)
    })
})  