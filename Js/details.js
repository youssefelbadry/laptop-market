let productss = JSON.parse(localStorage.getItem("products"));
let productId = localStorage.getItem("productid");
let detailspro = document.querySelector(".details-pro");

let productsdetails = productss.find((item) => item.id == productId);

detailspro.innerHTML = `
<img src ="${productsdetails.Image}" alt="" />
<h2 class="text-warning" style="font-size: 40px">${productsdetails.title}</h2>
<span>${productsdetails.des}</span>`;
