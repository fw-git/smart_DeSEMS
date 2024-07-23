$(function () {
  new WOW().init();

  let isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(
    navigator.userAgent
  )
    ? true
    : false;

  // 메뉴
  $(".menuItem").hover(
    function () {
      console.log($(this).position().left);
      $(".moving-bar").css("left", $(this).position().left);
      $(".moving-bar").css(
        "right",
        `calc(100% - ${$(this).position().left + $(this).width()}px`
      );
    },
    function () {
      $(".moving-bar").css("left", 0);
      $(".moving-bar").css("right", "360px");
    }
  );
  $(".mobile-menu").click(function () {
    if ("0px" === $(".mobile-menu-list").css("height")) {
      $(".mobile-menu-list").css("height", "179px");
      $(".menuItem").click(function () {
        $(".mobile-menu-list").css("height", "0px");
      });
    } else {
      $(".mobile-menu-list").css("height", "0px");
    }
  });
  // 메인배너 효과
  function applyAnimation() {
    let heading = document.getElementById("animatedHeading");
    let windowWidth = window.innerWidth;

    // Remove both animation classes first
    heading.classList.remove("bounceInRight");
    heading.classList.remove("fadeInUp");

    // Add the appropriate animation class based on window width
    if (windowWidth <= 787) {
      heading.classList.add("bounceInRight");
    } else {
      heading.classList.add("fadeInUp");
    }
  }

  // 모바일일 때 페이드
  function applyWowFade() {
    // 모든 modileWowfade 클래스를 가진 요소들을 선택
    var elements = document.querySelectorAll(".mobileWowfade");
    var windowWidth = window.innerWidth;

    // 모든 선택된 요소들에 대해 반복
    elements.forEach(function (element) {
      if (windowWidth <= 787) {
        // 화면이 787px 이하일 때 wow와 fadeInUp 클래스를 추가
        element.classList.add("wow", "fadeInUp");
      } else {
        // 화면이 787px 초과일 때 wow와 fadeInUp 클래스를 제거
        element.classList.remove("wow", "fadeInUp");
      }
    });
  }
  if (!isMobile && $(window).width() > 1200) {
    // 텍스트 고정 컨텐츠 스크롤
    gsap.timeline({
      scrollTrigger: {
        trigger: ".fix-title",
        pin: true,
        scrub: 0.3,
        start: "-=170",
        end: "bottom 600",
        // markers: true
      },
    });

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
        },
      });
    });
  }
  applyGsap();

  function applyAll() {
    applyAnimation();
    applyWowFade();
  }
  // 페이지 로드 시와 창 크기 변경 시 함수 호출
  window.addEventListener("load", applyAll);
  window.addEventListener("resize", applyAll);

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

  $(".title-box").click(function () {
    // 현재 클릭된 header의 다음 sibling 요소(content)를 가져옴
    var content = $(this).next(".title-box + p");

    // 모든 .accordion-content 요소를 숨기고 현재 선택된 content만 표시
    $(".title-box + p").not(content).slideUp();
    content.slideToggle();
  });

  $("#copyButton").click(function () {
    // 복사할 이메일 주소
    const email = "lys@futurework.site";

    // 임시 텍스트 영역 생성
    const tempInput = $("<input>");
    $("body").append(tempInput);
    tempInput.val(email).select();
    document.execCommand("copy");
    tempInput.remove();

    // 알림 표시
    $("#notification").fadeIn().delay(2000).fadeOut();
  });
});
