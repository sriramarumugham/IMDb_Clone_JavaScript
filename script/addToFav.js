import { addMovie, deleteMovie, checkMovie } from "./localStorage.js";


// find the buttons with a class add-to-fav and add a evnet lisnter

function addToFavEventListner() {
  const favButtons = document.querySelectorAll(".add-to-fav");
  favButtons.forEach((button) => {
    button.addEventListener("click", function (e) {

        // on a click of a button calls add or delte function
      const value = e.target.value;
      addOrDeletMovie(value);
    });
  });
}

function addOrDeletMovie(value) {

//  split the value into an object

  const myvalue = value.split("?");
  const key = myvalue[0];
  const obj = {
    id: myvalue[0],
    image: myvalue[1],
    imdbRating: myvalue[2],
    title: myvalue[3],
  };
 
  //cheks if the id is present in the local storage

  if (checkMovie(key)) {

    //if not add a movie
    console.log("adding movie to favourites");

    //function to add a movie
    addMovie(obj);
  } else {
    //deletes a movie
    console.log("deleting movie from favourites");

    //function to delte a movie
    deleteMovie(obj);
  }
}

export { addToFavEventListner, addOrDeletMovie };
