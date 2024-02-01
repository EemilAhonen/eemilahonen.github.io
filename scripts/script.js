window.addEventListener("scroll", function () {
  var scrollValue = window.scrollY;
  var scaleValue = Math.max(1.0, 1.5 - scrollValue / 1000);
  document.querySelector(".hero-image").style.transform =
    "scale(" + scaleValue + ")";
});
