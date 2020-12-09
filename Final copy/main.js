$(document).ready(function() {
  
  
  $('a[href*="#"]:not([href="#"])').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
  });

  console.log("ok")


  let focused = false;
  $('.container').click(function(){
    console.log("ok")
    if(focused) {
      $(this).children('.description-focus').fadeOut("fast")
      $(this).children('.description').fadeIn("slow");
      focused = !focused;
    } else {
      $(this).children('.description').fadeOut("fast");
      $(this).children('.description-focus').fadeIn("fast");
      focused = !focused;
    }
  })
});