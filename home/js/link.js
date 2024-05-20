let bodyScrollBar = Scrollbar.init(document.querySelector("#main"), {
  damping: 0.07,
});

$(".restaurant-link").on("click", function () {
  bodyScrollBar.scrollTo(
    0,
    document.querySelector("#restaurants").offsetTop,
    2000
  );
});

$(".gallery-link").on("click", function () {
  bodyScrollBar.scrollTo(0, document.querySelector("#gallery").offsetTop, 2000);
});

$(".room-link").on("click", function () {
  $(".hamburger-menu").click();
  bodyScrollBar.scrollTo(0, document.querySelector("#rooms").offsetTop, 2000);
});

$(".location-link").on("click", function () {
  $(".hamburger-menu").click();
  bodyScrollBar.scrollTo(
    0,
    document.querySelector("#location").offsetTop,
    2000
  );
});

$(".discover-link").on("click", function () {
  $(".hamburger-menu").click();
  bodyScrollBar.scrollTo(
    0,
    document.querySelector("#discover").offsetTop,
    2000
  );
});

$(".contact-link").on("click", function () {
  $(".hamburger-menu").click();
  bodyScrollBar.scrollTo(0, document.querySelector("#contact").offsetTop, 2000);
});

$(".activity-link").on("click", function () {
  $(".hamburger-menu").click();
  bodyScrollBar.scrollTo(
    0,
    document.querySelector("#activity").offsetTop,
    2000
  );
});
