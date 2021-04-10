function Bun(flavor, glaze, quantity) {
  this.flavor = flavor;
  this.glaze = glaze;
  this.quantity = quantity;
}

// global variables
var cart_items = []; 
var bun_id = 0; 
var bun_from_storage = JSON.parse(localStorage.getItem("cart"));


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
  document.getElementById("addCart").innerHTML = "Added to Cart";

  numItems += 1;
  localStorage.setItem("cartItemCount", numItems);
  document.getElementById("cart-count").innerHTML = "(" + localStorage.getItem("cartItemCount") + ")";

  // options chosen 
  let glaze = document.getElementById("glaze");
  let quantity = document.getElementById("quantity")

  // create and save new Bun instance with chosen options
  // setting image based on color selected 

  let bun = new Bun("Pumpkin Spice", glaze.value, quantity.value);
  bun_id += 1; 
  console.log(cart_items);
  cart_items.push(bun); 
  localStorage.setItem("cart", JSON.stringify(cart_items));


}



// gets pillow from local storage and puts it in cart 
function getStorageCart() {
      if (bun_from_storage != null) {
      var i;
      for (i = 0; i < bun_from_storage.length; i++) {
          console.log(bun_from_storage[i]);
          item = bun_from_storage[i]; 
          let cart = document.getElementById("items");
          let product_wrapper = document.createElement("div");
          product_wrapper.setAttribute("class", "cartItem");
          let quantity_div = document.createElement("div");
          let bun_div = document.createElement("div");
          let price_div = document.createElement("div");
          let delete_btn_div = document.createElement("div");
      
      
          let bun_name = document.createElement("h4");
          bun_div.appendChild(bun_name);
          bun_name.innerText = item.flavor + " (" + item.quantity + ")";
      
          let bun_glaze = document.createElement("h5");
          bun_div.appendChild(bun_glaze);
          bun_glaze.innerText = "Glaze: " + item.glaze;
      
          let quantity = document.createElement("input");
          quantity.setAttribute("type", "number");
          quantity_div.appendChild(quantity);
          quantity.value = 1;
      
          price_div.appendChild(document.createTextNode("$25"));      
          let delete_btn = document.createElement("button");
          delete_btn.innerText = "Remove";
          delete_btn.setAttribute("onclick", "deleteItem(this.parentNode.parentNode)");
          delete_btn_div.appendChild(delete_btn);
      
          product_wrapper.appendChild(quantity_div);
          product_wrapper.appendChild(bun_div);
          product_wrapper.appendChild(price_div);
          product_wrapper.appendChild(delete_btn_div);
          // product_wrapper.appendChild(document.createElement("hr"));
          // cart.insertAfter(product_wrapper, document.getElementById("cart-columns"));
          // cart.insertAfter(document.createElement("hr"), product_wrapper)
          cart.appendChild(product_wrapper);
          // cart.appendChild(document.createElement("hr"));
      }
    }
}