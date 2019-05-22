var navMain = document.querySelector(".page-header__wrapper");
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

var sentForm = document.querySelector(".competition-form__button");
var mistake = document.querySelector(".mistake-window");
var buttonOk = mistake.querySelector(".mistake-window__button");
var sentWindow = document.querySelector(".application-sent");
var buttonSent = sentWindow.querySelector(".application-sent__button");
var surname = document.querySelector("[name=surname]");
var name = document.querySelector("[name=name]");
var mail = document.querySelector("[name=mail]");

sentForm.addEventListener("click", function () {
  if (!surname.value || !name.value || !mail.value) {
    if (mistake.classList.contains("mistake-window")) {
      mistake.classList.remove("mistake-window");
      mistake.classList.add("mistake-window--show");
    }
  }
});

sentForm.addEventListener("click", function () {
  if (sentWindow.classList.contains("application-sent")) {
    sentWindow.classList.remove("application-sent");
    sentWindow.classList.add("application-sent--show");
  }
});

buttonOk.addEventListener("click", function () {
  mistake.classList.remove("mistake-window--show");
  mistake.classList.add("mistake-window");
});

buttonSent.addEventListener("click", function () {
  sentWindow.classList.remove("application-sent--show");
  sentWindow.classList.add("application-sent");
});