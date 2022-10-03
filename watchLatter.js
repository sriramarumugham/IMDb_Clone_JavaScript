import * as storage from "./localStorage.js";
import { updateFavouriteMoviesMarkup } from "./localStorage.js";

// const favMovies = storage.movieList;


updateFavouriteMoviesMarkup();

// function updateFavouriteMoviesMarkup() {

//   const favMovies = storage.movieList;

//   console.log("fav" , favMovies);

//   document.getElementById("watch-list-inner-container").innerHTML = "";

//   for (var key in favMovies) {
//     const similar = favMovies[key];
//     document.getElementById("watch-list-inner-container").innerHTML += `
//     <li class="similar-movie-card">
//     <div class="similar-movie-img-container">
//      <a href="detail.html?id=${similar.id}"> <img src="${similar.image}"> </a>
//     </div>
//     <div class="similar-movie-discription">
//       <a href="detail.html?id=${similar.id}"><p>${similar.title}</p></a>
//       <p>${similar.imdbRating}</p>
//       <button class="add-to-fav" value='${similar.id}?${similar.image}?${similar.imDbRating}?${similar.title}'></button>
//     </div>
//   </li>
//     `;
//   }

//   addToFavEventListner();
// }
