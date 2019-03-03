module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": "standard",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "rules": {
        /* 마지막 쉼표에 관한 규칙을 수정했습니다.
         * 하지만 이 파일은 JSON 파일이므로, 마지막 쉼표를 허용하는
         * 이 파일에는 마지막 쉼표를 쓸 수 없습니다.
         */
        "comma-dangle" : [
            2,
            "always-multiline"
        ],
        // 세미콜론 허용
        'semi': [2, 'always'],
        // loop 상태값에 변수 넣을 수 있도록 하기
        "no-unmodified-loop-condition": 0,
        "indent":[
            2,
            4
        ],
        /* ... */
        "no-console": 0, // no-console : off 도 사용가능. 콘솔에 대해서 오류로 잡지 않는다는 선언
        //"quotes" : ["error", "double"] double 사용시 에러를 발생하라는 설정
    }
};