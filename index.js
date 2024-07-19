$(function () { 
    new WOW().init();

    // 메뉴
    $('.menuItem').hover(function () {
        console.log($(this).position().left)
        $('.moving-bar').css('left', $(this).position().left)
        $('.moving-bar').css('right', `calc(100% - ${ $(this).position().left + $(this).width()}px`)
    }, function () {
        $('.moving-bar').css('left', 0)
        $('.moving-bar').css('right', '360px')
    })

    //섹션
    gsap.registerPlugin(ScrollTrigger);
    gsap.utils.toArray(".parallax").forEach((section, i) => {
        ScrollTrigger.create({
            trigger: section,
            start: "top top", 
            pin: true,
            pinSpacing: false,
            // markers: true
        });
    });

    // 텍스트 고정 컨텐츠 스크롤
    gsap.timeline({
        scrollTrigger: {
            trigger: ".fix-title",
            pin: true,
            scrub: 0.3,
            start: "-=170",
            end: "bottom 600",
            // markers: true
        }
    })
    // 이미지 사이즈 줄이기
    gsap.utils.toArray(".img-box").forEach((img) => {
    gsap.to(img, {
        width: "45%", // 목표 너비
        scrollTrigger: {
            trigger: img, // 이미지가 스크롤 트리거가 됨
            start: "top bottom", // 스크롤 시작 위치
            end: "bottom bottom", // 스크롤 끝 위치
            scrub: true, // 스크롤에 따라 애니메이션 진행
            // markers: true // 디버그용 마커 표시
        }
    });
    });
    $('.title-box').click(function() {
        // 현재 클릭된 header의 다음 sibling 요소(content)를 가져옴
        var content = $(this).next('.title-box + p');

        // 모든 .accordion-content 요소를 숨기고 현재 선택된 content만 표시
        $('.title-box + p').not(content).slideUp();
        content.slideToggle();
    });

     $('#copyButton').click(function() {
        // 복사할 이메일 주소
        const email = 'lys@futurework.site';

        // 임시 텍스트 영역 생성
        const tempInput = $('<input>');
        $('body').append(tempInput);
        tempInput.val(email).select();
        document.execCommand('copy');
        tempInput.remove();

        // 알림 표시
        $('#notification').fadeIn().delay(2000).fadeOut();
    });
})