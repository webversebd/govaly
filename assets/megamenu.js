
$(document).ready(function(){   	
    $(".first-item").hover(function(){
        $(this).find('.mega-menu').addClass('active');
      },
      function(){
         $('.mega-menu').removeClass('active');
      });
    
  //   	mega menu show for other page
    $(".for-other").hover(function(){
          $(this).find('.menu-show').addClass('show');
        
      },
      function(){
         $(this).find('.menu-show').removeClass('show');
      });
  });