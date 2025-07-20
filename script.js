document.querySelector("form").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Merci ! Votre message a été envoyé.");
  this.reset();
});
