# IMDb_Clone_JavaScript  https://imdb-clone-javascript-bt6fdrbld-sriramarumugham.vercel.app/

explained: https://youtu.be/A28iB3ifFPs
API USED :

api used to search a movie by name and search a movie by a unique id  https://imdb-api.com/API
Use the DEBOUNCE FEATURE before calling an API request because the limit for each key is 100 requests per day.

DEBOUNCE:

a variable is used to store the interval reference; 
before calling an api request for searching movies by name,
a new api request is made for each letter, and for each request, 
there is a delay of 0.4 seconds. 
When an api request is made on typing a letter, 
it clears the prior settimeout reference and creates a new settime out function. 
In doing so, we are limiting the api request when the user keeps on typing.

LOCAL STORAGE FEATURES

This program allows users to bookmark their favourite films, 
which are then uploaded to local storage, 
shown on the watch later page,
and deleted by users from the page.

RE-RENDERING THE PAGES:

When a user action changes the data, 
the html related to the data is called to make the page dynamic without re-rendering the page 
because we are simulating a React app, the component re-renders automatically. 
The HTML part that needs to re-render based on the actions of the users is stored in a separate file and 
the HTML markup for different pages is stored in a function. 
