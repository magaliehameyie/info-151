
var mainNav = document.querySelector("#mainNav");

var burgerBtn = document.querySelector("#burger-container button")

var canYouSeeMainNav = false;;

function showNav(){
    
    if(canYouSeeMainNav === false){
        console.log("show menu");
        
        mainNav.classList.add("showMainNav");
        canYouSeeMainNav = true;
    }else{
        console.log("hide menu");
        
        mainNav.classList.remove("showMainNav");
        canYouSeeMainNav = false;
    }
    
}

burgerBtn.addEventListener("click", showNav);