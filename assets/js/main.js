
$(window).scroll(function(){
    if ($(this).scrollTop() >= 3000 && $(this).scrollTop() <= 3400) {
        animateGenerators($(".generator").first(), 1500);
    } else {
        $(".generator").stop(true, true);
        $(".generator").css("top", "-100%");
    }
});

function animateGenerators($element, animationSpeed) {
    var $nextElement = $element.next(".generator");
    if ($nextElement.length > 0) {
        $element.animate({
            top: '44.6%'
        }, animationSpeed, function() {
            var nextAnimationSpeed = Math.max(animationSpeed - 200, 300);
            animateGenerators($nextElement, nextAnimationSpeed);
        });
    } else {
        setTimeout(function(){
            $(".generator").stop(false, false);
            $(".generator").css("top", "-100%");
            animateGenerators($(".generator").first(), 1500);
        }, 2000);
    }
}


// 차트 토탈
$(function(){
    $('.count .num').each(function(){
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()}, {
            duration: 3000,
            easing: 'swing',
            step: function (now){
                $(this).text(Math.ceil(now));
            }
        });
    });
});


$(window).scroll(function(){
    if ($(this).scrollTop() > 3300) {

        new Chart(document.getElementById("doughnut-chart").getContext('2d'), {
            type: 'doughnut',
            data: {
                datasets: [
                    {
                        data: [210,80,70],
                        borderWidth: 0,
                        hoverBackgroundColor: ["#FF9559", "#FFD56A","#E6EDF9"],
                        backgroundColor: ["#FF9559", "#FFD56A","#E6EDF9"],
                    }
                ]
            },
            options: {
                tooltips: {
                    enabled: false
                },
                cutoutPercentage: 65
            }
        });

        new Chart(document.getElementById("doughnut-chart02").getContext('2d'), {
            type: 'doughnut',
            data: {
                datasets: [
                    {
                        data: [210,80,70],
                        borderWidth: 0,
                        hoverBackgroundColor: ["#6624D9", "#6AD2FF","#E6EDF9"],
                        backgroundColor: ["#6624D9", "#6AD2FF","#E6EDF9"],
                    }
                ]
            },
            options: {
                tooltips: {
                    enabled: false
                },
                cutoutPercentage: 65
            }
        });
    } else {

    }
});






$(window).scroll(function() {
    var scrollPosition = $(window).scrollTop();
    console.log("현재 스크롤 위치:", scrollPosition);
});