
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

    let cell6 = row.insertCell(5);
    const editbutton = document.createElement("input");
    editbutton.type = "button";
    editbutton.setAttribute("value", "Edit");
    cell6.appendChild(editbutton);
    let cell7 = row.insertCell(6);
    const updatebutton = document.createElement("input");
    updatebutton.type ="button";
    updatebutton.setAttribute("value", "Update")
    cell7 = row.appendChild(updatebutton);
    let cell8 = row.insertCell(7);
    const deletebutton = document.createElement("input");
    deletebutton.type ="button";
    deletebutton.setAttribute("value", "Delete")
    cell7 = row.appendChild(deletebutton);

    editbutton.onclick = function () {

           }

    updatebutton.onclick = function () {

    }

    deletebutton.onclick = function () {

    }

    }
  }

  async function updateMovie(movie) {
    try {
      const response = await restUpdateMovie(movie);
      out(response);

    } catch (error) {
      alert(error.message);
      out(error);
    }

  }

  async function restUpdateMovie(movie) {
    const updateURL = "http://localhost:8080/updateMovie/" + movie.id
    const jsonString = JSON.stringify(movie);
    out(jsonString);

    const fetchOptions = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: jsonString
    }
    const response = await fetch(updateURL, fetchOptions);
    out("Vi har rettet");
    out(response.status);
    out(response.ok);
    if (!response.ok) {
      out("det gik ikke godt");
    }
    return response.json();
  }

    appendData(fetchMoviesData());




