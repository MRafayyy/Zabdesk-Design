
let side_menu_li = document.getElementsByClassName("side-menu-li");

let DropDownMenuClassInsideLi = document.getElementsByClassName("DropDownMenus");

/*----------------------------------------------When Clicking on Hamburger (start)------------------------------------------ */

const change = () => {
    let hamburger = document.getElementsByClassName("hamburger")[0];
    console.log(hamburger);
    let patty1 = document.querySelectorAll('.patty')[0];
    console.log(patty1);
    let patty2 = document.querySelectorAll('.patty')[1];
    console.log(patty2);
    let patty3 = document.querySelectorAll('.patty')[2];
    console.log(patty3);


    for (let i = 0; i < 3; i++) {
        document.querySelectorAll(".patty")[i].classList.toggle("change_color");
    }


    // let ok = hamburger[0].patty1;
    patty1.classList.toggle("turn1");
    patty2.classList.toggle("turn2");
    patty3.classList.toggle("turn3");


    let side_menu = document.getElementsByClassName("side-menu")[0];

    side_menu.classList.toggle("side-menu-open")

    if (!side_menu.classList.contains("side-menu-open")) {
        for (let i = 0; i < side_menu_li.length; i++) {
            DropDownMenuClassInsideLi[i].classList.remove(`hello_${i}`);
        }
    }
}


/*----------------------------------------------When Clicking on Hamburger (end)------------------------------------------ */


/*----------------------------------------------When Clicking for DropDown Menu (start)------------------------------------------ */


// let a = document.getElementsByClassName("side-menu-li");

// let c = document.getElementsByClassName("DropDownMenus");

for (let i = 0; i < side_menu_li.length; i++) {


    side_menu_li[i].onclick = () => {
        DropDownMenuClassInsideLi[i].classList.toggle(`hello_${i}`);
        // DropDownMenuClassInsideLi[i].classList.toggle("hello");
        for (let j = 0; j < side_menu_li.length; j++) {
            if (DropDownMenuClassInsideLi[j] != DropDownMenuClassInsideLi[i]) {
                DropDownMenuClassInsideLi[j].classList.remove(`hello_${j}`);
                // DropDownMenuClassInsideLi[j].classList.remove("hello");
            }
        }
    }
}
/*----------------------------------------------When Clicking for DropDown Menu (end)------------------------------------------ */











/*---------------------------------When Clicking on Submit, Select All and Deselect All (start)----------------------------- */


let inputs = document.getElementsByTagName("input");
let sAll = document.getElementById("sAll");

for (let i = 0; i < inputs.length - 1; i++) {
    inputs[i].onclick = function () {
        
        // inputs[i].setAttribute("checked", "true");
        inputs[i].toggleAttribute("checked")
    }
    
    
}
const selectAll = () => {
    
    for (let i = 0; i < inputs.length - 1; i++) {
        // inputs[i].setAttribute("checked", "true");
        inputs[i].checked = true
        // inputs[i].setAttribute("checked", "checked");
    }

}
const deselectAll = () => {
    
    for (let i = 0; i < inputs.length - 1; i++) {
        
        // inputs[i].removeAttribute("checked");
        inputs[i].checked = false;
        // inputs[i].setAttribute("disabled","true")
        
        
        
        
    }
    
    
}






let request_status_of_courses = document.getElementsByClassName("request-status-of-courses");

let SNo = document.getElementsByClassName("SNo");
let RId = document.getElementsByClassName("RId");
let CNo = document.getElementsByClassName("CNo");
let CName = document.getElementsByClassName("CName");
let WClass = document.getElementsByClassName("WClass");
let St = document.getElementsByClassName("St");

let new_rows = document.getElementsByClassName("new-rows")
let course_number = document.getElementsByClassName("course-number")
let course_name = document.getElementsByClassName("course-name")
let credit_hours = document.getElementsByClassName("credit-hours")
let tick_container = document.getElementsByClassName("tick-container")
let tick = document.getElementsByClassName("tick")


let first_col = document.getElementsByClassName("first-col")
let second_col = document.getElementsByClassName("second-col")
let third_col = document.getElementsByClassName("third-col")
// let fourth_col = document.getElementsByClassName("fourth-col")


let random_req_id = 37413;
let count = inputs.length;

const status_update = () => {
    
    

    for (let i = inputs.length-1; i >=0 ; i--) {
        // while(inputs.length>0){
        
        // if(inputs[i].hasAttribute("checked")){
            if (inputs[i].checked == true) {
                
                count -= 1;
                request_status_of_courses[i].classList.add("request-status")
                
                SNo[i].innerHTML = count;
                RId[i].innerHTML = random_req_id;
                CNo[i].innerHTML = course_number[i].innerHTML;
                CName[i].innerHTML = course_name[i].innerHTML;
                WClass[i].innerHTML = "6F";
                St[i].innerHTML = "pending";
                
                
                
                new_rows[i].classList.add("class","listed-courses");
                first_col[i].classList.add("class","listed-courses-items");
                second_col[i].classList.add("class","listed-courses-items");
                third_col[i].classList.add("class","listed-courses-items");
                // fourth_col[i].classList.add("class","listed-courses-items");
                
                first_col[i].innerHTML = course_number[i].innerHTML;
                second_col[i].innerHTML = course_name[i].innerHTML;
                third_col[i].innerHTML = credit_hours[i].innerHTML;
                // fourth_col[i] = tick_container[i].innerHTML;
                


              
                course_number[i].parentNode.remove();
             

                
                







            }
          
    }

}





/*---------------------------------When Clicking on Submit, Select All and Deselect All (start)----------------------------- */