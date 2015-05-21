$(document).ready(function(){
  var $window = $(window);
  var $document = $(document);

  $document.on('flatdoc:ready', function() {
    $(".content h1 img").remove();
    $(".content ul:first").remove();

    $('.menu a').anchorjump();

    if (location.hash != "") {
      $.anchorjump(location.hash);
    }
  });

  $(function() {
    var $sidebar = $('.menubar');
    var elTop;

    $window
      .on('resize.sidestick', function() {
        $sidebar.removeClass('fixed');
        elTop = $sidebar.offset().top;
        $window.trigger('scroll.sidestick');
      })
      .on('scroll.sidestick', function() {
        var scrollY = $window.scrollTop();
        $sidebar.toggleClass('fixed', (scrollY >= elTop));
      })
      .trigger('resize.sidestick');
  });
});

// Anchorjump (c) 2012, Rico Sta. Cruz. MIT License.
// http://github.com/rstacruz/jquery-stuff/tree/master/anchorjump
(function($) {
  var defaults = {
    'speed': 500,
    'offset': 0,
    'for': null,
    'parent': null
  };

  $.fn.anchorjump = function(options) {
    options = $.extend({}, defaults, options);

    if (options['for']) {
      this.on('click', options['for'], onClick);
    } else {
      this.on('click', onClick);
    }

    function onClick(e) {
      var $a = $(e.target).closest('a');
      if (e.ctrlKey || e.metaKey || e.altKey || $a.attr('target')) return;

      e.preventDefault();
      var href = $a.attr('href');

      $.anchorjump(href, options);
    }
  };

  // Jump to a given area.
  $.anchorjump = function(href, options) {
    options = $.extend({}, defaults, options);

    var top = 0;

    if (href != '#') {
      var $area = $(href);
      // Find the parent
      if (options.parent) {
        var $parent = $area.closest(options.parent);
        if ($parent.length) { $area = $parent; }
      }
      if (!$area.length) { return; }

      // Determine the pixel offset; use the default if not available
      var offset =
        $area.attr('data-anchor-offset') ?
        parseInt($area.attr('data-anchor-offset'), 10) :
        options.offset;

      top = Math.max(0, $area.offset().top + offset);
    }

    $('html, body').animate({ scrollTop: top }, options.speed);
    $('body').trigger('anchor', href);

    // Add the location hash via pushState.
    if (window.history.pushState) {
      window.history.pushState({ href: href }, "", href);
    }
  };
})(jQuery);