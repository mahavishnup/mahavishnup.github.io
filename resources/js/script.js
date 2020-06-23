$(document).ready(function() {
    
    
    /* For the sticky navigation */
    $('.js--section-features').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
      offset: '60px;'
    });
    
    
    /* Scroll on buttons */
    $('.js--scroll-to-follow').click(function () {
       $('html, body').animate({scrollTop: $('.js--scroll-follow').offset().top}, 5000); 
    });
    
    $('.js--scroll-to-Download').click(function () {
       $('html, body').animate({scrollTop: $('.js--section-Download').offset().top}, 1000); 
    });
    
    
    /* Navigation scroll */
    $(function() {
      $('a[href*=#]:not([href=#])').click(function() {
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
    
    
    /* Animations on scroll */
    $('.js--wp-1').waypoint(function(direction) {
        $('.js--wp-1').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });
    
    $('.js--wp-2').waypoint(function(direction) {
        $('.js--wp-2').addClass('animated fadeInUp');
    }, {
        offset: '50%'
    });
    
    $('.js--wp-3').waypoint(function(direction) {
        $('.js--wp-3').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });
    
    $('.js--wp-4').waypoint(function(direction) {
        $('.js--wp-4').addClass('animated pulse');
    }, {
        offset: '50%'
    });
    
    $('.js--wp-5').waypoint(function(direction) {
        $('.js--wp-5').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });
    
    $('.js--wp-6').waypoint(function(direction) {
        $('.js--wp-6').addClass('animated pulse');
    }, {
        offset: '50%'
    });
    
    $('.js--wp-7').waypoint(function(direction) {
        $('.js--wp-7').addClass('animated fadeInUp');
    }, {
        offset: '50%'
    });
    
    $('.js--wp-8').waypoint(function(direction) {
        $('.js--wp-8').addClass('animated pulse');
    }, {
        offset: '50%'
    });
    
    /* Mobile navigation */
    $('.js--nav-icon').click(function() {
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');
        
        nav.slideToggle(200);
        
        if (icon.hasClass('ion-navicon-round')) {
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        } else {
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        }        
    });
});


(function() {
	
	var Progress = function( element ) {
		
		this.context = element.getContext( "2d" );
		this.refElement = element.parentNode;
		this.loaded = 0;
		this.start = 4.72;
		this.width = this.context.canvas.width;
		this.height = this.context.canvas.height;
		this.total = parseInt( this.refElement.dataset.percent, 10 );
		this.timer = null;
		
		this.diff = 0;
		
		this.init();	
	};
	
	Progress.prototype = {
		init: function() {
			var self = this;
			self.timer = setInterval(function() {
				self.run();	
			}, 0);
		},
		run: function() {
			var self = this;
			
			self.diff = ( ( self.loaded / 100 ) * Math.PI * 2 * 10 ).toFixed( 2 );	
			self.context.clearRect( 0, 0, self.width, self.height );
			self.context.lineWidth = 10;
			self.context.fillStyle = "linen";
			self.context.strokeStyle = "linen";
			self.context.textAlign = "center";
			
			self.context.fillText( self.loaded + "%", self.width * .5, self.height * .5 + 2, self.width );
			self.context.beginPath();
			self.context.arc( 35, 35, 30, self.start, self.diff / 10 + self.start, false );
			self.context.stroke();
			
			if( self.loaded >= self.total ) {
				clearInterval( self.timer );
			}
			
			self.loaded++;
		}
	};
	
	var CircularSkillBar = function( elements ) {
		this.bars = document.querySelectorAll( elements );
		if( this.bars.length > 0 ) {
			this.init();
		}	
	};
	
	CircularSkillBar.prototype = {
		init: function() {
			this.tick = 0;
			this.progress();
			
		},
		progress: function() {
			var self = this;
			var index = 0;
			var firstCanvas = self.bars[0].querySelector( "canvas" );
			var firstProg = new Progress( firstCanvas );
			
			
			
			var timer = setInterval(function() {
				index++;
					
				var canvas = self.bars[index].querySelector( "canvas" );
				var prog = new Progress( canvas );
				
				if( index == self.bars.length ) {
						clearInterval( timer );
				} 
				
			}, self.tick * 1000);
				
		}
	};
	
	document.addEventListener( "DOMContentLoaded", function() {
		var circularBars = new CircularSkillBar( "#bars .bar" );
	});
	
})();
