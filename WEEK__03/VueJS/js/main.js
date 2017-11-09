/**
 * 2-Way Data Binding
 */

// Vanilla Script
(function (global, store){
  'use strict';

  // 함수가 접근 가능한 변수 리스트
  var document = global.document, demo, input, print;

  var init = function() {
    demo  = document.querySelector('.demo');
    input = demo.querySelector('.user-input');
    print = demo.querySelector('.print-input');

    initRender( store.hobby ); // 데이터가 변경되면 화면을 업데이트 하는 역할
    bind();
  };

  var bind = function() {
    input.addEventListener('keyup', update);
  };

  var initRender = function (data) {
    input.value = data;
    print.innerText = data;
  };

  var render = function(data) {
    store.hobby = data;
    print.innerText = data;
  };

  var update = function(e) {
    var value = e.target.value;
    render(value);
  };

  init(); // 양방향 데이터 바인딩 데모 실행

})(window, window.store);


// jQuery Library
;(function (global, $) {
  'use strict';

})(window, window.jQuery);


// VueJS Framework
;(function (global, Vue) {
  'use strict';

})(window, window.Vue);