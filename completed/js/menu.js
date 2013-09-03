jQuery(function(){
  $('nav').click(function(){
    if (!$(this).hasClass('active')) {
      $(this).addClass('active');    
    };
  });

  $('nav li span').click(function(event){
    $(this).parent('li').siblings().removeClass('active');
    $(this).parent('li').toggleClass('active');
    event.stopPropagation();
  })

  $('a.menu').click(function(){
    $('#page').toggleClass('active-navigation');
  })
});