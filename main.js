function Bun(flavor, glaze, quantity, image) {
  this.flavor = flavor;
  this.glaze = glaze;
  this.quantity = quantity;
  this.image_alt = "picture of" + this.type + "cinnamon bun";
  this.image = image;
}

// number of items currently in cart
var numItems = 0; 
localStorage.setItem("cartItemCount", numItems);

function setDetailImage() {
  // sets default image on product detail page 
  console.log("it's working");
  document.getElementById("detailImage").setAttribute("src", "images/noglaze.jpeg");
  document.getElementById("detailTitle").innerHTML = " (Single)";
  document.getElementById("cart-count").innerHTML = "(" + localStorage.getItem("cartItemCount") + ")";
}

function setCartCount() {
  // sets cart item count on every page
  document.getElementById("cart-count").innerHTML = "(" + localStorage.getItem("cartItemCount") + ")";
}


// TODO: CHANGE FLAVOR IDS AND IMAGE NAMES
function changeDetailImage() {
  // changes the image on the detail page to match what glaze was selected
  let glaze = document.getElementById("glaze");
  if (glaze.value === "none") {
    document.getElementById("detailImage").setAttribute("src", "images/noglaze.jpeg");
  } else if (glaze.value === "sugarmilk") {
    document.getElementById("detailImage").setAttribute("src", "images/sugarmilk.jpeg");
  } else if (glaze.value === "vanillamilk") {
    document.getElementById("detailImage").setAttribute("src", "images/vanillamilk.jpeg");
  } else if (glaze.value === "doublechocolate") {
    document.getElementById("detailImage").setAttribute("src", "images/doublechocolate.jpg");
  } 
}

function changeBunTitle() {
  let quantity = document.getElementById("quantity");
  if (quantity.value === "one-pack") {
    document.getElementById("detailTitle").innerHTML = " (Single)";
  } else if (quantity.value === "three-pack") {
    document.getElementById("detailTitle").innerHTML = " (3-Pack)";
  } else if (quantity.value === "six-pack") {
    document.getElementById("detailTitle").innerHTML = " (6-Pack)";
  } else if (quantity.value === "twelve-pack") {
    document.getElementById("detailTitle").innerHTML = " (12-Pack)";
  } 
}

function addToCart() {
  numItems += 1;
  localStorage.setItem("cartItemCount", numItems);
  document.getElementById("cart-count").innerHTML = "(" + localStorage.getItem("cartItemCount") + ")";

}

