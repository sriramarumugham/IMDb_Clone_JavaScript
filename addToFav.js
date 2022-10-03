


//change background










//designing the a tag


//work on heigh and width

import {movieList , addMovie , deleteMovie , checkMovie , getMovie} from './localStorage.js';




 function addToFavEventListner(){
    
const favButtons=document.querySelectorAll('.add-to-fav');

favButtons.forEach((button)=>{
    
    // button.background = 'url(https://cdn-icons-png.flaticon.com/512/4677/4677490.png) no-repeat';
    button.addEventListener('click' , function(e){
       const value=e.target.value;
       const myvalue=value.split('?');
       const key=myvalue[0];
       const obj={
        id:myvalue[0],
        image:myvalue[1],
        imdbRating:myvalue[2],
        title:myvalue[3]
       }
       
       if(checkMovie(key)){
        //add a movie
        console.log("add a movie")
        addMovie(obj);
       }
       else{
        //delete a movie
        console.log("delete a movie")
        deleteMovie(obj);
       }
    })
})  
}

export {addToFavEventListner };
