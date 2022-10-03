let typing = false;

const searchBar = document.getElementById("search-bar");

const searchResultContainer = document.getElementById(
  "search-result-container"
);

document.addEventListener("click", function (event) {
  if (searchResultContainer && !searchResultContainer.contains(event.target)) {
    searchResultContainer.classList.add("hide-search-container");
  }
});

searchBar.addEventListener("keyup", () => {
  const input = searchBar.value;
  if (input.length > 0) {
    typing = true;
    searchResultContainer.classList.remove("hide-search-container");
    searchResultContainer.innerHTML = `<li id="search-result-movie-card"> 
    <div id="search-result-img-container">
      <img
        src="${"https://cdn-icons-png.flaticon.com/512/7797/7797065.png"}"
      />
    </div>
    <div id="search-result-movie-title">
      <h4>${input}</h4>
    </div>
   </li>`;
    debounce(input);
  }
});

let interval = 0;

const debounce = (input) => {
  clearTimeout(interval);
  interval = setTimeout(() => {
    clearTimeout(interval);
    getMovies(input);
  }, 400);
};

let apiKey = "k_dbmklrp6";
// let apiKey = "k_o7kcaag9";
// let apiKey="k_8073znj9"
// let rootUrl='https://imdb-api.com/en/API/Search/k_dbmklrp6/wonder'
let rootUrl = "https://imdb-api.com/en/API/Search/";

const getMovies = async (serachTerm) => {
  let url = `${rootUrl}${apiKey}/${serachTerm}`;
  const response = await fetch(url);

  response.json().then((data) => {
    creatHtml(data);
  });
};

const creatHtml = (movie) => {
  searchResultContainer.innerHTML = "";
  console.log(movie);
  const movies = movie.results;
  if (!movies) {
    searchResultContainer.innerHTML = ` <li>
    <div id="not-found-container">
      <h1>Not found!</h1>
    </div>
  </li>`;
  } else {
    console.log(movies);
    searchResultContainer.innerHTML = "";
    movies.filter((movie) => {
      searchResultContainer.innerHTML += `  <li id="search-result-movie-card"> 
         <div id="search-result-img-container">
       
         <a href="detail.html?id=${movie.id}">
           <img
             src="${
               movie.image
                 ? movie.image
                 : "https://cdn-icons-png.flaticon.com/512/7797/7797065.png"
             }"
           />
           </a>
         </div>
         <div id="search-result-movie-title">
         <a href="detail.html?id=${movie.id}"> <h4>${movie.title}</h4> </a>
         </div>
        </li>`;
    });
  }
};
