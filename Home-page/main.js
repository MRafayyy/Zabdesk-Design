
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
    patty2.classList.toggle("turn2")
    patty3.classList.toggle("turn3")
    
    
    let side_menu = document.getElementsByClassName("side-menu")[0];
    
    side_menu.classList.toggle("side-menu-open")
}


/*----------------------------------------------When Clicking on Hamburger (end)------------------------------------------ */


/*----------------------------------------------When Clicking for DropDown Menu (start)------------------------------------------ */
let a = document.getElementsByClassName("side-menu-li");

let c = document.getElementsByClassName("DropDownMenus");

for(let i=0;i<a.length;i++){
    
    
    a[i].onclick = ()=>{
        c[i].classList.toggle("hello");
    }
}
/*----------------------------------------------When Clicking for DropDown Menu (end)------------------------------------------ */