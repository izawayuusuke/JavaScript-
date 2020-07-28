document.addEventListener(
  "DOMContentLoaded",
  function () {
    // 指定されたチェックボックス（配列name）の値を設定
    var setCheckValue = function (name, value) {
      var elems = document.getElementsByName(name);

      // チェックボックスを走査し、該当する値を持つものを検出
      for (var i = 0, len = elems.length; i < len; i++) {
        var elem = elems.item(i);
        // 配列valueにvalue属性と等しい値が含まれる場合は選択状態に
        if (value.indexOf(elem.value) > -1) {
          elem.checked = true;
        }
      }
    };

    // チェックボックスfoodの初期値を「餃子」「焼き肉」に
    setCheckValue("food", ["餃子", "焼き肉"]);
  },
  false
);
