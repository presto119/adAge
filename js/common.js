/*common.js*/
var $body = document.querySelector("body");  //.showMenu
var $resBtn = document.querySelector(".resBtn");  //.active
var $nav = document.querySelector("header nav");  //.active

/*반응형 메뉴로 진입시 클릭할 대상등*/
var $menuBtn = document.querySelector(".resBtn .menuBtn");
var $closeBtn = document.querySelector(".resBtn .closeBtn");

$menuBtn.addEventListener("click", function(){
    $body.classList.add("showMenu");  //스크롤바의 동적부분을 제어
    $resBtn.classList.add("active");  //메뉴 -> 닫기 아이콘으로 변경
    $nav.classList.add("active");  //메뉴 영역을 보여준다.
});

$closeBtn.addEventListener("click", function(){
    $body.classList.remove("showMenu");
    $resBtn.classList.remove("active");
    $nav.classList.remove("active");
});