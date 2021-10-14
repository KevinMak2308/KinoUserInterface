
const url = 'http://localhost:8080/showAllMovies';

function fetchMoviesData() {
  return fetch(url)
    .then(data => data.json())
    .then(appendData)
}

const table = document.getElementById("showAllMovies");

function appendData(data) {
  for (let i = 0; i < data.length; i++) {
    const movie = data[i];
    let rowCount = table.rows.length;
    let row = table.insertRow(rowCount);
    let cell1 = row.insertCell(0);
    cell1.innerHTML = movie.movieTitle;
    let cell2 = row.insertCell(1);
    cell2.innerHTML = movie.movieDuration;
    let cell3 = row.insertCell(2);
    cell3.innerHTML = movie.movieAgeRestriction;
    let cell4 = row.insertCell(3);
    cell4.innerHTML = movie.movieCategory;
    let cell5 = row.insertCell(4);
    cell5.innerHTML = movie.movieActors;

  }
}


appendData(fetchMoviesData())





