import { addToFavEventListner, addOrDeletMovie } from "./addToFav.js";

//global variables to store the movieList
let movieList = {};

//stores the Similar movies list
let similarMovies = [];

//store the single moves in a object to add or delte the movie
let movie = {};

getMovie();

//to get movies from local storage

function getMovie() {
  //for a new user the movieList is not present in local storage
  if (localStorage.getItem("movieList") == null) {
    //creating a movie list in local storage and adding a empty global variable movieList
    localStorage.setItem("movieList", JSON.stringify(movieList));
  } else {
    //if movie list is present
    movieList = localStorage.getItem("movieList");
    if (movieList != "undefined") {
      //filling the global variable with movieList
      movieList = JSON.parse(movieList);
    }
  }
}

//adding a movie to local storage
function addMovie(obj) {
  movieList[obj.id] = obj;

  //rendering the list to show the changes
  updateMovie();
}

//deleting a movie from local storage
function deleteMovie(obj) {
  delete movieList[obj.id];

  //rendering the list to show the changes
  updateMovie();
}

//this function is to check is moviei is in local storage or not
function checkMovie(key) {
  if (movieList && movieList[key]) {
    //present in local storage
    return false;
  }

  //not present in local storage
  return true;
}

//function to update the gloabal variable movieList when a movi is added or delted
function updateMovie() {
  localStorage.setItem("movieList", JSON.stringify(movieList));
  movieList = JSON.parse(localStorage.getItem("movieList"));

  //to show the changes on a screen rerendering the list and button

  //fills up the htm favourite movies
  updateFavouriteMoviesMarkup();

  //fills up the html similar movies
  updateSimilarMovies(similarMovies);

  //fills up the html  detais page favourite and unfavourite button
  WatchlistContainer(movie);
}

// ------------------------------------------------------FILL THE HTML WHICH REQUIRES FREQUENT RE-RENDER WHEN CLICKING ADD OR DELTE--------------


function updateFavouriteMoviesMarkup() {
  const favMovies = movieList;

  //to avoid rendering the watch-list-inner-conatiner from the watchlist page in  a different page
  if (document.getElementById("watch-list-inner-container")) {
    //if yes we are in the watchlist page

    document.getElementById("watch-list-inner-container").innerHTML = "";

    const length = Object.keys(favMovies).length;

    //if list is empty
    if (length == 0) {
      document.getElementById("watch-list-inner-container").innerHTML = "";
      document.getElementById("watch-list-inner-container").innerHTML += `
         <li class="similar-movie-card">
           <div class="similar-movie-discription">
             <h1>THE LIST IS EMPTY</h1>
            </div>
        </li>`;
    }

    for (var key in favMovies) {
      const similar = favMovies[key];

    document.getElementById("watch-list-inner-container").innerHTML += `
    <li class="similar-movie-card">
      <div class="similar-movie-img-container">
        <a href="detail.html?id=${similar.id}"> <img src="${similar.image}"> </a>
      </div>
      <div class="similar-movie-discription">
        <a href="detail.html?id=${similar.id}"><p>${similar.title}</p></a>
        <p>${similar.imdbRating}</p>
        <button class="add-to-fav${checkMovie(similar.id) ? " add-to-fav-1" : " add-to-fav-2"}"  
            value='${similar.id}?${similar.image}?${similar.imDbRating}?${similar.title}'>
        </button>
      </div>
    </li>
    `;
    }

    addToFavEventListner();
  }
}


function updateSimilarMovies(similars) {
  document.getElementById("similar-movie-list").innerHTML = "";

  similarMovies = similars;
  similars.forEach((similar) => {
    document.getElementById("similar-movie-list").innerHTML += `
    <li class="similar-movie-card">
            <div class="similar-movie-img-container">
             <a href="detail.html?id=${similar.id}"> <img src="${
      similar.image
    }"> </a>
            </div>
            <div class="similar-movie-discription">
              <a href="detail.html?id=${similar.id}"><p>${similar.title}</p></a>
              <p>${similar.imDbRating}</p>
              <button class="add-to-fav${
                checkMovie(similar.id) ? " add-to-fav-1" : " add-to-fav-2"
              }"    value='${similar.id}?${similar.image}?${
      similar.imDbRating
    }?${similar.title}'></button>
            </div>
          </li>
    `;
  });
  addToFavEventListner();
}

//changet the name

function WatchlistContainer(movieObj) {
  movie = movieObj;
  document.getElementById("watchlist-container").innerHTML = "";
  document.getElementById("watchlist-container").innerHTML = `
  <button id="watch-latter-button" class=${
    checkMovie(movie.id) ? "fav-button" : "un-fav-button"
  }  value='${movie.id}?${movie.image}?${movie.imDbRating}?${
    movie.title
  }'></button>
`;
  document
    .getElementById("watch-latter-button")
    .addEventListener("click", function (e) {
      const value = e.target.value;
      addOrDeletMovie(value);
    });
}


export {
  movieList,
  addMovie,
  deleteMovie,
  checkMovie,
  getMovie,
  updateFavouriteMoviesMarkup,
  updateSimilarMovies,
  WatchlistContainer,
};
