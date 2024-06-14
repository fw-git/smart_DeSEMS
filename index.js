$(function () { 
    $('.banner-slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    // autoplay: true,
    infinite : true, 
    });
   // 버튼을 처음에 숨깁니다.
            $('#scrollToTopButton').hide();
            
            // 스크롤 이벤트를 감지합니다.
            $(window).scroll(function() {
                if ($(this).scrollTop() > 0) {
                    // 스크롤이 맨 위가 아니면 버튼을 보입니다.
                    $('#scrollToTopButton').fadeIn();
                } else {
                    // 스크롤이 맨 위이면 버튼을 숨깁니다.
                    $('#scrollToTopButton').fadeOut();
                }
            });

            // 버튼에 클릭 이벤트 리스너를 추가합니다.
            $('#scrollToTopButton').click(function() {
                // 페이지를 맨 위로 부드럽게 스크롤합니다.
                $('html, body').animate({ scrollTop: 0 }, 'smooth');
                return false;
            });
    new WOW().init();
    $('a').on('click', function(e){
  e.preventDefault();
  $('html, body').animate({scrollTop:$(this.hash).offset().top}, 500)
    })
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
