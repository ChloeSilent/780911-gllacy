
var modallink = document.querySelector(".adress-button");
var modal = document.querySelector(".modal-overlay");
var modalSection = document.querySelector(".modal-feedback");
var close = modal.querySelector(".modal-close");
var modalForm = modal.querySelector("form");
var siteBody = document.querySelector("body");

modallink.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.add("modal-show");
  modalName.focus();
  siteBody.classList.add(".scroll-hidden")
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.remove("modal-show");
  siteBody.classList.remove(".scroll-hidden");
});



window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (modal.classList.contains("modal-show")) {
      modal.classList.remove("modal-show");
      body.classList.remove(".scroll-hidden");
    }
  }
});

