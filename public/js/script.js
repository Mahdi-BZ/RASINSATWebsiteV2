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

  $("img.hidden").each((i, el) => {
    if (isInViewport(el)) {
      const anim = el.getAttribute("data-anim");
      el.classList.remove("hidden");
      el.classList.add(anim);
    }
  });
});

function isInViewport(element) {
  const rect = element.getBoundingClientRect();

  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom - rect.height / 2 <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

$(() => {
  $(".button.icon").on("click", () => {
    $(".responsive-nav").toggleClass("active");
  });

  $(".responsive-nav a").on("click", () => {
    $(".responsive-nav").removeClass("active");
  });

  var activatedbutton = $(".community-button:first");

  $(".community-button").on("click", (e) => {
    if (!$(e.target).is(activatedbutton)) {
      activatedbutton.removeClass("community-button-active");
      $(e.target).addClass("community-button-active");
      activatedbutton = $(e.target);
    }
  });
});
