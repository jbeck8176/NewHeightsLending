/**
*
* -----------------------------------------------------------------------------
*
* Template : bStart - Business and Corporate Agency HTML Template
* Author : rs-theme
* Author URI : http://www.rstheme.com/
*
* -----------------------------------------------------------------------------
*
**/

(function($) {
	"use strict";   
	// Add "loaded" class when a section has been loaded
	$(window).scroll(function() { 
		var scrollTop = $(window).scrollTop();
		$("section").each(function() {
		var elementTop = $(this).offset().top - $('#rs-header').outerHeight();
			if(scrollTop >= elementTop) {
				$(this).addClass('loaded');
			}
		});
	});

	// One Page Navigation Setup
	$('.navbar-collapse ul').singlePageNav({
		offset: $('.menu-sticky').outerHeight(),
		filter: ':not(.external)',
		speed: 750,
		//currentClass: 'active',

		beforeStart: function() {
		},
		onComplete: function() {
		}
	});

	// Sticky Navbar Affix
	var isMobile = window.matchMedia("only screen and (min-width: 992px)");
	if (isMobile.matches) {
		$('.menu-sticky').affix({
			offset: {
				top: $('#rs-header, #default-header, #rs-header3').outerHeight(),
			}
		});
	}
     
    //window load
	$(window).on( 'load', function() {
		//rs menu
		if($(window).width() < 992) {
		  $('.rs-menu').css('height', '0');
		  $('.rs-menu').css('opacity', '0');
		  $('.rs-menu-toggle').on( 'click', function(){
			 $('.rs-menu').css('opacity', '1');
		 });
		}
	})
    
    // slider owl
    jQuery("#index-3-customer").owlCarousel({
        nav: false,
        items : 3,
        itemsTabletSmall: false,
        singleItem : false,
        slideSpeed : 200,
        paginationSpeed : 5000,
        rewindSpeed : 1000,
        autoPlay : true,
        stopOnHover : false,
        pagination : true,
        responsive:{
            0:{
                items:1
            },
            768:{
                items:2
            },
            991:{
                items:3
            },
            1199:{
                items:3
            }
        }
    })

    // collapse hidden
    $(function(){ 
         var navMain = $(".navbar-collapse");
         navMain.on("click", "a:not([data-toggle])", null, function () {
             navMain.collapse('hide');
         });
     });

    // Skill bar            
    $('.skillbar').skillBars({  
        from: 0,    
        speed: 4000,    
        interval: 100,  
        decimals: 0,    
    });
	
	//Feature Left
	$('#feature-left').owlCarousel({
		animateIn: 'fadeIn',
		animateOut: 'fadeOut',
		items: 1,
		mouseDrag: false,
		dotsContainer: '#item-thumb',
	});

    // slider init 
    $('#nivoSlider').nivoSlider({
        effect: 'random',
        slices: 15,
        boxCols: 8,
        boxRows: 4,
        animSpeed: 600,
        pauseTime: 500000,
        startSlide: 0,
        directionNav: true,
        controlNavThumbs: false,
        pauseOnHover: true,
        manualAdvance: false
    });

    // video 
    if ($('.player').length) {
        $(".player").YTPlayer();
    }

    // wow init
    new WOW().init();
    
    // image loaded portfolio init
    $('.grid').imagesLoaded(function() {
        $('.portfolio-filter').on('click', 'button', function() {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({
                filter: filterValue
            });
        });
        var $grid = $('.grid').isotope({
            itemSelector: '.grid-item',
            percentPosition: true,
            masonry: {
                columnWidth: '.grid-item',
            }
        });
    });        
        
    // portfolio Filter
    $('.portfolio-filter button').on('click', function(event) {
        $(this).siblings('.active').removeClass('active');
        $(this).addClass('active');
        event.preventDefault();
    });

    // Menu active
    $('.nav-menu li').on('click', function(event) {
        $(this).siblings('.active').removeClass('active');
        $(this).addClass('active');
    });

    // Smooth Scroll


    $(".onepage .nav-menu").on('click', 'a', function(e){
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top - 20
        }, 1000);
        e.preventDefault();
    });

    // magnificPopup init
    $('.image-popup').magnificPopup({
        type: 'image',
        callbacks: {
            beforeOpen: function() {
               this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure animated zoomInDown');
            }
        },
        gallery: {
            enabled: true
        }
    });
    
	//Testimonial Slider
	$(".rs-tst-slider").slick({
		dots: false,
		infinite: true,
		centerMode: true,
		centerPadding: '0',
		slidesToShow: 5,
		slidesToScroll: 1,
		variableWidth: true
	});

    // Get a quote popup

    $('.popup-quote').magnificPopup({
        type: 'inline',
        preloader: false,
        focus: '#qname',
        removalDelay: 500,
        callbacks: {
            beforeOpen: function() {
                this.st.mainClass = this.st.el.attr('data-effect');
                if($(window).width() < 700) {
                    this.st.focus = false;
                } else {
                    this.st.focus = '#qname';
                }
            }
        }
    });
    
    /*-------------------------------------
    OwlCarousel
    -------------------------------------*/
	$('.rs-carousel').each(function() {
		var owlCarousel = $(this),
		loop = owlCarousel.data('loop'),
		items = owlCarousel.data('items'),
		margin = owlCarousel.data('margin'),
		stagePadding = owlCarousel.data('stage-padding'),
		autoplay = owlCarousel.data('autoplay'),
		autoplayTimeout = owlCarousel.data('autoplay-timeout'),
		smartSpeed = owlCarousel.data('smart-speed'),
		dots = owlCarousel.data('dots'),
		nav = owlCarousel.data('nav'),
		navSpeed = owlCarousel.data('nav-speed'),
		xsDevice = owlCarousel.data('mobile-device'),
		xsDeviceNav = owlCarousel.data('mobile-device-nav'),
		xsDeviceDots = owlCarousel.data('mobile-device-dots'),
		smDevice = owlCarousel.data('ipad-device'),
		smDeviceNav = owlCarousel.data('ipad-device-nav'),
		smDeviceDots = owlCarousel.data('ipad-device-dots'),
		smDevice2 = owlCarousel.data('ipad-device2'),
		smDeviceNav2 = owlCarousel.data('ipad-device-nav2'),
		smDeviceDots2 = owlCarousel.data('ipad-device-dots2'),
		mdDevice = owlCarousel.data('md-device'),
		mdDeviceNav = owlCarousel.data('md-device-nav'),
		mdDeviceDots = owlCarousel.data('md-device-dots');
		owlCarousel.owlCarousel({
			loop: (loop ? true : false),
			items: (items ? items : 4),
			lazyLoad: true,
			margin: (margin ? margin : 0),
			//stagePadding: (stagePadding ? stagePadding : 0),
			autoplay: (autoplay ? true : false),
			autoplayTimeout: (autoplayTimeout ? autoplayTimeout : 1000),
			smartSpeed: (smartSpeed ? smartSpeed : 250),
			dots: (dots ? true : false),
			nav: (nav ? true : false),
			navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
			navSpeed: (navSpeed ? true : false),
			responsiveClass: true,
			responsive: {
				0: {
					items: (xsDevice ? xsDevice : 1),
					nav: (xsDeviceNav ? true : false),
					dots: (xsDeviceDots ? true : false)
				},
				480: {
					items: (smDevice2 ? smDevice : 2),
					nav: (smDeviceNav2 ? true : false),
					dots: (smDeviceDots2 ? true : false)
				},
				768: {
					items: (smDevice ? smDevice : 3),
					nav: (smDeviceNav ? true : false),
					dots: (smDeviceDots ? true : false)
				},
				992: {
					items: (mdDevice ? mdDevice : 4),
					nav: (mdDeviceNav ? true : false),
					dots: (mdDeviceDots ? true : false)
				}
			}
		});

	});

    // team init
    $(".team-carousel").owlCarousel({
        margin:30,
        nav:true,
        loop:true,
        items:3,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause:true,
        responsiveClass:true,
        dots:false,
        responsive:{
            0:{
                items:1
            },
            650:{
                items:2
            },
            1200:{
                items:3
            }
        }
    });

    // customer init
    $(".customer-carousel").owlCarousel({
        margin:30,
        nav:true,
        dots: false,
        loop:true,
        items:3,
        pagination:false,
        paginationNumbers:false,
        // speed controller.
        paginationSpeed : 4000,
        slideSpeed : 5000,
        rewindSpeed : 5000,
        
        // auto play.
        autoplay: true,
        autoplayTimeout:6000,
        autoplayHoverPause:true,

        // responsive.
        responsiveClass:true,
        responsive:{
            0:{
                items:1
            },
            650:{
                items:2
            },
            1200:{
                items:3
            }
        }
    });
    
	
    //Videos popup jQuery activation code
    $('.popup-videos').magnificPopup({
        disableOn: 10,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    }); 
   

    // testimonial init
    $('.testi-carousel').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 7000,
    });

    // blog init
    $(".blog-carousel").owlCarousel({
        margin:30,
        nav:true,
        loop:true,
        items:3,
        autoplay:true,
        autoplayTimeout: 6000,
        autoplayHoverPause:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1
            },
            650:{
                items:2
            },
            1200:{
                items:3
            }
        }
    });

    // partner init
    $(".partner-carousel").owlCarousel({
        margin:30,
        loop:true,
        nav: false,
        items:3,
        autoplay:true,
        autoplayTimeout: 5000,
        autoplayHoverPause:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1
            },
            400:{
                items:3
            },
            750:{
                items:3
            },
            1120:{
                items:4
            }
        }
    });
    
    //preloader
	$(window).on( 'load', function() {
		$("#loading").delay(2000).fadeOut(500);
		$(".loading-center").on('click', function() {
		$(".object").fadeOut(500);
		})
	})
		
    // Counter Up  
    $('.rs-counter').counterUp({
        delay: 20,
        time: 1500
    });
    
    
    // scrollTop init
	var win=$(window);
    var totop = $('#scrollUp');    
    win.on('scroll', function() {
        if (win.scrollTop() > 150) {
            totop.fadeIn();
        } else {
            totop.fadeOut();
        }
    });
    totop.on('click', function() {
        $("html,body").animate({
            scrollTop: 0
        }, 500)
    });
    
    $(".cart li.search").on('click', function(){
        $(".search-bar").slideToggle();
    });
	
	/*----------------------------
    single-productjs active
    ------------------------------ */
    $('.single-product-image').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.single-product-nav'
    });
    $('.single-product-nav').slick({
        slidesToShow: 4,
        asNavFor: '.single-product-image',
        dots: false,
        focusOnSelect: true,
        centerMode:false,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2
              }
            },
            {
              breakpoint: 591,
              settings: {
                slidesToShow: 2
              }
            }
          ] 
    });
    

})(jQuery);