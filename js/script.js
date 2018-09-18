
var modallink = document.querySelector(".adress-button");
var modal = document.querySelector(".modal-overlay");
var modalSection = document.querySelector(".modal-feedback");
var close = modal.querySelector(".modal-close");
var modalForm = modal.querySelector("form");
var modalSection = modal.querySelector(".modal-feedback")
var modalName = modal.querySelector("[name=callback-name]");
var modalMail = modal.querySelector("[name=callback-mail]");
var modalComment = modal.querySelector("[name=comment]");
var siteBody = document.querySelector("body");

modallink.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.add("modal-show");
  modalName.focus();
  siteBody.classList.add(".scroll-hidden");
  modalSection.classList.add("modal-bounce");
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.remove("modal-show");
  modalSection.classList.remove("modal-bounce");
  siteBody.classList.remove(".scroll-hidden");
});

modalForm.addEventListener("submit", function (evt) {
  if (!modalName.value || !modalMail.value || !modalComment.value) {
    evt.preventDefault();
    modalSection.classList.remove("modal-error");
    modalSection.offsetWidth = modalSection.offsetWidth;
    modalSection.classList.add("modal-error");

  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (modal.classList.contains("modal-show")) {
      modal.classList.remove("modal-show");
      modalSection.classList.remove("modal-bounce");
      body.classList.remove(".scroll-hidden");
    }
  }
});

