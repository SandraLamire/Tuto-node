// API Fetch intégrée à Node

// PROMISE
fetch("https://api.thecatapi.com/v1/images/search")
    .then(res => res.json())
    .then(data => console.log(data[0].url));

// async function logMovies() {
//     const response = await fetch("http://example.com/movies.json");
//     const movies = await response.json();
//     console.log(movies);
//   } 
