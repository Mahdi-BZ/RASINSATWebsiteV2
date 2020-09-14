$(window).on("scroll", function () {
  var scrollTop = $(window).scrollTop();

  if (scrollTop > 90) {
    $(".site-header").addClass("scrolled");
    $(".responsive-nav").addClass("scrolled");
  } else {
    $(".site-header").removeClass("scrolled");
    $(".responsive-nav").removeClass("scrolled");
  }
});

//.sidebar("attach events", ".toggle.button")

function test(e) {
  return (
    !$(e.target).parent().hasClass("responsive-nav") &&
    !$(e.target).hasClass("responsive-nav") &&
    !$(e.target).parent().hasClass("toggle") &&
    !$(e.target).hasClass("toggle")
  );
}

$(() => {
  $(".button.icon").on("click", (e) => {
    $(".responsive-nav").toggleClass("active");
  });
  $("body").on("click", (e) => {
    if (test(e) && $(".responsive-nav").hasClass("active")) {
      $(".responsive-nav").removeClass("active");
    }
  });
});
