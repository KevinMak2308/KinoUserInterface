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
    var ageValues = ["All Allowed", "PG13", "M for Mature", "R for Rated"];


    for (const val of ageValues) {

      var movieAgeOptions = document.createElement("option");
        movieAgeOptions.text = val.charAt(0).toUpperCase() + val.slice(1);
        movieAgeOptions.value = movieAgeOptions.text;
        ageRestrictionSelect.appendChild(movieAgeOptions);
    }


    for(var j = 0; j < ageRestrictionSelect.options.length;  j++) {
      if(ageRestrictionSelect.options[j].innerHTML === ageRestrictionSelect.value) {
        ageRestrictionSelect.selectedIndex = j;
        break;
      }
    }

    cell3.appendChild(ageRestrictionSelect);


    //cell3.innerHTML = movie.movieAgeRestriction;

    let cell4 = row.insertCell(3);
    let categorySelect = document.createElement("select");
    let categoryValues = ["HORROR", "ROMANCE", "ACTION", "SCIFI", "COMEDY"];

    for (const val of categoryValues ) {
      let categoryOptions = document.createElement("option");
      categoryOptions.text = val.charAt(0).toUpperCase() + val.slice(1);
      categoryOptions.value = categoryOptions.text;
      categorySelect.appendChild(categoryOptions);
    }

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
      movie.movieTitle = titleInput.value;
      titleInput.style.borderStyle = 'solid';

      movie.movieDuration = durationInput.value;
      durationInput.style.borderStyle = 'solid';

      movie.movieAgeRestriction = ageRestrictionSelect.value;

      movie.movieCategory = categorySelect.value;

      movie.movieActors = actorInput.value;
      actorInput.style.borderStyle = 'solid';


      updateMovie(movie);
    }

    cell6.appendChild(editbutton);


    }

    /*let cell7 = row.insertCell(6);
    const updatebutton = document.createElement("input");
    updatebutton.type ="button";
    updatebutton.setAttribute("value", "Update")
    cell7 = row.appendChild(updatebutton);

    updatebutton.onclick = function () {

    }

    let cell8 = row.insertCell(7);
    const deletebutton = document.createElement("input");
    deletebutton.type ="button";
    deletebutton.setAttribute("value", "Delete")
    cell7 = row.appendChild(deletebutton);

    deletebutton.onclick = function () {

    }*/


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
    out("Vi har rettet");
    out(response.status);
    out(response.ok);
    if (!response.ok) {
      out("error");
    }
    return response.json();
  }

    appendData(fetchMoviesData());




