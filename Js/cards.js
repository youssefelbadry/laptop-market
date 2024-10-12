let allproducts = document.querySelector(".product-item");
let noproducts = document.querySelector(".noproducts");
function drawcartproduct(all = []) {
  if (JSON.parse(localStorage.getItem("ProductsInCart")).length === 0)
    noproducts.style.display = "block";

  let pro = JSON.parse(localStorage.getItem("ProductsInCart")) || all;
  let x = pro.map((item) => {
    return `
          <div class="product row col-6">
           <img src="${item.Image}" alt=""/>
           <div class="product-desc">
            <h2 class="text-warning">${item.title}</h2>
            <p>${item.des}</p>
            <span>${item.color}</span>
            <p>${item.price}</p>
            <p>Quntate ${item.qtr}</p>
            </div>
            <div class="divbutton">
            <i class="far fa-heart fav"></i>
            <button class="add_to_card btn btn-warning" onclick = "removefromcart(${item.id})">Remove From Card</button>
            </div>
            </div>
        `;
  });
  allproducts.innerHTML = x.join("");
}
drawcartproduct();

// ***********************************************************************************************
let cardpro = document.querySelector(".carts_products");
let divshow = document.querySelector(".carts_products div");
let badge = document.querySelector(".badge");
let price = document.querySelector(".price");
// let addedItem = localStorage.getItem("ProductsInCart");

function removefromcart(id) {
  let ProductsInCart = localStorage.getItem("ProductsInCart");
  if (ProductsInCart) {
    let items = JSON.parse(ProductsInCart);
    let filterItem = items.filter((item) => item.id !== id);
    localStorage.setItem("ProductsInCart", JSON.stringify(filterItem));
    drawcartproduct(filterItem);
  }
}
