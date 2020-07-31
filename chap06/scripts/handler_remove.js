window.onload = function () {
  var btn = document.getElementById("btn");
  // イベントハンドラーを登録
  btn.onclick = function () {
    window.alert("こんにちは、世界！");
  };

  // イベントハンドラーを破棄
  btn.onclick = null;
};
