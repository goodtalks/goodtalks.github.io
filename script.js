 $(document).ready(function(){
    $(".button-collapse").sideNav();

    $('.parallax').parallax();

     $(".nav-menu a").click(function (e){
        e.preventDefault();
        var link = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(link).offset().top - 64
        }, 300);
    });
  });