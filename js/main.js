$(function () {
  $(window).scroll(function () {
    $(".fade-in").each(function () {
      const elemPos = $(this).offset().top;
      const scroll = $(window).scrollTop();
      const windowHeight = $(window).height();
      if (scroll > elemPos - windowHeight) {
        $(this).addClass("scroll-in");
      }
    });
  });
  JQuery(window).scroll();
});
