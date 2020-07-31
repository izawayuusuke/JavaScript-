document.addEventListener(
  "DOMContentLoaded",
  function () {
    var elem = document.getElementById("elem");

    elem.addEventListener(
      "click",
      function () {
        // 空白区切りの文字列を分割
        var classes = this.className.split(" ");
        // highlightが存在する位置を検出
        var index = classes.indexOf("highlight");
        if (index === -1) {
          // 存在しなければ、新たに追加
          classes.push("highlight");
        } else {
          // 存在する場合には、highlightを除去
          classes.splice(index, 1);
        }
        // 配列を空白区切りの文字列に
        this.className = classes.join(" ");
      },
      false
    );
  },
  false
);
