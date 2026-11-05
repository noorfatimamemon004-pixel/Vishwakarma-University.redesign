/* ===== Student Works page ===== */
document.addEventListener("DOMContentLoaded", function () {

  /* Tap to reveal colour on touch screens.
     On a laptop the colour appears on hover (CSS only).
     On phones there is no hover, so a tap shows or hides it. */
  var cards = document.querySelectorAll(".work-card");
  var isTouch = window.matchMedia("(hover: none)").matches;

  if (isTouch) {
    cards.forEach(function (card) {
      card.addEventListener("click", function () {
        var wasOpen = card.classList.contains("show");
        cards.forEach(function (c) { c.classList.remove("show"); });
        if (!wasOpen) { card.classList.add("show"); }
      });
    });
  }
});