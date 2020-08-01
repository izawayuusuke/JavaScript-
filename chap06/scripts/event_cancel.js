document.addEventListener("DOMContentLoaded", function () {
  // <a id="inner">要素のclickイベントリスナー
  document.getElementById("inner").addEventListener(
    "click",
    function (e) {
      window.alert("#innerリスナーが発生しました。");
      e.stopPropagation();
    },
    false
  );

  document.getElementById("inner").addEventListener(
    "click",
    function (e) {
      window.alert("#innerリスナー2が発生しました。");
    },
    false
  );

  // <div id="outer">要素のclickイベントリスナー
  document.getElementById("outer").addEventListener(
    "click",
    function (e) {
      window.alert("#outerリスナーが発生しました。");
    },
    false
  );
});
