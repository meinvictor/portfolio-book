$(document).ready(function(){
    $('main section').addClass('animate__animated animate__zoomIn');
    $('header nav a').click(function(e){
        if($('header nav a').hasClass('active-tab')){
            $('header nav a').removeClass('active-tab');
        }
        $(this).addClass('active-tab');
        e.preventDefault();
    });

    $('.active-tab').click(function(){
        $('main section').removeClass('animate__animated animate__zoomOut');
        $('main section').addClass('animate__animated animate__zoomIn');
    });

    $('.about-me').click(function(){
        $('main section').removeClass('animate__animated animate__zoomIn');
        $('main section').addClass('animate__animated animate__zoomOut');
    });



});
