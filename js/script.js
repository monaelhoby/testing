$(function () {



	//----------------------------------------------------//
	// togglle navbar button
	//---------------------------------------------------//


  $(".navbar-toggler").click(function (){
   if(!$(this).hasClass("collapsed")){
     $(this).css("opacity","1");
     $(this).siblings("i").css("opacity","0");
   }else{
       $(this).css("opacity","0");
       $(this).siblings("i").css("opacity","1");
   }
 });

 	//----------------------------------------------------//
 	// togglle dropdown-navbar button
 	//---------------------------------------------------//

  $(".nav-item").click(function (){
      if($(this).hasClass("show")){
        $(this).find(".nav-link i").css("opacity","0");
        console.log("njj")
      }else{
        $(this).find(".nav-link i").css("opacity","1");
      }
  });

  	//----------------------------------------------------//
  	//start Slick slider
  	//---------------------------------------------------//

        $('.center').slick({
          centerMode: true,
          centerPadding: '60px',
          slidesToShow: 3,
          responsive: [
            {
              breakpoint: 768,
              settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 3
              }
            },
            {
              breakpoint: 480,
              settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
              }
            }
          ]
        });
});
