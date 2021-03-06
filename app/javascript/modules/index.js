require('slick-carousel');
require('pagepiling.js');

module.exports = {

  init: function(){
    this.carousel();
    this.nav_handler();
    this.piling();
    this.blotterjs();
  },

  carousel: function(){

    $('.slider-for').slick({
     slidesToShow: 1,
     slidesToScroll: 1,
     arrows: false,
     fade: true,
     asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
       slidesToShow: 1,
       slidesToScroll: 1,
       asNavFor: '.slider-for',
       dots: false,
       variableWidth: false,
       prevArrow:'<button class="slick-prev slick-arrow text__lighter--orange text--bordered" aria-label="Previous" type="button" style="">Prev</button>',
       nextArrow:'<button class="slick-next slick-arrow text__lighter--orange text--bordered" aria-label="Next" type="button" style="">Next</button>'

    });

    $('.slider-for-personal').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.slider-nav-personal'
     });
     $('.slider-nav-personal').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.slider-for-personal',
        dots: false,
        variableWidth: false,
        prevArrow:'<button class="slick-prev slick-arrow text__lighter--orange text--bordered" aria-label="Previous" type="button" style="">Prev</button>',
        nextArrow:'<button class="slick-next slick-arrow text__lighter--orange text--bordered" aria-label="Next" type="button" style="">Next</button>'
 
     });
  },

  nav_handler: function(){
    var menuNavItem = $('.b-section__nav');
    var nav_item = $('[data-go]');
    var container = $('[data-content]');

    nav_item.on("click", function(){
      if(!$(this).hasClass("is--active")){
        nav_item.removeClass("is--active");
        $(this).addClass('is--active');
        var curr_value = $(this).attr("data-go");
        $('[data-content]').removeClass("is--active");
        $('[data-content='+curr_value+']').addClass("is--active");
      }
    })
  },
  piling: function(){
    $('#pagepiling').pagepiling({
      menu: null,
      direction: 'horizontal',
      verticalCentered: true,
      sectionsColor: ["#f9f9f9","#f9f9f9","#f9f9f9","#f9f9f9","#f9f9f9"],
      anchors: ['home', 'menu', 'about', 'works'],
      scrollingSpeed: 400,
      easing: 'swing',
      loopBottom: false,
      loopTop: false,
      css3: true,
      navigation: false,
      normalScrollElements: '.slider__item',
      normalScrollElementTouchThreshold: 5,
      touchSensitivity: 5,
      keyboardScrolling: true,
      sectionSelector: '.section',
      animateAnchor: true,

      onLeave: function(index, nextIndex, direction){},
      afterLoad: function(anchorLink, index){
        var hash = "#"+anchorLink;
        var allNavItems = $('.b-section__nav--item').find("a");
        var navItem = $('.b-section__nav--item').find("a[href='"+hash+"']");
        allNavItems.removeClass('is--active');
        navItem.addClass('is--active');
      },
      afterRender: function(){}
    });
  },
  blotterjs: function(){
    var text = new Blotter.Text("uras", {
      family : "'Nimbus', sans-serif",
      size : 290,
      fill : "#171717",
      style : 'italic',
      weight : 900,
      paddingRight: 100,
      paddingLeft: 100
    });

    var container = $(".l-section__welcome--container.container");

    var material = new Blotter.ChannelSplitMaterial();
    var blotter = new Blotter(material, { texts : text });

    function _event() {
      $(document).mousemove(function(event){
        _handleMousemove(event);
      });
    }

    function tang(a, b, c, d) {
        var e = 180 * Math.atan2(d - b, c - a) / Math.PI;
        return e = 180 + e
    }

    function raiz(a, b, c, d) {
        var e = a - c
          , f = b - d;
        return Math.sqrt(e * e + f * f)
    }

    function _setInitialCenter(el){
        var a = $(document).width(),
            b = $(document).height(),
            c = el.width(),
            d = el.height();
        var examplePosition = el.offset();
        _handleNewCenter((examplePosition.left + c / 2) / a, (examplePosition.top + d / 2) / b);
    }

    function _handleNewCenter(c, d) {
        var e = $(document).width()
          , f = $(document).height();

          var h = container
            , i = h.offset()
            , j = (i.left + h.width() / 2) / e
            , k = (i.top + h.height() / 2) / f
            , l = tang(j, k, c, d)
            , m = Math.min(.2, raiz(j, k, c, d));

          material.uniforms.uRotation.value = l;
          material.uniforms.uOffset.value = m;
    }

    function _handleMousemove(a) {
        var domWidth = $(document).width()
          , domHeight = $(document).height()
          , d = a.pageX / domWidth
          , e = a.pageY / domHeight;
        _handleNewCenter(d, e)
    }
    // blotter.on("ready", function(e){
    //   var textID = this._texts[0].id;
    //   var canvasClass = this._scopes[textID].domElement.className;
    //   var $el = $('.'+canvasClass+'');
    //   _setInitialCenter($el[0]);
    // })
    var scope = blotter.forText(text);
    scope.appendTo(container);
    _event();
  }
}
