// Sign up modal script

var signUpModal = document.querySelector(".sign-up-modal");
var signUpTrigger = document.querySelector(".sign-up-trigger");
var signUpCloseButton = document.querySelector(".sign-up-close-button");

function toggleSignUpModal() {
    signUpModal.classList.toggle("sign-up-show-modal");
}

function windowOnClickSignUp(event) {
    if (event.target === signUpModal) {
        toggleSignUpModal();
    }
}

signUpTrigger.addEventListener("click", toggleSignUpModal);
signUpCloseButton.addEventListener("click", toggleSignUpModal);
window.addEventListener("click", windowOnClickSignUp);




// Sign in modal script

var signInModal = document.querySelector(".sign-in-modal");
var signInTrigger = document.querySelector(".sign-in-trigger");
var signInCloseButton = document.querySelector(".sign-in-close-button");

function toggleSignInModal() {
    signInModal.classList.toggle("sign-in-show-modal");
}

function windowOnClickSignIn(event) {
    if (event.target === signInModal) {
        toggleSignInModal();
    }
}


signInTrigger.addEventListener("click", toggleSignInModal);
signInCloseButton.addEventListener("click", toggleSignInModal);
window.addEventListener("click", windowOnClickSignIn);




// Post event modal script

var postModal = document.querySelector(".post-modal");
var postTrigger = document.querySelector(".post-trigger");
var postCloseButton = document.querySelector(".post-close-button");

function togglePostModal() {
    postModal.classList.toggle("post-show-modal");
}

function windowOnClickPost(event) {
    if (event.target === postModal) {
        togglePostModal();
    }
}

postTrigger.addEventListener("click", togglePostModal);
postCloseButton.addEventListener("click", togglePostModal);
window.addEventListener("click", windowOnClickPost);