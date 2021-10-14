
const url = 'http://localhost:8080/showAllMovies';

function fetchMoviesData() {
  return fetch(url)
    .then(data => data.json())
    .then(appendData)
}

function appendData(data) {
  var mainContainer = document.getElementById("showAllMovies");
  for (var i = 0; i < data.length; i++) {
    var div = document.createElement("div");
    div.innerHTML = 'MovieName: ' + data[i].movieTitle + ' Movie Duration ' + data[i].movieDuration


    mainContainer.appendChild(div);
  }
}


appendData(fetchMoviesData())



