var contact = document.querySelector(".contact-me-button");

contact.addEventListener("click", function() {
    document.body.classList.add("modal-opened");
}, false);

var close = document.querySelector(".close-button");

close.addEventListener("click", function() {
    document.body.classList.remove("modal-opened");
}, false)