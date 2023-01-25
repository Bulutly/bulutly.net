var THEMETAGS = THEMETAGS || {};
(function () {
  ("use strict");

  //preloader
  $(window).ready(function () {
    $("#preloader").fadeOut("fade");
  });

  //dropdown menu hover js
  $("ul.nav li.dropdown").hover(
    function () {
      $(this).find(".dropdown-menu").stop(true, true).delay(100).fadeIn(200);
    },
    function () {
      $(this).find(".dropdown-menu").stop(true, true).delay(100).fadeOut(200);
    }
  );

  //hd accordion
  $(".hd-accordion .accordion-header a").each(function () {
    $(this).on("click", function () {
      $(this)
        .parents(".hd-accordion")
        .find(".accordion-item.active")
        .removeClass("active");
      $(this).parents(".accordion-item").addClass("active");
    });
  });

  /*   THEMETAGS.initialize = {
    init: function () {
      THEMETAGS.initialize.general();
    },
    general: function () {
      // Mouse Move Parallax Element
      var $scene = $(".parallax-element").parallax({
        scalarX: 100,
        scalarY: 100,
      });
    },
  };
  THEMETAGS.documentOnReady = {
    init: function () {
      THEMETAGS.initialize.init();
    },
  };
  $(document).ready(THEMETAGS.documentOnReady.init);
  $(function () {
    $('[data-bs-toggle="tooltip"]').tooltip();
  }); */

  //magnific popup js
  $(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
    disableOn: 700,
    type: "iframe",
    mainClass: "mfp-fade",
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false,
  });
  $(".popup-with-form").magnificPopup({
    type: "inline",
    preloader: false,
    focus: "#name",
  });
  /*   $(window).on("load", function () {
    $(".masonry_grid").masonry({
      itemSelector: ".grid_item",
      columnWidth: 1,
    });
  }); */
})();
