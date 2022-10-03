import { addToFavEventListner  } from "./addToFav.js";



let movieList={};


getMovie();

// console.log(movieList);


function addMovie(obj){
    console.log(obj);
    movieList[obj.id]=obj;
    updateMovie();
}

function deleteMovie(obj){
  console.log(obj);
  delete movieList[obj.id];
  updateMovie();
}

function checkMovie(key){
     if(movieList && movieList[key]){
        return false;
     }
     return true;
}

function getMovie(){
  if (localStorage.getItem("movieList") == null) {
    localStorage.setItem('movieList', JSON.stringify(movieList));
  }
  else{
      movieList =localStorage.getItem('movieList') ;
      if(movieList!="undefined"){
        movieList=JSON.parse(movieList);
      }
  }
}

function updateMovie(){
  localStorage.setItem('movieList', JSON.stringify(movieList));
  movieList =JSON.parse(localStorage.getItem('movieList')) ;
  updateFavouriteMoviesMarkup();
}

function updateFavouriteMoviesMarkup() {

  const favMovies = movieList;

  console.log("fav" , favMovies);

  if(document.getElementById("watch-list-inner-container")){
        
  document.getElementById("watch-list-inner-container").innerHTML = "";

  const length = Object.keys(favMovies).length;

if (length == 0) {
  document.getElementById("watch-list-inner-container").innerHTML = "";
  document.getElementById("watch-list-inner-container").innerHTML += `
         <li class="similar-movie-card">
         <div class="similar-movie-discription">
         <h1>Empty</h1>
        </div>
        </li>
         `;
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
      <button class="add-to-fav${ checkMovie(similar.id) ? " add-to-fav-1"   : " add-to-fav-2" }"    value='${similar.id}?${similar.image}?${similar.imDbRating}?${similar.title}'></button>
    </div>
  </li>
    `;
  }

  addToFavEventListner();
  }

}

export {movieList , addMovie , deleteMovie , checkMovie , getMovie , updateFavouriteMoviesMarkup};

