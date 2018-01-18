/**

    * @package Ray Responsive HTML5 Template

    * 

    * Template Scripts




    Init JS

    

    0. PRELOADER SCRIPT

    1. WOW ANIMATION SETTINGS

    2. STELLAR (PARALLAX) SETTINGS

    3. NAVBAR SLIDE SCRIPT

    4. CUSTOM SCRIPT

    5. NIVIGATION SCRIPT

    6. VIDEO BACKGROUND SETTINGS

    7. FULL HEIGHT SECTION SCRIPT

    8. INTRO SLOGAN TYPE

    9. INTRO SUPERSLIDER SETTINGS

    10. SCREENSHOTS SLIDER SETTINGS

    11. TESTIMONIALS SLIDER SETTINGS

*/

;(function($) {

	"use strict";
    
    var Core = {
        
        initialize: function() {

			//PRELOADER SCRIPT
			this.loader();
            
            //WOW ANIMATION SETTINGS
            this.animation();
            
            //STELLAR (PARALLAX) SETTINGS
            this.parralax();
            
            },
            loader: function() {
                
               $('#preloader').delay(400).fadeOut('slow'); // will fade out the white DIV that covers the website.
               $('#preloader .inner').fadeOut(); // will first fade out the loading animation         
                
            },
            animation: function() {
                
                 $("[data-animation]").each(function() {
                    var $this = $(this);
                    $this.addClass("wow");
                    if(!$("html").hasClass("no-csstransitions") && $(window).width() > 767) {
                        $this.addClass( $this.data( 'animation' ) );
                    } 
        
                });  
                
                var wow = new WOW({
                	offset:100,        // distance to the element when triggering the animation (default is 0)
                	mobile:false       // trigger animations on mobile devices (default is true)
              	});
            	wow.init();
                
            },
            parralax : function() {
                
                if(!(navigator.userAgent.match(/iPhone|iPad|iPod|Android|BlackBerry|IEMobile/i))) {
                	$.stellar({
                		horizontalScrolling: false,
                		positionProperty: 'transform'
                	});
                }
                
            },
           
    }
    
    var CoreReady = {
        
        initialize: function() {
            
            //CUSTOM SCRIPT
            this.customScript();
            
            //NIVIGATION SCRIPT
            this.nav();
            
            //VIDEO BACKGROUND SETTINGS
            this.video();
            
            //FULL HEIGHT SECTION SCRIPT
            this.fullHeight();
            
            //INTRO SLOGAN TYPE
            this.slogan();
            
            //INTRO SUPERSLIDER SETTINGS
            this.slider();
            
            //SCREENSHOTS SLIDER SETTINGS
            this.screenShot();
            
            //TESTIMONIALS SLIDER SETTINGS
            this.testimonial();
            
            //SHOP SLIDER
            this.shopSlider();
            
            
            
        },
        customScript : function() {
            
            $('.ray-effect').each(function(){
                var $this = $(this);
                var $parent = $this.parents('.container');
                $parent.after($this);
            })	
            
            if( $('.navbar').data( 'sticky' ) ){   
              $('.navbar').addClass('no-sticky');
            }
            
            $( '#modalContact2' ).each(function(){
               var $this = $( this );
               $('footer').after($this);
            });
        },
        nav: function(){
            
           	$('.nav').onePageNav({
        		currentClass: 'active',
        		filter: ':not(.external)',
        		scrollOffset: 40
        	});
            $('.call-action .goto[href^="#"]').on('click',function (e) {
        	    e.preventDefault();
        
        	    var target = this.hash,
        	    $target = $(target);
        
        	    $('html, body').stop().animate({
        	        'scrollTop': $target.offset().top - 75
        	    }, 1000, 'swing', function () {
        	        window.location.hash = target;
        	    });
       	    }); 
            
        },
        video: function(){
            
            if ( $( ".block-video-bg" ).length ) {	
    	    	$(function() {
    	        	var BV = new $.BigVideo({container: $('.block-video-bg'), useFlashForFirefox:false});
    	        	BV.init();
    	            var poster = $('.block-video-bg').data('poster');
    	            var mp4 = $('.block-video-bg').data('mp4');
    	            var ogg = $('.block-video-bg').data('ogg');
    	    		if(navigator.userAgent.match(/iPhone|iPad|iPod|Android|BlackBerry|IEMobile/i)) {
    	                    BV.show( poster );
    	            } else{
    	    			if (!!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0) {
    	    				BV.show(ogg, {doLoop:true, ambient:true});
    	    			} else{
    	    				BV.show(mp4, {doLoop:true, ambient:true, altSource:ogg});
    	    			}
    	    			BV.getPlayer().on('loadedmetadata', function(){
    	       	 			$('#big-video-wrap video').fadeIn('slow');
    	    			});
    	    		}
    	    	});
            }
            
        },
        fullHeight: function() {
            
           	$("#minimal-intro").css("min-height",$( window ).height());
        	$( window ).resize(function() {
        		$("#minimal-intro").css("min-height",$( window ).height());
        	});
            
        },
        slogan: function(){
        
            var str = $( ".type" ).data("type");
            if( str ){  
                var string = str.split(",");
                $(".type").typed({
                	strings: string,
                    typeSpeed: 200,
            		backDelay:6000,
            		loop: true,
                    loopCount: false,
                });	
            }
            
        },
        slider: function(){
            
            $("#slides").superslides({
        		play: 8000, //Milliseconds before progressing to next slide automatically. Use a falsey value to disable.
        		animation: "fade", //slide or fade. This matches animations defined by fx engine.
        		pagination: false,
        		inherit_height_from:".intro-block",
        		inherit_width_from:".intro-block"
        	});
            
        },
        screenShot: function(){
                
            $('.screenshots-slider').each(function(){
                var id = $(this).attr('id');
                 $('#'+id ).owlCarousel({
                    items : 5, 
                    itemsDesktop : [1400,4], 
                    itemsDesktopSmall : [1200,3], 
                    itemsTablet: [900,2], 
                    itemsMobile : [600,1],
            		stopOnHover:true
                });
                
                $('#'+id ).magnificPopup({
                    delegate: 'a',
                    type: 'image',
                    gallery: {
                        enabled: true
                    }
                });
                
            }); 
            
        },
        testimonial: function(){
            
            $('.testimonials-slider').each(function(){
                var id = $(this).attr('id');
                 $('#'+id ).owlCarousel({
                    singleItem:true,
            		autoPlay:5000,
            		stopOnHover:true
                });
                 
            });
            
        },
        shopSlider: function(){
             
              //ZEBRA ACCORDION
            new $.Zebra_Accordion($('.Zebra_Accordion'));
             jQuery.noConflict();


        //PRODUCT SLIDER.
        
		var defaults = {
			 // Most important owl features
			items : 5,
			itemsCustom : false,
			itemsDesktop : [1199,4],
			itemsDesktopSmall : [980,3],
			itemsTablet: [768,2],
			itemsTabletSmall: false,
			itemsMobile : [479,1],
			singleItem : true,
			itemsScaleUp : false,

			//Basic Speeds
			slideSpeed : 200,
			paginationSpeed : 800,
			rewindSpeed : 1000,

			//Autoplay
			autoPlay : false,
			stopOnHover : false,

			// Navigation
			navigation : false,
			navigationText : ["<i class=\"icon icon-chevron-left\"></i>","<i class=\"icon icon-chevron-right\"></i>"],
			rewindNav : true,
			scrollPerPage : false,

			//Pagination
			pagination : true,
			paginationNumbers: false,

			// Responsive
			responsive: true,
			responsiveRefreshRate : 200,
			responsiveBaseWidth: window,

			// CSS Styles
			baseClass : "owl-carousel",
			theme : "owl-theme",

			//Lazy load
			lazyLoad : false,
			lazyFollow : true,
			lazyEffect : "fade",

			//JSON
			jsonPath : false,
			jsonSuccess : false,

			//Mouse Events
			dragBeforeAnimFinish : true,
			mouseDrag : true,
			touchDrag : true,

			//Transitions
			transitionStyle : false,

			// Other
			addClassActive : false,

			//Callbacks
			beforeUpdate : false,
			afterUpdate : false,
			beforeInit: false,
			afterInit: false,
			beforeMove: false,
			afterMove: false,
			afterAction: false,
			startDragging : false,
			afterLazyLoad : false,
            
            autoHeight:true,
		}
        

		// Initialize Slider
		$('.owl-carousel').owlCarousel(defaults).addClass("owl-carousel-init");
            
           
        
        	// CAROUSEL
            $.fn.carousel = function(op) {
			var op, ui = {};

			op = $.extend({
				speed: 500,
				autoChange: false,
				interval: 5000
			}, op);

			ui.carousel = this;
			ui.items    = ui.carousel.find('.carousel-item');
			ui.itemsLen = ui.items.length;

			// CREATE CONTROLS

			ui.ctrl 	= $('<div />', {'class': 'carousel-control'});
			ui.prev 	= $('<div />', {'class': 'carousel-prev'});
			ui.next 	= $('<div />', {'class': 'carousel-next'});
			ui.pagList  = $('<ul />', {'class': 'carousel-pagination'});
			ui.pagItem  = $('<li></li>');

			for (var i = 0; i < ui.itemsLen; i++) {
				ui.pagItem.clone().appendTo(ui.pagList);
			}

			ui.prev.appendTo(ui.ctrl);
			ui.next.appendTo(ui.ctrl);
			ui.pagList.appendTo(ui.ctrl);
			ui.ctrl.appendTo(ui.carousel);

			ui.carousel.find('.carousel-pagination li').eq(0).addClass('active');

			ui.carousel.find('.carousel-item').each(function() {
				$(this).hide();
			});

			ui.carousel.find('.carousel-item').eq(0).show().addClass('active');


			// CHANGE ITEM

			var changeImage = function(direction, context) {
				var current = ui.carousel.find('.carousel-item.active');

				if (direction == 'index') {
					if(current.index() === context.index())
						return false;

					context.addClass('active').siblings().removeClass('active');

					ui.items.eq(context.index()).addClass('current').fadeIn(op.speed, function() {
						current.removeClass('active').hide();
						$(this).addClass('active').removeClass('current');
					});
				} 

				if (direction == 'prev') {
					if (current.index() == 0) {
						ui.carousel.find('.carousel-item:last').addClass('current').fadeIn(op.speed, function() {
							current.removeClass('active').hide();
							$(this).addClass('active').removeClass('current');
						});
					}
					else {
						current.prev().addClass('current').fadeIn(op.speed, function() {
							current.removeClass('active').hide();
							$(this).addClass('active').removeClass('current');
						});
					}
				}

				if (direction == undefined) {
					if (current.index() == ui.itemsLen - 1) {
						ui.carousel.find('.carousel-item:first').addClass('current').fadeIn(300, function() {
							current.removeClass('active').hide();
							$(this).addClass('active').removeClass('current');
						});
					}
					else {
						current.next().addClass('current').fadeIn(300, function() {
							current.removeClass('active').hide();
							$(this).addClass('active').removeClass('current');
						});
					}
				}

				ui.carousel.find('.carousel-pagination li').eq( ui.carousel.find('.carousel-item.current').index() ).addClass('active').siblings().removeClass('active');
			};

			ui.carousel
				.on('click', 'li', function() {
					changeImage('index', $(this));
				})
				.on('click', '.carousel-prev', function() {
					changeImage('prev');
				})
				.on('click', '.carousel-next', function() {
					changeImage();
				});

			// AUTO CHANGE

			if (op.autoChange) {
				var changeInterval = setInterval(changeImage, op.interval);

				ui.carousel
					.on('mouseenter', function() {
						clearInterval(changeInterval);
					})
					.on('mouseleave', function() {
						changeInterval = setInterval(changeImage, op.interval);
					});
			}

			return this;
		};

		$('.b-carousel').each(function() {
			$(this).carousel({
				autoChange: true
			});
		});
        }  
        
    }
    
    $(document).ready(function() {
        CoreReady.initialize();
        $('#myTab a').click(function (e) {
            e.preventDefault();
            $(this).tab('show');
        });
        (function() {
	
			$('.b-tabs').on('click', 'li', function() {
				var title  = $(this),
					tab    = title.parent().siblings().children().eq(title.index());

				if (title.parent().parent().hasClass('a-slide')) {
					var curTab = tab.siblings('.active');
					curTab.addClass('cur-tab').siblings().removeClass('cur-tab');
				}

				title.addClass('active').siblings().removeClass('active');
				tab.addClass('active').siblings().removeClass('active');		
			});

		}());
    });
    $(window).load(function () {
        Core.initialize(); 
    });
    
     $(window).scroll(function () {
    	  
        if ($(window).scrollTop() > $("nav").height()) {
            $("nav.navbar-slide").addClass("show-menu");
        } else {
            $("nav.navbar-slide").removeClass("show-menu");
			$(".navbar-slide .navMenuCollapse").collapse({toggle: false});
			$(".navbar-slide .navMenuCollapse").collapse("hide");
			$(".navbar-slide .navbar-toggle").addClass("collapsed");
        }
       
    }); 
    
   

})(jQuery);