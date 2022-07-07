/*sub.js*/
//http://127.0.0.1:5500/sub.html#nike

//브라우저가 sub.html 페이지로 처음 진입했을 때
var $hash = location.hash;  //URL로부터 #을 포함한 우측의 문구 가져오기
console.log($hash);  //#nike
var $hash_txt = $hash.replace("#", "");
console.log($hash_txt);  //nike

//선택자 구성하기
var $main = document.querySelector("main");  //배너 이미지 교체
var $title = document.querySelector("#cont .wrap .title h3");  //페이지의 타이틀 교체
var $contCover = document.querySelector("#cont .wrap .cont");  //내부 이미지를 담을 공간
var $contGroup = "";  //.cont라는 공간에 넣을 가상의 빈 문자열 데이터

var hash_apply = function(){
    //hash의 적용 --> 브라우저 URL 창에서 sub.html로만 접근했을 때
    if($hash_txt){  //hash라는 정보가 존재한다면
        $main.style.backgroundImage = `url(./img/${$hash_txt}_banner.jpg)`;
        $title.textContent = $hash_txt;

        $contGroup = "";  //기존에 $contGroup이라는 변수에 담겨진 내용을 모두 비운다(제거한다). 반복문에 접근하기 이전에 진행을 시킴

        for(i=0; i<4; i++){  //i=0 -> 1 -> 2 -> 3
            //$contGroup += `<div style="background-image:url(./img/nike_01.jpg)"></div>`;  //샘플
            //$contGroup  += `<div style="background-image:url(./img/${$hash_txt}_0${i+1}.jpg)"></div>`;  

            $contGroup  += `<div style="background-image:url(./img/${$hash_txt}_0${i+1}.jpg)" onclick="location.href='./detail.html#${$hash_txt}_${i}'"></div>`; 
            //onclick="location.href='./detail.html#${$hash_txt}_${i}'" ==> 각 아이템마다 클릭했을 때 detail.html로 이동하는 과정에서 던져줄 정보값(예시, nike_3)을 함께 보낸다. 
        }
        $contCover.innerHTML = $contGroup;
    }else{  //hash라는 정보가 존재하지 않다면 => 메인 페이지로 이동을 시킨다.
        location.href = "./";  //index.html로 이동시켜라
    }
}

hash_apply();  //브라우저가 로딩되면서 함수문을 호출한다.

//sub.html 페이지에서 상단의 메뉴 클릭시
var $list = document.querySelectorAll("header .wrap nav ul li");
console.log($list);  //NodeList(3) [li, li, li]

var $body = document.querySelector("body");
var $resBtn = document.querySelector(".resBtn");
var $nav = document.querySelector("header nav");

for(const v of $list){  //const 예약어를 사용하게되면 요소(건물)의 위치를 확실하게 고정시켜버림
    console.log(v);
    v.addEventListener("click", function(){  //상단 메뉴 중에서 사용자가 어딘가를 클릭했을 때
        console.log(v);
        $hash_txt = v.getAttribute("rel");  //기존 해시로부터 받아온 값에서 각 li태그에 담긴 내용(속성값)으로 변경하겠다는 의미
        console.log($hash_txt);  //클릭한 li태그에 담긴 rel의 속성값

        hash_apply();  //상단에 선언된 함수를 다시 호출한다.

        $body.classList.remove("showMenu");
        $resBtn.classList.remove("active");
        $nav.classList.remove("active");
    });
}