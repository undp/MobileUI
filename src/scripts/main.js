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
      //$(popDiv).toggleClass('hide');

      if($(popDiv).hasClass('hide')){
        $(popDiv).removeClass('hide');
        $(this).find('i').addClass('icon-caret-up');
        $(this).find('i').removeClass('icon-caret-down');
      }else{
        $(popDiv).addClass('hide');
        $(this).find('i').removeClass('icon-caret-up');
        $(this).find('i').addClass('icon-caret-down');
      }
    });
    //off-canvas slide menu
    $('[data-sidemenu]').click(function() {
      var slideMenu = $('#slide-menu');
      // alert($(popDiv).hasClass('open'))
      if($(slideMenu).hasClass('open')){
        $(slideMenu).removeClass('open');
        $('body').removeClass('no-scroll');
      }else{
        $(slideMenu).addClass('open');
        $('body').addClass('no-scroll');
      }
    });

    $('[data-popupmenu]').click(function(){
      $('#contriesPop').addClass('hide');
      $('#MenuContries i').removeClass('icon-caret-up');
      $('#MenuContries i').addClass('icon-caret-down');
    });
  });
})(window, document, jQuery);
