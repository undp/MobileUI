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
    $('[data-pop]').on('mouseover',function(e) {
      // console.log('click', e.type);
      var popDiv = $(this).attr('data-target');
      $(popDiv).removeClass('hide');
      $(this).addClass('hover');
    });

    $('[data-pop]').on('mouseout',function(e) {
      var popDiv = $(this).attr('data-target');
      $(popDiv).addClass('hide');
      $(this).removeClass('hover');
    });

    $('[data-pop]').on('click',function(e) {
      var popDiv = $(this).attr('data-target');
      $(popDiv).toggleClass('hide');
      $(this).toggleClass('hover');
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

    // Dropdown funding
    $('.list-top-nav li.dropdown').hover(function() {
      $(this).find('.dropdown-funding').stop(true, true).fadeIn(100);
    }, function() {
      $(this).find('.dropdown-funding').stop(true, true).fadeOut(100);
    });

  });
})(window, document, jQuery);
