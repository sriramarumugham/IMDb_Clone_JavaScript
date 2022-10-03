const urlParams = new URLSearchParams(window.location.search);
const movieId = urlParams.get("id");

import { addToFavEventListner  , addOrDeletMovie} from "./addToFav.js";
import { checkMovie, updateSimilarMovies  , addMovie , deleteMovie , WatchlistContainer} from "./localStorage.js";

console.log(movieId);

if (movieId) {
  let Key = "k_dbmklrp6";
  // let Key = "k_o7kcaag9";
  // let Key= "k_8073znj9";

  let root = "https://imdb-api.com/en/API/Title/";

  const getMoviesById = async (id) => {
    let url = `${root}${Key}/${id}`;
    console.log(url);
    const response = await fetch(url);
    console.log(response);

    response.json().then((data) => {
      if (data.title != null) {
        fillMarkup(data);
      }
    });
  };

  getMoviesById(movieId);

  function fillMarkup(movie) {
    console.log(movie);

    WatchlistContainer(movie);
   
    document.getElementById("rating-container").innerHTML = `<p>${
      movie.imDbRating
    } | ${movie.year} | ${
      movie.runtimeMin ? movie.runtimeMin : movie.type
    }</p> `;
    document.getElementById(
      "poster-container"
    ).innerHTML = `<img src=${movie.image}/>`;
    document.getElementById(
      "details-container"
    ).innerHTML = `<p>${movie.plot}</p>`;
    document.getElementById(
      "title-container"
    ).innerHTML = `<h1>${movie.title}</h1>`;
    document.getElementById("short-details-container").innerHTML = `
 <div>
 <div>
   <p>Full Title :${movie.fullTitle}</p> 
   <p>releaseDate : ${movie.releaseDate}</p> 
   <p>genres : ${movie.genres}</p> 
   <p>languages :${movie.languages}</p>
   <p>imDbRatingVotes:${movie.imDbRatingVotes}</p>
 </div>
</div>
 `;
    if (movie.actorList != null && movie.actorList.length > 0) {
      let actors = movie.actorList;
      actors.forEach((actor) => {
        document.getElementById("movie-cast").innerHTML += `
    <li>
    <div class="cast-image-container"><img src=${actor.image}></img></div>
    <h4>${actor.name}</h4>
  </li>`;
      });
    }
    if (movie.similars != null && movie.similars.length > 0) {
      let similars = movie.similars;
      document.getElementById("similar-movie-list").innerHTML = "";

      updateSimilarMovies(similars);
      addToFavEventListner();
    }
  }
}



// function WatchlistContainer(movie){
//   document.getElementById("watchlist-container").innerHTML="";
//   document.getElementById("watchlist-container").innerHTML = `
//   <button id="watch-latter-button" class=${checkMovie(movie.id)?"fav-button":"un-fav-button" }  value='${movie.id}?${movie.image}?${movie.imDbRating}?${movie.title}'></button>
// `;
//   document.getElementById('watch-latter-button').addEventListener('click' , function(e){
//     const value=e.target.value;
//     addOrDeletMovie(value);
//   })
// }
