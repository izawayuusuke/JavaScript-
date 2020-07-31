document.addEventListener(
  "DOMContentLoaded",
  function () {
    var elem = document.getElementById("elem");

    // クリックしたタイミングで背景色を変更
    elem.addEventListener(
      "click",
      function () {
        this.className = this.className === "highlight" ? "" : "highlight";
      },
      false
    );
  },
  false
);
