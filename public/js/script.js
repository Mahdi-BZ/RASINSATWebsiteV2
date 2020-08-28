$(window).on("scroll", function () {
  var scrollTop = $(window).scrollTop();

  if (scrollTop > 90) {
    console.log("yi");
    $(".site-header").addClass("scrolled");
  } else {
    $(".site-header").removeClass("scrolled");
  }
});
