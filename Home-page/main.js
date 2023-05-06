
let side_menu_li = document.getElementsByClassName("side-menu-li");

let DropDownMenuClassInsideLi = document.getElementsByClassName("DropDownMenus");

 /*----------------------------------------------When Clicking on Hamburger (start)------------------------------------------ */
 
 const change = ()=>{
    let hamburger = document.getElementsByClassName("hamburger")[0];
    console.log(hamburger);
    let patty1 = document.querySelectorAll('.patty')[0];
    console.log(patty1);
    let patty2 = document.querySelectorAll('.patty')[1];
    console.log(patty2);
    let patty3 = document.querySelectorAll('.patty')[2];
    console.log(patty3);
    
    
    for(let i=0;i<3;i++){
        document.querySelectorAll(".patty")[i].classList.toggle("change_color");
    }
    
    
    // let ok = hamburger[0].patty1;
    patty1.classList.toggle("turn1");
    patty2.classList.toggle("turn2");
    patty3.classList.toggle("turn3");
    
    
    let side_menu = document.getElementsByClassName("side-menu")[0];
    
    side_menu.classList.toggle("side-menu-open")

    if(!side_menu.classList.contains("side-menu-open")){
        for(let i=0;i<side_menu_li.length;i++){
            DropDownMenuClassInsideLi[i].classList.remove(`hello_${i}`);
        }
    }
}


/*----------------------------------------------When Clicking on Hamburger (end)------------------------------------------ */


/*----------------------------------------------When Clicking for DropDown Menu (start)------------------------------------------ */


// let a = document.getElementsByClassName("side-menu-li");

// let c = document.getElementsByClassName("DropDownMenus");

for(let i=0;i<side_menu_li.length;i++){
    
    
    side_menu_li[i].onclick = ()=>{
        DropDownMenuClassInsideLi[i].classList.toggle(`hello_${i}`);
        // DropDownMenuClassInsideLi[i].classList.toggle("hello");
        for(let j=0;j<side_menu_li.length;j++){
            if(DropDownMenuClassInsideLi[j]!=DropDownMenuClassInsideLi[i]){
                DropDownMenuClassInsideLi[j].classList.remove(`hello_${j}`);
                // DropDownMenuClassInsideLi[j].classList.remove("hello");
            }
        }
    }
}
/*----------------------------------------------When Clicking for DropDown Menu (end)------------------------------------------ */