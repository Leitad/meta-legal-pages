document.addEventListener("DOMContentLoaded", function () {
  var chars = [
    108, 101, 105, 116, 97, 100, 64, 103, 109, 97, 105, 108, 46, 99, 111, 109,
  ];
  var email = String.fromCharCode.apply(null, chars);
  var links = document.querySelectorAll("[data-email-link]");

  links.forEach(function (link) {
    link.setAttribute("href", "mailto:" + email);
    link.textContent = email;
  });
});
