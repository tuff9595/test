
// メイン画像 フェードイン ここから

  // メイン画像 フェードイン ここまで

// Profile画像 フェードイン ここから
$(function () {
    $(window).scroll(function () {
      const windowHeight = $(window).height();
      const scroll = $(window).scrollTop();

      $('.element').each(function () {
        const targetPosition = $(this).offset().top;
        if (scroll > targetPosition - windowHeight + 100) {
          $(this).addClass("is-fadein");
        }
      });
    });
  });
  // Profile画像 フェードイン ここまで

// 画像ページ フェードイン表示 ここから
$(function(){
    $(window).scroll(function (){
        $('.fadein').each(function(){
            var position = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > position - windowHeight + 200){
              $(this).addClass('active');
            }
        });
    });
});
// 画像ページ フェード表示 ここまで

console.log('レスポンシブ非対応');

