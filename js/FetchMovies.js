
function showMovies() {


let GetMoviesRequest = {
  method: "Get",
  headers: {
    "content-type": "application/json"
  },
  body: JSON.stringify({
    "movieCategory": category,
    "movieTitle": title,
    "movieDuration": duration,
    "movieAgeRestriction": age,
    "movieActors": actors,
  })

}
fetch("http://localhost:8080/showAllMovies", GetMoviesRequest)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log(error));

}

addEventListener("click",showMovies)
