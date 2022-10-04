const HomePageMovies = [
  {
    id: "tt2015381",
    image:
      "https://m.media-amazon.com/images/M/MV5BZTkwZjU3MTctMGExMi00YjU5LTgwMDMtOWNkZDRlZjQ4NmZhXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_Ratio0.6762_AL_.jpg",
    imdbRating: "8",
    title: "Guardians of the Galaxy",
    releaseDate: "2014-08-01",
    runtimeStr: "2h 1min",
    imDbRating: "8",
    genres: "Action, Adventure, Comedy",
    directors: "James Gunn",
    plot: "A group of intergalactic criminals must pull together to stop a fanatical warrior with plans to purge the universe.",
  },

  {
    id: "tt0848228",
    image:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_Ratio0.6763_AL_.jpg",
    imdbRating: "8.0",
    title: "The Avengers",
    directors: "Joss Whedon",
    genres: "Action, Adventure, Sci-Fi",
    imDbRating: "8",
    releaseDate: "2012-05-04",
    runtimeStr: "2h 23min",
    plot: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
  },
  {
    id: "tt0478970",
    image:
      "https://m.media-amazon.com/images/M/MV5BMjM2NTQ5Mzc2M15BMl5BanBnXkFtZTgwNTcxMDI2NTE@._V1_Ratio0.6763_AL_.jpg",
    imdbRating: "7.3",
    title: "Ant-Man",
    directors: "Peyton Reed",
    genres: "Action, Adventure, Comedy",
    imDbRating: "7.3",
    plot: "Armed with a super-suit with the astonishing ability to shrink in scale but increase in strength, cat burglar Scott Lang must embrace his inner hero and help his mentor, Dr. Hank Pym, pull off a plan that will save the world.",
    releaseDate: "2015-07-17",
    runtimeStr: "2h 17min",
  },
  {
    id: "tt3501632",
    image:
      "https://m.media-amazon.com/images/M/MV5BMjMyNDkzMzI1OF5BMl5BanBnXkFtZTgwODcxODg5MjI@._V1_Ratio0.6763_AL_.jpg",
    imdbRating: "7.9",
    title: "Thor: Ragnarok",
    directors: "Taika Waititi",
    imDbRating: "7.9",
    genres: "Action, Adventure, Comedy",
    plot: "Imprisoned on the planet Sakaar, Thor must race against time to return to Asgard and stop Ragnarök, the destruction of his world, at the hands of the powerful and ruthless villain Hela.",
    releaseDate: "2017-11-03",
    runtimeStr: "2h 10min",
  },
];

fillLestSession();
fillUpNextSession();

const myInterval = setInterval(swap, 3000);

function swap() {
  let temp = HomePageMovies[0];
  HomePageMovies[0] = HomePageMovies[1];
  HomePageMovies[1] = HomePageMovies[2];
  HomePageMovies[2] = HomePageMovies[3];
  HomePageMovies[3] = temp;
  fillLestSession();
  fillUpNextSession();
}

function fillLestSession() {
  document.getElementById("left").innerHTML = "";
  document.getElementById(
    "left"
  ).innerHTML += `<a href="detail.html?id=${HomePageMovies[0].id}"><img src=${HomePageMovies[0].image}></a>`;

  document.getElementById(
    "movie-title-container"
  ).innerHTML = `<a href="detail.html?id=${HomePageMovies[0].id}"><h1>${HomePageMovies[0].title}</h1></a>`;

  document.getElementById("movie-rating-container").innerHTML = `
  <p>${HomePageMovies[0].imDbRating}</p>
  `;
  document.getElementById("movie-year-container").innerHTML = `
   <p>${HomePageMovies[0].releaseDate}</p>
  `;
  document.getElementById("movie-runtime-container").innerHTML = `
  <p>${HomePageMovies[0].runtimeStr}</p>
  `;
  document.getElementById("movie-director-container").innerHTML = `
  <p>${HomePageMovies[0].directors}</p>
  `;
  document.getElementById("movie-gener-container").innerHTML = `
  <p>${HomePageMovies[0].genres}</p>
  `;
  document.getElementById("movie-plot-container").innerHTML = `
  <p>${HomePageMovies[0].plot}</p>
  `;
}

function fillUpNextSession() {
  document.getElementById("upnext-inner-container").innerHTML = "";
  for (let i = 1; i < 4; i++) {
    document.getElementById("upnext-inner-container").innerHTML += `
        <div id="upnext-movie-card">
        <div id="upnext-img-container">
        <a href="detail.html?id=${HomePageMovies[i].id}"> <img
            src="${HomePageMovies[i].image}"
          /></a>
        </div>
        <div id="upnext-movie-title">
        <a href="detail.html?id=${HomePageMovies[i].id}"><h4>${HomePageMovies[i].title}</h4> </a>
        </div>
      </div>
        `;
  }
}
