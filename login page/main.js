let username = document.getElementById("username");
let password = document.getElementById("password");

let error1 = document.getElementById("error-1")
let error2 = document.getElementById("error-2")

error1.innerHTML = ""
error2.innerHTML = ""
const validation= ()=>{


if(username.value.trim()==""){
    error1.innerHTML = "User Id field is empty"
    username.classList.add("error-color")
}
else{
    error1.innerHTML = ""
    username.classList.remove("error-color");
}



if(password.value.trim()==""){
    error2.innerHTML = "Password field is empty"
    password.classList.add("error-color")
}
else{
    pattern_check();
}

}

const pattern_check = ()=>{

    if(!password.value.match("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$")){
               
        error2.innerHTML="<p>Password does not contain correct pattern</p><ol>	<li>At least one digit <code>[0-9]</code></li>	<li>At least one lowercase character <code>[a-z]</code></li>	<li>At least one uppercase character <code>[A-Z]</code></li><li>At least one special character <code>[*.!@#$%^&amp;(){}[]:;&lt;&gt;,.?/~_+-=|\]</code></li><li>At least 8 characters in length, but no more than 32.</li></ol>"
        // + error2.innerHTML;
}

else{
    error2.innerHTML = ""
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

