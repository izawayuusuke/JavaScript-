document.addEventListener(
  "DOMContentLoaded",
  function () {
    // 指定された要素elemがクリックされた回数をカウントするCounterクラス
    var Counter = function (elem) {
      this.count = 0;
      this.elem = elem;
      elem.addEventListener(
        "click",
        () => {
          this.count++;
          this.show();
        },
        false
      );
    };

    // カウンター情報を表示するためのshowメソッド
    Counter.prototype.show = function () {
      console.log(this.elem.id + "は" + this.count + "回クリックされました。");
    };

    // <button>要素btnにカウンターをひも付け
    var c = new Counter(document.getElementById("btn"));
  },
  false
);
