let reg_id = document.getElementsByClassName("Reg-id")[0];
let err = document.getElementById("err");
let container = document.getElementsByClassName("reset-pass-container")[0]
let change_pass_cont = document.getElementsByClassName("change-password-container")[0];


let registered_ids = [2012354, 2012339, 2012363];
let regex = /^[0-9]+$/;

const reg_id_check = () => {

    if (reg_id.value == "") {
        err.classList.add("error");
        err.innerHTML = "Empty field"
    }

    else if (!reg_id.value.match(regex)) {
        err.classList.add("error");
        err.innerHTML = "Invalid User Id"
    }

    else {

        err.classList.remove("error");
        err.innerHTML = ""
        for (let i = 0; i < registered_ids.length; i++) {
            if (reg_id.value == registered_ids[i]) {

                container.classList.add("no");
                change_pass_cont.classList.remove("wi0");
                change_pass_cont.classList.add("change-password-containerll")
            }

            else {
                err.classList.add("error");
                err.innerHTML = "Invalid User Id"
            }
        }
    }

}

let password1 = document.getElementById("password1");
let password2 = document.getElementById("password2");
let error_field = document.getElementsByClassName("error-field")[0];
let pop = document.getElementById("pop");


const verify = () => {

    error_field.innerHTML = "";
    error_field.classList.remove("error2");

    let regex_specialchar = /(?=.*?[.#?!@$%^&*-])/
    let regex_numbers = /(?=.*?[0-9])/
    let regex_CapAlphabet = /(?=.*?[A-Z])/
    let regex_SmallAlphabet = /(?=.*?[a-z])/



    if (password1.value == "") {
        error_field.classList.add("error2")
        change_pass_cont.classList.add("extra-height")
        error_field.innerHTML = "Empty field"
    }


    else {

        error_field.innerHTML = "Password must contain: "


        if (!password1.value.trim().match(regex_numbers)) {
            change_pass_cont.classList.add("extra-height");
            error_field.classList.add("error2");
            error_field.innerHTML += "<li>At least one digit </li>"

        }
        if (!password1.value.trim().match(regex_SmallAlphabet)) {
            change_pass_cont.classList.add("extra-height");
            error_field.classList.add("error2");
            error_field.innerHTML += "<li>At least one lowercase character <code>[a-z]</code></li>"

        }
        if (!password1.value.trim().match(regex_CapAlphabet)) {
            change_pass_cont.classList.add("extra-height");
            error_field.classList.add("error2");
            error_field.innerHTML += "<li>At least one uppercase character <code>[A-Z] </code></li>"

        }
        if (!password1.value.trim().match(regex_specialchar)) {
            change_pass_cont.classList.add("extra-height");
            error_field.classList.add("error2");
            error_field.innerHTML += "<li>At least one special character <code>[*.!@#$%^&amp;(){}[]:;&lt;&gt;,.?/~_+-=|\]</code></li>"

        }
        if (password1.value.trim().length < 8) {
            change_pass_cont.classList.add("extra-height");
            error_field.classList.add("error2");
            error_field.innerHTML += "<li>At least 8 characters in length, but no more than 32.</li>"

        }


        if (!error_field.classList.contains("error2")) {


            if (password1.value.trim() == password2.value.trim()) {
                error_field.classList.remove("error2");

                error_field.innerHTML = "";

                pop.classList.remove("wi1");
                pop.classList.add("popup");
            }

            else {
                error_field.classList.add("error2");
                change_pass_cont.classList.add("extra-height");
                error_field.innerHTML = "The passwords do not match"
            }



        }


    }



}












const change = () => {
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

