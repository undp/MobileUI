// Main
(function(window, document, $) {
  $(function() {
    // console.log('scripts here');
    //
    //if ('addEventListener' in document) {
    //  document.addEventListener('DOMContentLoaded', function() {
    //    FastClick.attach(document.body);
    //  }, false);
    //}


    //popover
    $('[data-toggle="popover"]').popover();

    //tooltip
    $('[data-toggle="tooltip"]').tooltip();
    //$('[data-toggle="tooltip"]').tooltip({trigger: 'manual'}).tooltip('show');

    //card flip
    $('[data-hover]')
      .mouseout(function() {
        $(this).removeClass('hover').css('background-image','none');
      })
      .mouseover(function() {
        var bgImg = $(this).attr('data-map');
        $(this).addClass('hover').css('background-image', 'url(' + bgImg + ')');
      });


    // for desktop in header event
    $('header .dropdown-countries').hover(function (){
      //alert('hhhh');
      var popDiv = $(this).parent().find('.smallpop');
      $(popDiv).toggleClass('hide');
    });

    // for touch device in slide menu event
    $('.off-canvas [data-pop] > a').on('click', function (){
      //alert('hhhh');
      var popDiv = $(this).parent().find('.smallpop');
      $(popDiv).toggleClass('hide');

      $('.off-canvas.open').css('overflow-y','visible');

    });

    //close countries popup button
    $('a[data-popupmenu]').on('click', function(){
      //console.log(event.target.id);
      $(this).parent('#contriesPop').addClass('hide');
      $('.off-canvas.open').removeAttr('style');
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

    //aside link list second level ul
    // $('.aside-link > li ul').addClass('sub-level').hide();

    // $('.aside-link li').on('click', function() {
    //     if ($(this).hasClass('.active')) {
    //       $(this).find('ul').hide();
    //       $(this).removeClass('active');
    //     }else {
    //       $(this).siblings().find('ul').removeClass('in');
    //       $(this).siblings().removeClass('active');
    //       $(this).addClass('active');
    //       //event.stopPropagation();
    //     }
    //     //return false;
    //
    //   });


    //btn go to top
    var offset = 250;
    var duration = 300;
    $(window).scroll(function() {
      if ($(this).scrollTop() > offset) {
        $('.btn-top').fadeIn(duration);
      } else {
        $('.btn-top').fadeOut(duration);
      }
    });


//countries popup mobile go to top btn
    $('.btn-top').click(function (e) {
      e.preventDefault();
      $(this).parent().scrollTop(0);
    });


    //global kitchen mobile slide menu
    $('.off-canvas #aside-link a').on('click',function () {
        $('#slide-menu').removeClass('open');
        $('body').removeClass('no-scroll');
    });



    //styleguide documentation convert code brackets for pre tag
    function htmlEntities(str) {
      return String(str).replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
    }
    var $snippets = $('.codesnippet');
    $.each($snippets, function (index, obj) {
      var $this = $(this);
      $this.html(htmlEntities($this.html()));
    });


    

  });
})(window, document, jQuery);
