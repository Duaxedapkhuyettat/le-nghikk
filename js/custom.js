$('#collection').owlCarousel({
    loop:true,	// cho lap lại
items:2,	// xuất hiện 1 ảnh thôi
smartSpeed:1000,   	// tốc độ thay đổi ảnh
autoplay:false,		// cho phép tự động chạy
    autoplayTimeout:5000,  // thời gian chờ khi chuyển ảnh khi chạy tự động
nav:true,	// cho xuất hiện bộ nút tới lui 
  })
$('#collection1').owlCarousel({
    loop:true,	// cho lap lại
items:2,	// xuất hiện 1 ảnh thôi
smartSpeed:1000,   	// tốc độ thay đổi ảnh
autoplay:false,		// cho phép tự động chạy
    autoplayTimeout:5000,  // thời gian chờ khi chuyển ảnh khi chạy tự động
nav:true,	// cho xuất hiện bộ nút tới lui 
  })

  $('#news').owlCarousel({
    loop:true,	// cho lap lại
items:3,	// xuất hiện 1 ảnh thôi
smartSpeed:1000,   	// tốc độ thay đổi ảnh
autoplay: true,		// cho phép tự động chạy
    autoplayTimeout: 5000,  // thời gian chờ khi chuyển ảnh khi chạy tự động
nav:true,	// cho xuất hiện bộ nút tới lui 
  })
  
  $('#hero').owlCarousel({
    loop:true,	// cho lap lại
items:1,	// xuất hiện 1 ảnh thôi
smartSpeed:1000,   	// tốc độ thay đổi ảnh
autoplay: true,		// cho phép tự động chạy
    autoplayTimeout: 5000,  // thời gian chờ khi chuyển ảnh khi chạy tự động
nav:true,	// cho xuất hiện bộ nút tới lui 
  })

$('#cam-nhan').owlCarousel({
   loop:true,	// cho lap lại		
smartSpeed:1000,   	// tốc độ thay đổi ảnh
autoplay:true,		// cho phép tự động chạy
    autoplayTimeout:5000,  // thời gian chờ khi chuyển ảnh khi chạy tự động
nav:true,	// cho xuất hiện bộ nút tới lui 
margin:40,
// xuất hiện item tùy theo thiết bị (pc/ ipad/phone)i


 responsive:{
    0:{
        items:1,
       dots:false,
    },
    600:{
        items:1
    },
    1000:{
        items:2
    }
}

  })
