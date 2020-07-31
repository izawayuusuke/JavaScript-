document.addEventListener(
  "DOMContentLoaded",
  function () {
    var btn = document.getElementById("btn");
    var listener = function () {
      window.alert("こんにちは、世界！");
    };

    // イベントリスナーを登録
    btn.addEventListener("click", listener, false);

    // イベントリスナーを破棄
    btn.removeEventListener("click", listener, false);
  },
  false
);
