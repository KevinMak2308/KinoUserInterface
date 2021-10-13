const out = (str) => console.log(str);

document.addEventListener("DOMContentLoaded", createFormEventListener);

let movieForm;

function createFormEventListener(){

  movieForm = document.getElementById("newMovieForm");
  out("movieForm" + movieForm)
  movieForm.addEventListener("submit", handleFormSubmit);
}

let a = document.getElementById(".inpTitle")
out(a);

async function handleFormSubmit(event){
  //const form = event.
}
