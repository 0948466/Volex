var linkcall = document.querySelector(".call-form");
var popupcall = document.querySelector(".modal-content-call");
var closecall = document.querySelector(".modal-call-close");
var overlay = document.querySelector(".modal-overlay");


linkcall.addEventListener("click", function (event) {
  event.preventDefault();
  popupcall.classList.remove("hidden");
  overlay.classList.remove("hidden");     
});

closecall.addEventListener("click", function (event) {
    event.preventDefault();
    popupcall.classList.add("hidden");
    overlay.classList.add("hidden");
});

window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
        if (!popupcall.classList.contains("hidden")) {
            popupcall.classList.add("hidden");
            overlay.classList.add("hidden");
        }
    }
});

var linkprint = document.querySelector(".print-form");
var popupprint = document.querySelector(".modal-content-print");
var closeprint = document.querySelector(".modal-print-close");
var overlay = document.querySelector(".modal-overlay");


linkprint.addEventListener("click", function (event) {
  event.preventDefault();
  popupprint.classList.remove("hidden");
  overlay.classList.remove("hidden");     
});

closeprint.addEventListener("click", function (event) {
    event.preventDefault();
    popupprint.classList.add("hidden");
    overlay.classList.add("hidden");
});

window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
        if (!popupprint.classList.contains("hidden")) {
            popupprint.classList.add("hidden");
            overlay.classList.add("hidden");
        }
    }
});