ElOffsetSidebar
===============

jQuery plugin to make Offcanvas sidebar

[![IMAGE ALT TEXT HERE](http://img.youtube.com/vi/ggQyHoUowaE/0.jpg)](http://www.youtube.com/watch?v=ggQyHoUowaE)

^^^ youtube link



Example:
  - i take simple bootstrap example with sidebar
  - append `<div id="el-sidebar-nav">` after body tag
  - wrap all contents to `<div id="el-wrapper">`
  - add show sidebar button (a with class "el-sidebar-btn" and some image or text)
  - add hide button at top of original sidebar contents (a with class "el-sidebar-btn" and some image or text)
  - insert script link at bottom (`<script type='text/javascript' src='el-offsidebar.js?ver=0.2'></script>`)
  - after link add code 		

```javascript
	$.fn.elSidebar({
		sidebar		: '.blog-sidebar',			// real sidebar
		sidebarBtn	: '.el-sidebar-btn',		// show/hide sidebar button
		elSidebar	: '#el-sidebar-nav',		// el sidebar
		elWrapper	: '#el-wrapper'				// el wrapper
	});
```
