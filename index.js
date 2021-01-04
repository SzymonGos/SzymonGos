const $backToTop = $('.home-link');

$backToTop.on("click", () => {
    $("html, body").animate({ scrollTop: 0 }, 1200);
    return false;
  });