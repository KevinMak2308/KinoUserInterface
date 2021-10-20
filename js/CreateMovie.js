const out = (str) => console.log(str);

function newMovie() {



  var categoryList = document.getElementById("inpCategory");
  var category = categoryList.options[categoryList.selectedIndex].value;
  let title = document.getElementById("inpTitle").value
  let duration = document.getElementById("inpDuration").value
  let ageList = document.getElementById("inpAge");
  let age = ageList.options[ageList.selectedIndex].value;
  let actors = document.getElementById("inpActors").value


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
      "movieActors": actors,

    })

  }
  fetch("http://localhost:8080/createMovie", postMovieRequest)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));
}
