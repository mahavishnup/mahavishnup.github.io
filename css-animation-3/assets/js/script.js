$(document).ready(function() {
    $(".menu-icon").on("click", function() {
    $("nav ul").toggleClass("showing");
    });
});

$(window).on("scroll", function() {
    if ($(window).scrollTop()) {
    $('nav').addClass('black');
    } else {
    $('nav').removeClass('black');
    }
});

var images = "",
    count = 50;
for (var i = 1; i <= count; i++)
    images += '<img src="./assets/img/pic/'+i+'.jpg" />';
$(".grid").append(images);

var d = 0; 
var ry, tz, s; 

$(".animate").on("mouseenter", function() {
    $(".animation img").each(function() {
    d = Math.random() * 1000; 
    $(this).delay(d).animate({
        opacity: 0
    }, {
        step: function(n) {
        s = 1 - n;
        $(this).css("transform", "scale(" + s + ")");
        },
        duration: 1000,
    })
    }).promise().done(function() {
    storm();
    })
})

function storm() {
    $(".animation img").each(function() {
    d = Math.random() * 1000;
    $(this).delay(d).animate({
        opacity: 1
    }, {
        step: function(n) {
        ry = (1 - n) * 360;
        tz = (1 - n) * 1000;
        $(this).css("transform", "rotateY(" + ry + "deg) translateZ(" + tz + "px)");
        },
        duration: 3000,
        easing: 'easeOutQuint',
    })
    })
}

// $(document).ready(function () {
//     $("body").on("contextmenu",function(e){
//         return false;
//     });
// }); 