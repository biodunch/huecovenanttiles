// $("#initial").css('visibilty', 'hidden');

$(document).ready(function () {
    $('.custom-nav').scroll(function () {
        $('.custom-nav').css('animation', 'slideInDown 0.5s');

    });
    $("#initial").css('visibility', 'visible');
    $("#initial").css('animation', 'fadeInRight 1s');
    $("#second").css('visibility', 'visible');
    $("#second").css('animation', 'fadeInLeft 1s ');

    var c = document.getElementsByClassName('thumbnail');
    c.addEventListener('scroll', function(){
     $('.thumbnail').css('animation', 'zoomIn 1s');
    });

});