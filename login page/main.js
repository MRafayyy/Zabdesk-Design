let username = document.getElementById("username");
let password = document.getElementById("password");

let error1 = document.getElementById("error-1")
let error2 = document.getElementById("error-2")



const validation= ()=>{

    error1.innerHTML = ""
    error2.innerHTML = ""


let registered_ids = [2012354, 2012339, 2012363, 2012340, 2012350];
let regex = /^[0-9]+$/;


if(username.value.trim()==""){
    error1.innerHTML = "User Id field is empty"
    username.classList.add("error-color")
}
else if (!username.value.match(regex)) {
    error1.innerHTML = "Invalid User Id"
    username.classList.add("error-color");
}

else{
    error1.classList.remove("error-color");
    error1.innerHTML = ""
    for (let i = 0; i < registered_ids.length; i++) {
        if (username.value.trim() == registered_ids[i]) {
            error1.innerHTML = ""
            error1.classList.remove("error-color");
            break;
        }

        else {
            error1.classList.add("error-color");
            error1.innerHTML = "Incorrect User Id"
        }
    }
}


let regex_specialchar = /(?=.*?[.#?!@$%^&*-])/
let regex_numbers = /(?=.*?[0-9])/
let regex_CapAlphabet = /(?=.*?[A-Z])/
let regex_SmallAlphabet = /(?=.*?[a-z])/


if(password.value.trim()==""){
    error2.innerHTML = "Password field is empty"
    password.classList.add("error-color")
}
else{
    error2.innerHTML = "Password must contain: "

 
    if (!password.value.trim().match(regex_numbers)) {
       
        error2.classList.add("error-color");
        error2.innerHTML += "<li>At least one digit </li>"
    }
    if (!password.value.trim().match(regex_SmallAlphabet)) {
       
        error2.classList.add("error-color");
        error2.innerHTML += "<li>At least one lowercase character <code>[a-z]</code></li>"

    }
    if (!password.value.trim().match(regex_CapAlphabet)) {
       
        error2.classList.add("error-color");
        error2.innerHTML += "<li>At least one uppercase character <code>[A-Z] </code></li>"
    }
    if (!password.value.trim().match(regex_specialchar)) {
       
        error2.classList.add("error-color");
        error2.innerHTML += "<li>At least one special character <code>[*.!@#$%^&amp;(){}[]:;&lt;&gt;,.?/~_+-=|\]</code></li>"
    }
    if (password.value.trim().length < 8 || password.value.trim().length > 32 ) {
       
        error2.classList.add("error-color");
        error2.innerHTML += "<li>At least 8 characters in length, but no more than 32.</li>"
    }


    if (!error2.classList.contains("error-color")) {

        error2.innerHTML = ""

        error2.innerHTML = "<li> Strong Password </li>"

        document.querySelector("#error-2").getElementsByTagName("li")[0].style.listStyle = "none"
        document.querySelector("#error-2").getElementsByTagName("li")[0].style.color = "green"

        window.location.href = "../Home-page/index.html"


    }



    
}

}






const change = ()=>{
    let hamburger = document.getElementsByClassName("hamburger")[0];
    console.log(hamburger);
    let patty1 = document.querySelectorAll('.patty')[0];
    console.log(patty1);
    let patty2 = document.querySelectorAll('.patty')[1];
    console.log(patty2);
    let patty3 = document.querySelectorAll('.patty')[2];
    console.log(patty3);


    // let ok = hamburger[0].patty1;
patty1.classList.toggle("turn1")
patty2.classList.toggle("turn2")
patty3.classList.toggle("turn3")


let side_menu = document.getElementsByClassName("side-menu")[0];

side_menu.classList.toggle("side-menu-open")
}


const reset_pass_page_open = () =>{
    window.location.href = '../Reset-password-page/index.html'
}




