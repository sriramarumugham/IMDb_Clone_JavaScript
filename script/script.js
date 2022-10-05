const searchBar = document.getElementById("search-bar");

const searchResultContainer = document.getElementById(
  "search-result-container"
);


//to hide the search result continer when clicking  anywhere other than the search container in hte page
document.addEventListener("click", function (event) {
  if (searchResultContainer && !searchResultContainer.contains(event.target)) {
    searchResultContainer.classList.add("hide-search-container");
  }
});

//on typing in the input container
searchBar.addEventListener("keyup", () => {
  const input = searchBar.value;

  //if there length of the input is greate than 0
  if (input.length > 0) {

    //show the auto suggestion container
    searchResultContainer.classList.remove("hide-search-container");

    //fill the html markup of th container
    searchResultContainer.innerHTML = `<li id="search-result-movie-card"> 
    <div id="search-result-img-container">
      <a><img
        src="${"https://cdn-icons-png.flaticon.com/512/7797/7797065.png"}"
      />
      </a>
    </div>
    <div id="search-result-movie-title">
      <h4>${input}</h4>
    </div>
   </li>`;

   //fetch the api request with the search input
    debounce(input);
  }
});

//global variable interval;

let interval = 0;

//debounce function delays the api request by 0.350 seconds
const debounce = (input) => {
  
  

  // deletes the previous request before creating a new request
  clearTimeout(interval);
  
  interval = setTimeout(() => {
   
    // clearTimeout(interval);
    
    //new api request
    getMovies(input);

  }, 350);

};

let apiKey = "k_dbmklrp6";
// let apiKey = "k_o7kcaag9";
// let apiKey="k_8073znj9";

let rootUrl = "https://imdb-api.com/en/API/Search/";

const getMovies = async (serachTerm) => {

  let url = `${rootUrl}${apiKey}/${serachTerm}`;

  const response = await fetch(url);

  response.json().then((data) => {fillHTML(data);});
};

const fillHTML = (movie) => {
  searchResultContainer.innerHTML = "";
  const movies = movie.results;

  //unabel to find the move
  if (!movies) {
    searchResultContainer.innerHTML = ` 
    <li>
      <div id="not-found-container">
      <h1>Not found!</h1>
      </div>
    </li>`;
  } 
 
  //found the movie
  else {
    searchResultContainer.innerHTML = "";
    movies.filter((movie) => {
      searchResultContainer.innerHTML += `  
      <li id="search-result-movie-card"> 
         <div id="search-result-img-container">
           <a href="detail.html?id=${movie.id}">
           <img
             src="${movie.image? movie.image: "https://cdn-icons-png.flaticon.com/512/7797/7797065.png"}
           "/>
           </a>
         </div>
         <div id="search-result-movie-title">
          <a href="detail.html?id=${movie.id}"> <h4>${movie.title}</h4> </a>
         </div>
      </li>`;
    });
  }
};
