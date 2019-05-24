var navMain = document.querySelector(".page-header");
var navToggle = document.querySelector(".main-header__toggle");
navMain.classList.remove("modal-nojs");
navToggle.addEventListener("click", function(){
  if (navMain.classList.contains("modal-closed")) {
    navMain.classList.remove("modal-closed");
    navMain.classList.add("modal-opened");
  } else {
    navMain.classList.remove("modal-opened");
    navMain.classList.add("modal-closed");
  }
});
