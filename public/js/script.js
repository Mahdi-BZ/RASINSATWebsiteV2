$(window).on("scroll", function () {
  var scrollTop = $(window).scrollTop();

  if (scrollTop > 90) {
    $(".site-header").addClass("scrolled");
    $(".responsive-nav").addClass("scrolled");
    $(".carousel-inner").addClass("scrolled");
  } else {
    $(".site-header").removeClass("scrolled");
    $(".responsive-nav").removeClass("scrolled");
    $(".carousel-inner").removeClass("scrolled");
  }
});

$(() => {
  $(".button.icon").on("click", () => {
    $(".responsive-nav").toggleClass("active");
  });

  $(".responsive-nav a").on("click", () => {
    $(".responsive-nav").removeClass("active");
  });

  var activatedbutton = $(".community-button:first");

  $(".community-button").on("click", (e) => {
    if ($(e.target).is(activatedbutton)) return;

    activatedbutton.removeClass("community-button-active");
    $(e.target).addClass("community-button-active");
    activatedbutton = $(e.target);
  });
});
