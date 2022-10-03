const urlParams=new URLSearchParams(window.location.search);
const movieId=urlParams.get('id');

import {addToFavEventListner} from './addToFav.js';
import { checkMovie } from './localStorage.js';

console.log(movieId);

if(movieId){

// let apiKey = "k_dbmklrp6";
// let Key = "k_o7kcaag9";
let Key="k_8073znj9"

let root='https://imdb-api.com/en/API/Title/';


const getMoviesById = async (id) => {
    let url=`${root}${Key}/${id}`;
    console.log(url)
    const response = await fetch(url);
    console.log(response)
  
    response.json().then((data) => {
      if(data.title!=null){
        fillMarkup(data);
      }
      
    });
};
  
 getMoviesById(movieId);    

 function  fillMarkup (movie){
  console.log(movie)
  document.getElementById('watchlist-container').innerHTML=`
  <button id="icon-container"  value='${movie.id}?${movie.image}?${movie.imDbRating}?${movie.title}' class="add-to-fav">
  </button>
  <h1>Add/remove</h1>
  `
  document.getElementById('rating-container').innerHTML=`<p>${movie.imDbRating} | ${movie.year} | ${movie.runtimeMin? movie.runtimeMin: movie.type}</p> `;
  document.getElementById('poster-container').innerHTML=`<img src=${movie.image}/>`
 document.getElementById('details-container').innerHTML=`<p>${movie.plot}</p>`;
 document.getElementById('title-container').innerHTML=`<h1>${movie.title}</h1>`
 document.getElementById('short-details-container').innerHTML=`
 <div>
 <div>
   <p>Full Title :${movie.fullTitle}</p> 
   <p>releaseDate : ${movie.releaseDate}</p> 
   <p>genres : ${movie.genres}</p> 
   <p>languages :${movie.languages}</p>
   <p>imDbRatingVotes:${movie.imDbRatingVotes}</p>
 </div>
</div>
 `
 if(movie.actorList !=null && movie.actorList.length>0){
 

  let actors=movie.actorList;
  actors.forEach(actor => {
    document.getElementById('movie-cast').innerHTML+=`
    <li>
    <div class="cast-image-container"><img src=${actor.image}></img></div>
    <h4>${actor.name}</h4>
  </li>`;
  })
 }
 if(movie.similars !=null && movie.similars.length>0){
   let similars=movie.similars;
   document.getElementById('similar-movie-list').innerHTML=""

   similars.forEach((similar)=>{
    document.getElementById('similar-movie-list').innerHTML+=`
    <li class="similar-movie-card">
            <div class="similar-movie-img-container">
             <a href="detail.html?id=${similar.id}"> <img src="${similar.image}"> </a>
            </div>
            <div class="similar-movie-discription">
              <a href="detail.html?id=${similar.id}"><p>${similar.title}</p></a>
              <p>${similar.imDbRating}</p>

              <button class="add-to-fav${ checkMovie(similar.id) ? " add-to-fav-1"   : " add-to-fav-2" }"    value='${similar.id}?${similar.image}?${similar.imDbRating}?${similar.title}'></button>

              
            </div>
          </li>
    `

   })

   addToFavEventListner();

 }

 }

 

}
