
import { addToFavEventListner } from "./addToFav.js";
import { updateSimilarMovies, WatchlistContainer } from "./localStorage.js";

//to get the id of the movies from detail.html page 

const urlParams = new URLSearchParams(window.location.search);
const movieId = urlParams.get("id");

//api keys

// let Key = "k_dbmklrp6";
let Key = "k_o7kcaag9";
// let Key= "k_8073znj9";

if (movieId) {

  let root = "https://imdb-api.com/en/API/Title/";

  const getMoviesById = async (id) => {

    let url = `${root}${Key}/${id}`;

    const response = await fetch(url);

    console.log(response);

    response.json().then((data) => {

      if (data.title != null) {

        //if the movies id matches the response from the api call

        //fill up the html details page with the data
        fillMarkup(data);
      }
    });
  };


  //find the movie from the api search with the id 

  getMoviesById(movieId);

  function fillMarkup(movie) {
    console.log(movie);

    WatchlistContainer(movie);

    document.getElementById("rating-container").innerHTML = `<p>${movie.imDbRating} | ${movie.year} | 
    ${movie.runtimeMin ? movie.runtimeMin : movie.type}</p> `;

    document.getElementById("poster-container").innerHTML =
    `<img src=${movie.image}/>`;

    document.getElementById("details-container").innerHTML =
    `<p>${movie.plot}</p>`;

    document.getElementById("title-container").innerHTML =
     `<h1>${movie.title}</h1>`;

    document.getElementById("short-details-container").innerHTML = `
      <div>
        <div>
          <p>Full Title :${movie.fullTitle}</p> 
          <p>releaseDate : ${movie.releaseDate}</p> 
          <p>genres : ${movie.genres}</p> 
          <p>languages :${movie.languages}</p>
          <p>imDbRatingVotes:${movie.imDbRatingVotes}</p>
        </div>
      </div>`;
    
    // fillings the cast session 
    if (movie.actorList != null && movie.actorList.length > 0) {

      let actors = movie.actorList;

      actors.forEach((actor) => {
        document.getElementById("movie-cast").innerHTML += `
          <li>
            <div class="cast-image-container">
               <img src=${actor.image}></img>
            </div>
            <h4>${actor.name}</h4>
          </li>`;
      });
    }

    //fillint the similar movies session 

    if (movie.similars != null && movie.similars.length > 0) {

      let similars = movie.similars;
      document.getElementById("similar-movie-list").innerHTML = "";

      //calling the rerender hmtl files from local storage.js file
      updateSimilarMovies(similars);

      //add event listners to the markup
      addToFavEventListner();
    }
  }
}
