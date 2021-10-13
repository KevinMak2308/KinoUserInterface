const out = (str) => console.log(str);

function newMovie() {



  let category = document.getElementById("inpCat").value
  let title = document.getElementById("inpTitle").value
  let duration = document.getElementById("inpDuration").value
  let age = document.getElementById("inpAge").value


  let postMovieRequest = {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify({
      "movieCategory": category,
      "movieTitle": title,
      "movieDuration": duration,
      "movieAgeRestriction": age,

    })

  }
  fetch("http://localhost:8080/createMovie", postMovieRequest)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));

}
