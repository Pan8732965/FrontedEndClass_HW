// 獲取工具列
var nav = document.querySelector('nav');
// 紀錄上一個滾動位置
var prevScrollpos = window.pageYOffset;

// 監聽滾動事件
window.onscroll = function() {
    // 獲取當前滾動位置
    var currentScrollPos = window.pageYOffset;

    // 如果上一個滾動位置大於當前滾動位置，則顯示工具列
    if (prevScrollpos > currentScrollPos) {
        nav.style.top = "0";
    } else {
        // 否則隱藏工具列
        nav.style.top = "-60px";
    }

    // 更新上一個滾動位置
    prevScrollpos = currentScrollPos;
}
