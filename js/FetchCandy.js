const out = (str) => console.log(str);
const url = 'http://localhost:8080/showAllCandy';
out("jeg er i fetch candy")
function fetchCandyData(){
  return fetch(url)
    .then(data => data.json())
    .then(appendCandyData)
}


const div = document.getElementById("ShowAllCandies")

function appendCandyData(data){
  out(data);
   for (let i = 0; i<data.length; i++){
     const candy = data[i]

   let candyDiv = document.createElement("div")
    candyDiv.style.borderStyle = "solid";

     let pCandy = document.createElement("p")



     let pCandyname = document.createElement("p")
     pCandyname.innerHTML = candy.candyName;

     let pCandyPrice = document.createElement("p")
     pCandyPrice.innerHTML = candy.candyPrice;


     div.appendChild(candyDiv);
    candyDiv.appendChild(pCandyname)
     candyDiv.appendChild(pCandyPrice)




   }



}


fetchCandyData();
