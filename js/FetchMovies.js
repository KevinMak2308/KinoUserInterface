const out = (str) => console.log(str);
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
    row.id = movie.movieID;

    let cell1 = row.insertCell(0);
    let titleInput = document.createElement("input");
    titleInput.style.borderStyle = 'none';
    titleInput.type = "text";
    titleInput.setAttribute("value", movie.movieTitle);
    cell1.appendChild(titleInput);

    //cell1.innerHTML = movie.movieTitle;


    let cell2 = row.insertCell(1);
    let durationInput = document.createElement("input");
    durationInput.style.borderStyle = 'none';
    durationInput.type = "text";
    durationInput.setAttribute("value", movie.movieDuration);
    cell2.appendChild(durationInput);

    //cell2.innerHTML = movie.movieDuration;

    let cell3 = row.insertCell(2);
    let ageRestrictionSelect = document.createElement("select");
    var ageValues = ["All Allowed", "PG13", "M for Mature", "R for Restricted"];

    for (const val of ageValues) {

      var movieAgeOptions = document.createElement("option");
      movieAgeOptions.text = val.charAt(0).toUpperCase() + val.slice(1);
      movieAgeOptions.value = movieAgeOptions.text;

      ageRestrictionSelect.appendChild(movieAgeOptions);
    }

    ageRestrictionSelect.value = movie.movieAgeRestriction;

    cell3.appendChild(ageRestrictionSelect);


    //cell3.innerHTML = movie.movieAgeRestriction;

    let cell4 = row.insertCell(3);
    let categorySelect = document.createElement("select");
    let categoryValues = ["HORROR", "ROMANCE", "ACTION", "SCIFI", "COMEDY"];

    for (const val of categoryValues) {

      let categoryOptions = document.createElement("option");
      categoryOptions.text = val.charAt(0).toUpperCase() + val.slice(1);
      categoryOptions.value = categoryOptions.text;

      categorySelect.appendChild(categoryOptions);
    }

    categorySelect.value = movie.movieCategory;

    cell4.appendChild(categorySelect);

    //cell4.innerHTML = movie.category;

    let cell5 = row.insertCell(4);
    let actorInput = document.createElement("input");
    actorInput.style.borderStyle = 'none';
    actorInput.type = "text";
    actorInput.setAttribute("value", movie.movieActors);
    cell5.appendChild(actorInput);

    //cell5.innerHTML = movie.movieActors;

    let cell6 = row.insertCell(5);
    const editbutton = document.createElement("input");
    editbutton.type = "button";
    editbutton.setAttribute("value", "Edit");


    editbutton.onclick = function () {

      titleInput.style.borderStyle = 'solid';
      durationInput.style.borderStyle = 'solid';
      actorInput.style.borderStyle = 'solid';

    }

    cell6.appendChild(editbutton);


    let cell7 = row.insertCell(6);
     const updatebutton = document.createElement("input");
     updatebutton.type = "button";
     updatebutton.setAttribute("value", "Update")

    updatebutton.onclick = function () {

       movie.movieTitle = titleInput.value;
       movie.movieDuration = durationInput.value;
       movie.movieAgeRestriction = ageRestrictionSelect.value;
       movie.movieCategory = categorySelect.value;
       movie.movieActors = actorInput.value;

       updateMovie(movie);

     }

     cell7.appendChild(updatebutton);

     let cell8 = row.insertCell(7);
     const deletebutton = document.createElement("input");
     deletebutton.type ="button";
     deletebutton.setAttribute("value", "Delete")


     deletebutton.onclick = function () {
       deleteMovie(movie);
       window.location.reload()

     }

    cell8 = row.appendChild(deletebutton);

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
    const updateURL = "http://localhost:8080/updateMovie/" + movie.movieID;
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
    out(response.status);
    out(response.ok);
    if (!response.ok) {
      out("error");
    }
    return response.json();

}

async function deleteMovie(movie) {
  try {
    const response = await restDeleteMovie(movie);
    out(response);

  } catch(error) {
    alert(error.message);
    out(error);
  }
}

async function restDeleteMovie(movie) {
  const url = "http://localhost:8080/delete/" + movie.movieID;

  const fetchOptions = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    },
    body: ""
  }

  const response = await fetch(url, fetchOptions);
  out(response.status)
  out(response.ok)

  if (!response.ok) {
    out(response.error())
  }

  return response;
}

    appendData(fetchMoviesData());




