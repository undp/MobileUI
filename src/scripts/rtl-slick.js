/**
 * Created by sachink on 06/06/16.
 */

(function(window, document, $) {
  $(function () {

    //rtl scrollable tabs
    $('html[dir="rtl"] .slick-tabs').slick({
      rtl: true,
      slidesToShow: 4,
      infinite: false,
      swipeToSlide: true,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 4
          }
        },
        {
          breakpoint: 667,
          settings: {
            slidesToShow: 3
          }
        }
        // ,
        // {
        //   breakpoint: 568,
        //   settings: {
        //     slidesToShow: 3
        //   }
        // }
      ]
    });


  })
})(window, document, jQuery);


