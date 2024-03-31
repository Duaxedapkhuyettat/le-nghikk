$(document).on("scroll", function() {
    var pageTop = $(document).scrollTop();
    var pageBottom = pageTop + $(window).height();
    var scrolls = $(".scroll");
  
    for (var i = 0; i < scrolls.length; i++) {
      var scroll = scrolls[i];
  
      if ($(scroll).position().top < pageBottom) {
        $(scroll).addClass("visible");
      } else {
        $(scroll).removeClass("visible");
      }
    }
  }
  );
  window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");
  
    loader.classList.add("loader--hidden");
  
    loader.addEventListener("transitionend", () => {
      document.body.removeChild(loader);
    });
  });
  