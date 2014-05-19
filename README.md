ElOffsetSidebar
===============

jQuery plugin to make Offcanvas sidebar

[![IMAGE ALT TEXT HERE](http://img.youtube.com/vi/ggQyHoUowaE/0.jpg)](http://www.youtube.com/watch?v=ggQyHoUowaE)

^^^ youtube link ;)




Example:
  - i take simple bootstrap example with sidebar
  - append <div id="el-sidebar-nav"></div> after <body>
  - wrap all contents to <div id="el-wrapper">
  - add show sidebar button (<a class="btn btn-success el-sidebar-btn"><span class="fa fa-chevron-right fa-lg"></span></a>)
  - add hide button at top of original sidebar contents (<a class="btn btn-success el-sidebar-btn"><span class="fa fa-chevron-right fa-lg"></span></a>)
  - insert script link at bottom <script src="el-offsidebar.js"></script>
  - after link add code 		
  - <script>
			// init ElOffsetSidebar
			$.fn.elSidebar({
				sidebar		: '.blog-sidebar',			// real sidebar
				sidebarBtn	: '.el-sidebar-btn',		// show/hide sidebar button
				elSidebar	: '#el-sidebar-nav',		// el sidebar
				elWrapper	: '#el-wrapper'				// el wrapper
			});		
		</script>
