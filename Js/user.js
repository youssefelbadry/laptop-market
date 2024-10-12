let links = document.querySelector("#links");
let userD = document.querySelector("#user");
let userinfo = document.querySelector("#user_info");

if (localStorage.getItem("username")) {
  links.remove();
  userD.innerHTML = localStorage.getItem("username");
  userinfo.style.display = "flex";
} else {
  links.style.display = "block";
}

let logout = document.querySelector("#logout");
logout.addEventListener("click", function () {
  localStorage.clear();
  setTimeout(() => {
    window.location = "register.html";
  }, 1500);
});
// *****************************************
