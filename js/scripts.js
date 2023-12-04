var mainNav = document.querySelector("#main-nav");
var signInUpButtons = document.querySelector("#sign-in-up-buttons");
var burgerBtn = document.querySelector("#burger-container button");

var burgerBars = document.querySelector("#burger-bars");
var burgerX = document.querySelector("#burger-x");



var canYouSeeMainNav = false;

function showNav(){
    
    if(canYouSeeMainNav === false){
        console.log("show menu");
        
        mainNav.classList.add("showMainNav");

        signInUpButtons.classList.add("showSignUp");
        canYouSeeMainNav = true;

        
        burgerBars.classList.add("hide-burger-bars");

        
        burgerX.classList.remove("hide-burger-x");

    }else{
        console.log("hide menu");
       
        mainNav.classList.remove("showMainNav");

        signInUpButtons.classList.remove("showSignUp");

        
        burgerBars.classList.remove("hide-burger-bars");

        
        burgerX.classList.add("hide-burger-x");

        canYouSeeMainNav = false;
    }
    
}


burgerBtn.addEventListener("click", showNav);



/* --------------------

    Sign UP
 -------------------- */  

 var signUpBtn = document.querySelector("#sign-up-btn");
 var signUpContainer = document.querySelector("#sign-up-container");
 var closeSignUpModalBtn = document.querySelector("#close-sign-up-modal-btn");


 function showSignUpModal() {
    // console.log("show modal now");
    signUpContainer.classList.add("show-signUp-container");
    // hide the navigation on close
    mainNav.classList.remove("showMainNav");
    // hide the signup/in buttons
    signInUpButtons.classList.remove("showSignUp");
 }

 function hideSignUpModal(){
    signUpContainer.classList.remove("show-signUp-container");
    
 }

 signUpBtn.addEventListener("click", showSignUpModal);
 closeSignUpModalBtn.addEventListener("click", hideSignUpModal);
 signUpContainer.addEventListener("click", hideSignUpModal);