/*
	El Offset Sidebar v0.2
	Updated: May 19, 2014

	http://iteye.ru/labs/el-offset-sidebar (in progress)

	License: http://opensource.org/licenses/MIT

	Usage:
			$.fn.elSidebar({
				sidebar		: '.blog-sidebar',			// real sidebar
				sidebarBtn	: '.el-sidebar-btn',		// show/hide sidebar button
				elSidebar	: '#el-sidebar-nav',		// el sidebar
				elWrapper	: '#el-wrapper'				// el wrapper
			});	
*/

(function ( $ ) {
	
	$.fn.elSidebar = function( options ) {
	
		// This is the easiest way to have default options.
		var settings = $.extend({
			// These are the defaults.
			sidebar: ".blog-sidebar",
			sidebarBtn: ".el-sidebar-btn",
			elSidebar: '#el-sidebar-nav',
			elWrapper: '#el-wrapper',
			elMuteLayer: '#el-offsidebar-mute-layer'
		}, options );

		var props = {
			l:  '-100%',
			o:	'0',
		};

		// ElOffsetSidebar styling
		$(settings.elSidebar).css({
			'z-index':			999999,
			'top':				'0',
			'width':			'100%',
			'position':			'absolute',
			'background-color':	'white',
			'padding':			'2em',
			'left':				'-100%',
			'box-shadow':		'0px 0px 150px 1px black',
			'opacity':			'0',
			'display': 			'none'
		});

		function resizeElSidebar() {

			if (parseInt(props.sh)<parseInt($(window).height())) {
				$(settings.elSidebar).css({'height':parseInt($(window).height())});
			} else {
				$(settings.elSidebar).css({'height':'auto'});
			}
					
		}
		
		function init() {
			if (parseInt($(settings.elSidebar).css('left'))=='0') {
				
				// let's turn it off
				
				props.l = '-100%'; 
				props.o = 0;
				
				// show content
				$(settings.elWrapper).show();

				// hide mute layer
				$(settings.elMuteLayer).fadeOut('slow');

			} else {

				// let's show sidebar
				
				$(settings.elSidebar).show();

				// if sidebar smaller then body we make height 100%
				resizeElSidebar();

				
				$(settings.elMuteLayer).fadeIn('slow', function(){
					$(settings.elWrapper).hide();
				});
				
				
				props.l = 0;
				props.o = 1;
			}
		}


		function sidebarAnimation(){
			$('html').css({'overflow':'hidden'});
			$(settings.elSidebar).animate({
				left: 		props.l,
				opacity: 	props.o
			}, 1000, function(){
				if (props.l!=0) {
					$(settings.elSidebar).hide();
				}
				$('html').css({'overflow':'auto'});
			});	
			
		}
		
		// create mute div
		$(settings.elWrapper).prepend('<div id="'+settings.elMuteLayer.replace('#','')+'"></div>');
		$(settings.elMuteLayer).css({
			'display': 'none',
			'width': '100%',
			'height': '100%',
			'position': 'absolute',
			'top': '0',
			'left': '0',
			'background-color': 'white',
			'z-index': '10000'
		});
		

		// fix zindex of content
		$(settings.elWrapper).css({'z-index':'0'});

		// copy content
		// clone with bindings
		$(settings.sidebar).children().clone(true, true).appendTo(settings.elSidebar);
		
		// if we change browser height
		props.sh = $(settings.elSidebar).height();
		$(window).bind('resize', function(){
			resizeElSidebar();
		});
		
		// main work
		$(settings.sidebarBtn).click(function(){
			init();
			sidebarAnimation();
		});

		return this;

	};
 
}( jQuery ));
