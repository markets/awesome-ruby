Flatdoc.run({
  fetcher: Flatdoc.github('markets/awesome-ruby')
});

$(document).on('flatdoc:ready', function() {
  $(".content h1 img").remove();
  $(".content ul:first").remove();
});