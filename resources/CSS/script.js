//$(function(){
//
//   $('h1').click(function(){
//       
//       $('nav').removeClass('sticky');
//   })                
//})



$(function(){
  
  $('.js--section-features').waypoint(function(direction){
    if(direction=="down"){
        $('nav').addClass('sticky');
    }
      
    else{
        $('nav').removeClass('sticky');
    }
});
    
   
});
  

//$(function(){
// $('.js--section-features').waypoint(function(direction) {
//        if (direction == "down") {
//            $('nav').addClass('sticky');
//        } else {
//            $('nav').removeClass('sticky');
//        }
//    });
//    
//    });