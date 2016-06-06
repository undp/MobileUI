/**
 * Created by sachink on 06/06/16.
 */

(function(window, document, $) {
  $(function () {

//scrollable tabs
    $('.slick-tabs').slick({
      //setting-name: setting-value
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
        },
        {
          breakpoint: 568,
          settings: {
            slidesToShow: 2
          }
        }
      ]
    });
    

  })
})(window, document, jQuery);


