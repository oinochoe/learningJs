$(document).ready(function(){
    'use strinct';

    paper.install(window);                               // paper를 전역 스코프에 설치
    paper.setup(document.getElementById('mainCanvas'));  // paper.js를 캔버스에 연결, paper.js가 그림을 그릴 수 있도록 준비

    var c;                                               // 바둑판식으로 여러개 그리기 원 64개
    for(var x=25; x<400; x+=50) {
        for(var y=25; y<400; y+=50) {
            c = Shape.Circle(x, y, 20);
            c.fillColor = 'rgb(255,100,20)';
        }
    }

    paper.view.draw();                                   // paper.js 가 실제로 화면에 그림을 그리라는 명령
});