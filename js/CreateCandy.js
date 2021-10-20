const out = (str) => console.log(str);

function newCandy(){

  let candyName = document.getElementById("inpCandyName").value;
  let candyPrice = document.getElementById("inpCandyPrice").value;

  let postCandyRequest = {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify({
      "candyName": candyName,
      "candyPrice": candyPrice
    })

  }
  fetch("http://localhost:8080/candy", postCandyRequest)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));
}
