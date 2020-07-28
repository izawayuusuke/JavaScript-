document.addEventListener(
  "DOMContentLoaded",
  function () {
    // 指定されたラジオボタン（name）の値を設定
    var setRadioValue = function (name, value) {
      var elems = document.getElementsByName(name);

      // ラジオボタンを走査し、値の等しいものを検出
      for (var i = 0, len = elems.length; i < len; i++) {
        var elem = elems.item(i);
        // 引数valueと等しい値を持つ項目を選択状態に
        if (elem.value === value) {
          elem.checked = true;
          break;
        }
      }
    };

    // ラジオボタンfoodの初期値を「餃子」に
    setRadioValue("food", "餃子");
  },
  false
);
