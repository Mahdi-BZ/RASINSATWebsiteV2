$(window).on("scroll", function () {
  var scrollTop = $(window).scrollTop();

  if (scrollTop > 90) {
    $(".site-header").addClass("scrolled");
  } else {
    $(".site-header").removeClass("scrolled");
  }
});
