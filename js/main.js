/*-------------------------------*/
/* content alert modal appears on page load
/*-------------------------------*/
$(document).ready(function () {

    $("#content-alert").modal('show');

});

/*-------------------------------*/
/* Start type writing 
/*-------------------------------*/
var area = document.getElementById('area'),
    list = [
        // 'Landing Page',
        // 'Frinedly',
        // 'Attitude'
        'Digital Age'
    ],
    count_li = 0,
    count = 0,
    speed = 200;


function rewrite() {
    var type = list[count_li].substring(0, count);
    document.getElementById('area').textContent = type;
    count++;
    var timer = setTimeout(rewrite, speed);
    if (count > list[count_li].length) {
        count = 0;
        count_li++;
        clearTimeout(timer);
        setTimeout(rewrite, 2500);
    }

    if (count_li === list.length) {
        count_li = 0;
    }
}

rewrite();

var flag = true;

function flashing() {
    if (flag) {
        document.getElementById('cursor').style.opacity = 1;
    } else {
        document.getElementById('cursor').style.opacity = 0;
    }
    flag = !flag
    setTimeout(flashing, 500);
}

flashing();
// End type writing


// landing slider
$('.landing-slider').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    prevArrow: ".landing-slider-parent .slider-btn .prev",
    nextArrow: ".landing-slider-parent .slider-btn .next",
    autoplay: true,
    autoplaySpeed: 2000,
});




// =========================================
// upcoing event slider
// =========================================

$('.event-slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: ".slider-btn .prev",
    nextArrow: ".slider-btn .next",
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});

// =========================================
// testemonials slider
// =========================================

$('.testemonials-slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});



