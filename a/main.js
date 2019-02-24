$(document).ready(function(){
    'use strinct';

    paper.install(window);                               // paper를 전역 스코프에 설치
    paper.setup(document.getElementById('mainCanvas'));  // paper.js를 캔버스에 연결, paper.js가 그림을 그릴 수 있도록 준비

    var c = Shape.Circle(200, 200, 50);                  // 원 객체를 만들고, 객체를 만들기 위해 매개변수 세가지를 받습니다. (x,y,반지름)
                                                         // 캔버스의 너비와 높이가 각각 400픽셀이었으므로 중심은 (200,200) 반지름은 캔버스 너비 높이의 1/8
    c.fillColor = 'rgb(120,120,120)';                    // 채울 색깔 fill 정함.

    paper.view.draw();                                   // paper.js 가 실제로 화면에 그림을 그리라는 명령
});