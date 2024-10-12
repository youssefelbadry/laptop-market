let username = document.querySelector("#username")
let password = document.querySelector("#password")
let signin = document.querySelector("#signin")

let getuser = localStorage.getItem("username")
let getPassword = localStorage.getItem("password")

signin.addEventListener("click" , function(e){
    e.preventDefault()
    if (username.value==="" || password.value===""){
        alert("please fill data ")
    } else 
        if ( (getuser.trim() === username.value.trim() || getPassword.trim() === password.value.trim()))
        {
            setTimeout (() => {
                window.location = "index.html"
            } , 1500)
        } else {
            alert("username or password is wrong")
        }
    })



