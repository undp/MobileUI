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

    //if ('ontouchstart' in document.documentElement) {
    //  console.log('device');
      $('[data-pop]').on('click touchstart',function(e) {
        var popDiv = $(this).find('.smallpop');
        if(e.type == 'touchstart'){
          window.touchenabled = true;
          console.log('click', e.type);
          if($(popDiv).hasClass('hide')){
            $(popDiv).removeClass('hide');
            $(this).addClass('hover');
          }else{
            $(popDiv).addClass('hide');
            $(this).removeClass('hover');
          }
        }
        if(e.type == 'click'){
          if(window.touchenabled == true){
            return true;
          }
          $(popDiv).toggleClass('hide');
          $(this).toggleClass('hover');
          console.log($(popDiv).className);
        }

      });
    //}else{
    //  console.log('desktop');
      //data-pop
      $('[data-pop]').on('mouseover',function(e) {
        if(window.touchenabled == true){
          return true;
        }
        console.log('mouseover', e.type);
        var popDiv = $(this).find('.smallpop');
        $(popDiv).removeClass('hide');
        $(this).addClass('hover');
      });

      $('[data-pop]').on('mouseout',function(e) {
        if(window.touchenabled == true){
          return true;
        }
        console.log('mouseout');
        var popDiv = $(this).find('.smallpop');
        $(popDiv).addClass('hide');
        $(this).removeClass('hover');
      });
    //}


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

    //data-popfunding
    $('[data-popfunding]').on('click touchstart',function(e) {
      var popDiv = $(this).find('.funding-popup');
      if(e.type == 'touchstart'){
        window.touchenabled = true;
        console.log('click', e.type);
        if($(popDiv).hasClass('hide')){
          $(popDiv).removeClass('hide');
          $(this).addClass('hover');
        }else{
          $(popDiv).addClass('hide');
          $(this).removeClass('hover');
        }
      }
      if(e.type == 'click'){
        if(window.touchenabled == true){
          return true;
        }
        $(popDiv).toggleClass('hide');
        $(this).toggleClass('hover');
        console.log($(popDiv).className);
      }
    });

    $('[data-popfunding]').on('mouseover',function(e) {
      if(window.touchenabled == true){
        return true;
      }
      console.log('mouseover', e.type);
      var popDiv = $(this).find('.funding-popup');
      $(popDiv).removeClass('hide');
      $(this).addClass('hover');
    });

    $('[data-popfunding]').on('mouseout',function(e) {
      if(window.touchenabled == true){
        return true;
      }
      console.log('mouseout');
      var popDiv = $(this).find('.funding-popup');
      $(popDiv).addClass('hide');
      $(this).removeClass('hover');
    });

    $('[data-popupmenu]').click(function(){
      $('#contriesPop').addClass('hide');
    });

  });
})(window, document, jQuery);
