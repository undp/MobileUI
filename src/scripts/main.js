// Main
(function(window, document, $) {
  $(function() {
    // console.log('scripts here');

    $('[data-hover]')
      .mouseout(function() {
        $(this).removeClass('hover').css('background-image','none');
      })
      .mouseover(function() {
        var bgImg = $(this).attr('data-map');
        $(this).addClass('hover').css('background-image', 'url(' + bgImg + ')');
      });
    //data-pop
    $('[data-pop]').click(function() {
      var popDiv = $(this).attr('data-target');
      $(popDiv).toggleClass('hide');
    });

  });
})(window, document, jQuery);
