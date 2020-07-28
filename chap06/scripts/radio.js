document.addEventListener(
  "DOMContentLoaded",
  function () {
    // 指定されたラジオボタン（name）の値を取得
    var getRadioValue = function (name) {
      var result = "";
      var elems = document.getElementsByName(name);

      // ラジオボタンを走査し、チェック状態にあるかを確認
      for (var i = 0, len = elems.length; i < len; i++) {
        var elem = elems.item(i);
        // チェックされている項目の値を配列に追加
        if (elem.checked) {
          result = elem.value;
          break;
        }
      }
      return result;
    };

    // ボタンクリック時に選択項目の値をダイアログ表示
    document.getElementById("btn").addEventListener(
      "click",
      function () {
        window.alert(getRadioValue("food"));
      },
      false
    );
  },
  false
);
