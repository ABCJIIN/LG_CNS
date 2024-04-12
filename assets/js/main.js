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

$(window).scroll(function(){
    if ($(this).scrollTop() > 3400) {
        animateGenerators($(".generator").first(), 1500);
    }
});

function animateGenerators($element, animationSpeed) {
    var $nextElement = $element.next(".generator");
    if ($nextElement.length > 0) {
        $element.animate({
            top: '44.6%'
        }, animationSpeed, function() {
            var nextAnimationSpeed = Math.max(animationSpeed - 200, 500);
            animateGenerators($nextElement, nextAnimationSpeed);
        });
    }
}