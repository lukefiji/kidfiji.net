$(document).ready( function() {
  
  // init niceScroll
  $('html').niceScroll({
    scrollspeed: 50,
    mousescrollstep: 40
  });
  
  // init Isotope
  var $grid = $('.portfolio-grid').isotope({
    itemSelector: '.portfolio-item',
    percentPosition: true,
    masonry: {
      columnWidth: '.portfolio-sizer'
    }
  });
  
  // layout Isotope after each image loads
  $grid.imagesLoaded().progress( function() {
    $grid.isotope('layout');
  });  
  
  // Smooth scrolling
  $(function() {
    $("a[href*='#']:not([href='#'])").click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  });
  
  // My menu stuff
  $('.filter').on('click', 'a', function(event) {
    event.preventDefault();
    $(this).parent().siblings().children().removeClass('active');
    $(this).addClass('active');
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
  });
  
});