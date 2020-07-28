document.addEventListener(
  "DOMContentLoaded",
  function () {
    // 指定されたリストボックス（配列name）の値を設定
    var setListValue = function (name, value) {
      var opts = document.getElementById(name);

      // <option>要素を走査し、値の等しいものを検出
      for (var i = 0, len = opts.length; i < len; i++) {
        var opt = opts.item(i);
        // 配列valueにvalue属性と等しい値が含まれる場合は選択状態に
        if (value.indexOf(opt.value) > -1) {
          opt.selected = true;
        }
      }
    };

    // リストボックスfoodの初期値を「餃子」「焼き肉」に
    setListValue("food", ["餃子", "焼き肉"]);
  },
  false
);
