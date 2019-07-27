$(document).ready(function(){

    $('.zenith').mouseenter(function(){
      //moving the div left a bit is completely optional
      //but should have the effect of growing the image from the middle.
      $(this).animate({"width": "80%",}, 400,'swing');
    }).mouseleave(function(){ 
      $(this).stop().animate({"width": "100%"}, 200,'swing');
    });;
});