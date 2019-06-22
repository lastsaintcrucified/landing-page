

  	jQuery(function($) {
  		 function nav(){
              var s = $(".nav2");
              var pos = s.position();                    
              $(window).scroll(function() {
              var windowpos = $(window).scrollTop();
              if (windowpos > pos.top) {
              s.addClass("stick");
              } else {
                 s.removeClass("stick"); 
                 }
              });
              }
              function lft_img(){
              var f = $(".lft_img");
              var cos = f.position();                    
              $(window).scroll(function() {
              var windowpos =$(window).scrollTop();
              if (windowpos >= cos.top) {
              f.addClass("stick1");
              } else {
              f.removeClass("stick1"); 
                }
              });
              }





            

             lft_img();
             nav();
             

        
 
   
 
  
 
 

 


});
 
  

$(document).ready(function(){
  $('#carouselHacked').carousel(); 

       
        $(".lft_img").vegas({
    slides: [
        { src: "img/u.jpg" },
        { src: "img/u1.jpg" },
        { src: "img/u2.jpg" },
        { src: "img/u4.jpg" },
        { src: "img/u5.jpg" }
    ],
     overlay: 'plugins/vegas/overlays/01.png'
    
    
});
        $(".loader").fadeOut(4000,"swing");
        $(".loader2").fadeOut(7000,"swing");



      });