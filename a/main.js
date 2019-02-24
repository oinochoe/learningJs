$(document).ready(function(){
    'use strinct';

    paper.install(window);                               // paper를 전역 스코프에 설치
    paper.setup(document.getElementById('mainCanvas'));  // paper.js를 캔버스에 연결, paper.js가 그림을 그릴 수 있도록 준비

    var c = Shape.Circle(200, 200, 80);
    c.fillColor = 'black';
    var text = new PointText(200, 200);
        text.justification = 'center';
        text.fillColor = 'white';
        text.fontSize = 20;
        text.content = 'hello world';

    var tool = new Tool();                               // 객체를 만들어 이벤트 핸들러를 연결하자.

    tool.onMouseDown = function(event) {                 // onMouseDown 이벤트 핸들러 연결.
        var c = Shape.Circle(event.point.x, event.point.y, 20);
        c.fillColor = 'green';
    };

    paper.view.draw();                                   // paper.js 가 실제로 화면에 그림을 그리라는 명령
});