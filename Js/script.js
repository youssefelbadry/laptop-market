let allproducts = document.querySelector(".product-item");
let productincard = localStorage.getItem("ProductsInCart");
let drawItems;
(drawItems = function (products = []) {
  let y = products.map((item) => {
    return `
        <div class="product row col-4">
         <img src="${item.Image}" alt=""/>
         <div class="product-desc">
          <a class="text-warning" onclick = save(${item.id})>${item.title}</a>
          <p>${item.des}</p>
          <span>${item.color}</span>
          <p>${item.price}</p>
          </div>
          <div class="divbutton">
          <i class="far fa-heart fav"></i>
          <button class="add_to_card btn btn-warning" onClick = "addToCart(${item.id})">Add To Card</button>
          </div>
          </div>
      `;
  });
  allproducts.innerHTML = y.join("");
})(JSON.parse(localStorage.getItem("products")));

// *******************************************************************************
let cardpro = document.querySelector(".carts_products");
let divshow = document.querySelector(".carts_products div");
let badge = document.querySelector(".badge");
let price = document.querySelector(".price");
// Initialize the addedItem array from localStorage if it exists
let addedItem = localStorage.getItem("ProductsInCart")
  ? JSON.parse(localStorage.getItem("ProductsInCart"))
  : [];

// Initialize the allqt array with the items from addedItem
let allqt = [...addedItem];

// Display the items on page load
if (addedItem.length > 0) {
  addedItem.forEach((item) => {
    divshow.innerHTML += `<p>${item.title} // ${item.qtr}</p>`;
  });
  badge.style.display = "block";
  badge.innerHTML = addedItem.length;
}

// Check if the user is logged in
if (localStorage.getItem("username")) {
  function addToCart(id) {
    let choosenItem = products.find((item) => item.id === id);
    let itemnum = allqt.find((i) => i.id === choosenItem.id);

    if (itemnum) {
      itemnum.qtr += 1;
    } else {
      choosenItem.qtr = 1; // Initialize quantity if not already present
      allqt.push(choosenItem);
    }

    divshow.innerHTML = allqt.map(item => `<p>${item.title} // ${item.qtr}</p>`).join('');

    addedItem = [...allqt]; // Sync addedItem with allqt
    let getnumpro = getunique(addedItem, "id");
    localStorage.setItem("ProductsInCart", JSON.stringify(getnumpro));
    badge.style.display = "block";
    badge.innerHTML = allqt.length;
    cardpro.style.display = "block";
  }

  function getunique(arr, filtertype) {
    let unique = arr
      .map((item) => item[filtertype])
      .map((item, i, final) => final.indexOf(item) === i && i)
      .filter((item) => arr[item])
      .map((item) => arr[item]);
    return unique;
  }
} else {
  window.location = "register.html";
}


// *****************************************************************************************
let shoppingcard = document.querySelector(".shopping_card");
let cardproducts = document.querySelector(".carts_products");
shoppingcard.addEventListener("click", opretor);

function opretor() {
  if (divshow.innerHTML != "") {
    if (cardpro.style.display == "block") {
      cardpro.style.display = "none";
    } else {
      cardpro.style.display = "block";
    }
  }
}

// **********************************************************************************************
// details
function save(id) {
  localStorage.setItem("productid", id);
  window.location = "details.html";
}
/******************************************************* */
// search

let input = document.querySelector(".home input");

input.addEventListener("keyup", world);

function world(e) {
  search(e.target.value, JSON.parse(localStorage.getItem("products")));
  console.log("eeeeeeeeeeeeeeeeeeeeeeee");
  if (e.target.value.trim() === "") {
    drawItems;
    localStorage.getItem("products");
  }
}

function search(title, myArray) {
  let arr = myArray.filter((item) => (item.title).indexOf(title) !== -1);
  drawItems(arr);
}

