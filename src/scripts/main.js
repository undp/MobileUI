// Main
(function(window, document, $) {
  $(function() {
    console.log('scripts here')
    $('[data-hover]')
      .mouseout(function() {
        $(this).removeClass('hover').css('background-image','none');
      })
      .mouseover(function() {
        var bgImg = $(this).attr('data-map');
        $(this).addClass('hover').css('background-image', 'url(' + bgImg + ')');
      });


  });
})(window, document, jQuery);
