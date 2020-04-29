// スリックスライダーを付ける
$(function () {
  $("#bars").on("click", function () {
    $("#menu").slideToggle(300);
  });
  $("#totop").on("click", function () {
    $("body,html").animate({ scrollTop: 0 }, 500, "swing");
  });
  $("#slider").slick({
    autoplay: true,
    autoplaySpeed: 1500,
  });
  // ↓ここからスクロールの場所の値を取る
  $(window).scroll(function () {
    let scroll = $("body,html").scrollTop();
    console.log(scroll);
    // ↓ここからもし～なら文
    if (scroll < 300) {
      $("#totop").fadeOut(200);
    } else {
      $("#totop").fadeIn(200);
    }
  });
});
