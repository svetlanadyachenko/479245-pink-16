var navMain = document.querySelector(".page-header");
var navToggleClose = document.querySelector(".main-header__toggle-close");
var navToggleOpen = document.querySelector(".main-header__toggle-open");

navMain.classList.remove("modal-nojs");

navToggleClose.addEventListener("click", function(){
  if (navMain.classList.contains("modal-opened")) {
    navMain.classList.remove("modal-opened");
    navMain.classList.add("modal-closed");
  }
});

navToggleOpen.addEventListener("click", function(){
  if (navMain.classList.contains("modal-closed")) {
    navMain.classList.remove("modal-closed");
    navMain.classList.add("modal-opened");
  }
});
