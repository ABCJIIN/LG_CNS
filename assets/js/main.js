//커스텀 셀렉트
function selectCustom(){
    $(document).on('click', '.select-item', function(e){
        e.preventDefault();
        if($(this).hasClass('on') == true){
            $(this).removeClass('on');
            $(this).siblings('.option-list').slideUp();
        }else{
            $('.select-item').removeClass('on').next('.option-list').slideUp();
            $(this).addClass('on');
            $(this).siblings('.option-list').slideDown();
        }
    });

    $(document).on('click', '.option-list li', function(e){
        e.preventDefault();
        var value = $(this).html();
        $(this).parents('.option-list').siblings('.select-item').html(value);
        $(this).parents('.option-list').slideUp().siblings('.select-item').removeClass('on');
        $(this).parents('.option-list').siblings('.direct-input').removeClass('on');
    });

    $(document).on('click', '.option-list li.direct', function(e){
        e.preventDefault();
        $(this).parents('.option-list').slideUp().siblings('.select-item').removeClass('on');
        $(this).parents('.option-list').siblings('.direct-input').addClass('on');
    });

}selectCustom();

// 롤링배너
$(window).on('load', function(){
    window.scrollTo(0, 0); //새로고침시 페이지 최상단 이동
    setFlowBanner();
});

function setFlowBanner() {
    let bannerWrap = $('.flow-banner');
    let bannerList = $('.flow-banner .list');
    let bannerWrapWidth = bannerWrap.width();
    let bannerListWidth = bannerList.width();
    const speed = 90;//1초에 몇 픽셀 이동하는지 설정

    //리스트 복제
    let clone = bannerList.clone();
    bannerWrap.append(clone);
    flowBannerAct()

    //배너 실행 함수
    function flowBannerAct() {
        //무한 반복을 위해 리스트를 복제 후 배너에 추가
        if (bannerListWidth < bannerWrapWidth) {
            const listCount = Math.ceil(bannerWrapWidth * 2 / bannerListWidth);
            for(let i = 2; i < listCount; i++) {
                clone = bannerList.clone();
                bannerWrap.append(clone);
            }
        }
        bannerWrap.find('.list').css({
            'animation':`${bannerListWidth / speed}s linear infinite flowRolling`
        });
    }
};

// $(window).scroll(function(){
//     if ($(this).scrollTop() > 3400) {
//         $(".generator").each(function(index,item){
//             $(this).delay(index * 1000).animate({
//                 top: '44.6%'
//             },'1000');
//         });
//     };
// });

// $(window).scroll(function(){
//     if ($(this).scrollTop() > 3400) {
//         $(".generator").each(function(index) {
//             var delay = (index / 16) * 10000;

//             $(this).delay(delay).animate({
//                 top: '44.6%'
//             }, '1000');
//         });
//     };
// });


// $(window).scroll(function(){
//     if ($(this).scrollTop() > 3400) {
//         var totalElements = $(".generator").length;
//         $(".generator").each(function(index) {
//             // Calculate delay based on index
//             var delay = ((totalElements - index) / totalElements) * 2000; // Adjust multiplier as needed

//             $(this).delay(delay).animate({
//                 top: '44.6%'
//             }, 'slow');
//         });
//     };
// });

// $(window).scroll(function(){
//     if ($(this).scrollTop() > 3400) {
//         $(".generator").each(function(index){
//             // Increase delay as the index number increases
//             var delay = index * 1000;

//             // Adjust animation speed based on delay
//             var animationSpeed = 1000 + (index * 20); // Adjust this value as needed
            
//             $(this).delay(delay).animate({
//                 top: '44.6%'
//             }, animationSpeed);
//         });
//     };
// });

// $(window).scroll(function(){
//     if ($(this).scrollTop() > 3400) {
//         // Start animation for the first .generator element
//         animateGenerator($(".generator").first(), 1000); // Initial animation speed: 1000 milliseconds
//     }
// });

// function animateGenerator($element, animationSpeed) {
//     // Check if there is a next .generator element
//     var $nextElement = $element.next(".generator");
//     if ($nextElement.length > 0) {
//         // Animate the current .generator element
//         $element.animate({
//             top: '44.6%'
//         }, animationSpeed, function() {
//             // Once animation is completed, trigger animation for the next .generator element
//             animateGenerator($nextElement, animationSpeed - 100); // Decrease animation speed by 100 milliseconds for each subsequent element
//         });
//     }
// }


// $(window).scroll(function(){
//     if ($(this).scrollTop() > 3400) {
//         $(".generator").each(function(index,item){
//             // Increase delay as the index number increases
//             var delay = index * 1000;

//             // Adjust animation speed based on delay
//             var animationSpeed = 1000 + (index * 200); // Adjust this value as needed
            
//             $(this).delay(delay).animate({
//                 top: '44.6%'
//             }, animationSpeed);
//         });
//     };
// });


// $(window).scroll(function(){
//     if ($(this).scrollTop() > 3300) {
//         animateGenerators($(".generator").first(), 1500);
//     }
// });

// function animateGenerators($element, animationSpeed) {
//     var $nextElement = $element.next(".generator");
//     if ($nextElement.length > 0) {
//         $element.animate({
//             top: '44.6%'
//         }, animationSpeed, function() {
//             var nextAnimationSpeed = Math.max(animationSpeed - 200, 300);
//             animateGenerators($nextElement, nextAnimationSpeed);
//         });
//     } else if($nextElement.length === 0) {
//         setTimeout(function(){
//             $(".generator").css("top", "-100%");
//         }, 3000);
//     }
// }


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



// function animateGenerators($element, animationSpeed) {
//     var $nextElement = $element.next(".generator");
//     if ($nextElement.length > 0) {
//         $element.animate({
//             top: '44.6%'
//         }, animationSpeed, function() {
//             var nextAnimationSpeed = Math.max(animationSpeed - 200, 300);
//             animateGenerators($nextElement, nextAnimationSpeed);
//         });
//     } else {
//         setTimeout(function(){
//             $(".generator").css("top", "-100%");
//             animateGenerators($(".generator").first(), 1500);
//         }, 2000);
//     }
// }

$(window).scroll(function() {
    var scrollPosition = $(window).scrollTop();
    console.log("현재 스크롤 위치:", scrollPosition);
});