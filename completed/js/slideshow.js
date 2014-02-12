$(document).ready(function(){
  setInterval(slideSwitch, 3000);
});


slideSwitch = function(){
  $current = $('.slideshow li.current');

  $next = $current.next();
  if ($next.length == 0) {
    $next = $('.slideshow li:first-child');
  };

  $next.addClass('current');
  $current.removeClass('current').addClass('previous');

  window.setTimeout(function(){
    $current.removeClass('previous');
  }, 2000);
}
