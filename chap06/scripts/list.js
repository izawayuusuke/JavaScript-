document.addEventListener(
  "DOMContentLoaded",
  function () {
    // 指定されたリストボックス（name）の値を取得
    var getSelectValue = function (name) {
      // 選択値を格納するための配列
      var result = [];
      var opts = document.getElementById(name).options;
      // <option>要素を走査し、チェック状態にあるかを確認
      for (var i = 0, len = opts.length; i < len; i++) {
        var opt = opts.item(i);
        // 選択されている項目の値を配列に追加
        if (opt.selected) {
          result.push(opt.value);
        }
      }
      return result;
    };

    // ボタンクリック時に選択項目の値をダイアログ表示
    document.getElementById("btn").addEventListener(
      "click",
      function () {
        window.alert(getSelectValue("food"));
      },
      false
    );
  },
  false
);
