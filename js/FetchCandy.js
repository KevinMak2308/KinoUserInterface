const out = (str) => console.log(str);
const url = 'http://localhost:8080/showAllCandy';

function fetchCandyData() {
  return fetch(url)
    .then(data => data.json())
    .then(appendCandyData)
}

basket = [];

const div = document.getElementById("ShowAllCandies")

function appendCandyData(data) {
  out(data);
  for (let i = 0; i < data.length; i++) {
    const candy = data[i]

    let candyDiv = document.createElement("div")
    candyDiv.style.borderStyle = "solid";

    let pCandy = document.createElement("p")


    let pCandyName = document.createElement("p")
    pCandyName.innerHTML = candy.candyName;

    let pCandyPrice = document.createElement("p")
    pCandyPrice.innerHTML = candy.candyPrice;


    div.appendChild(candyDiv);
    candyDiv.appendChild(pCandyName)
    candyDiv.appendChild(pCandyPrice)

    function addToBasket(candy) {
      basket.push(candy);
    }

    const candyBasketButton = document.createElement("input");
    candyBasketButton.type = "button";
    candyBasketButton.setAttribute("value", "Add To Basket")

    candyBasketButton.onclick = function () {

      addToBasket(candy);

    }

    candyDiv.appendChild(candyBasketButton);
  }

}

let checkoutButton = document.createElement("input");
checkoutButton.type = "button";
checkoutButton.setAttribute("value", "checkout");
div.appendChild(checkoutButton);

checkoutButton.onclick = function () {
  let checkoutWindow = open("", null, "height=640,width=1280");
  let checkoutDiv = checkoutWindow.document.createElement("div");
  for (var i = 0; i < basket.length; i++) {
    let div = checkoutWindow.document.createElement("div");
    let candyNameP = checkoutWindow.document.createElement("p");
    candyNameP.innerHTML = basket[i].candyName;
    let candyPriceP = checkoutWindow.document.createElement("p");
    candyPriceP.innerHTML = basket[i].candyPrice;

    checkoutDiv.appendChild(div);
    div.appendChild(candyNameP);
    div.appendChild(candyPriceP);
    div.style.borderStyle = "Solid";
  }


    let sum = 0;
    for (let i = 0; i < basket.length; i++) {
      sum += basket[i].candyPrice;
    }
    console.log(sum);



  let sumDiv = checkoutWindow.document.createElement("div");
  checkoutWindow.document.body.appendChild(sumDiv);


  checkoutWindow.document.body.appendChild(checkoutDiv);
}


out(basket);
fetchCandyData();

