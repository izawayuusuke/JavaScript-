document.addEventListener(
  "DOMContentLoaded",
  function () {
    var list = document.getElementById("list");
    var pic = document.getElementById("pic");
    var del = document.getElementById("del");

    // <ul id="list">配下（リンク）をクリックしたときの処理
    list.addEventListener(
      "click",
      function (e) {
        // data-isbn属性からアンカータグにひも付いたisbn値を取得
        var isbn = e.target.getAttribute("data-isbn");

        // isbn値が取得できた場合にのみ処理を実行
        if (isbn) {
          var img = document.createElement("img");
          img.src =
            "http://www.wings.msn.to/books/" + isbn + "/" + isbn + ".jpg";
          img.alt = e.target.textContent;
          img.height = 150;
          img.width = 108;
          // <div>要素配下に<img>要素が存在するか（画像を表示中か）を確認
          if (pic.getElementsByTagName("img").length > 0) {
            // <img>要素が存在する場合、新たな<img>要素で変換
            pic.replaceChild(img, pic.lastChild);
          } else {
            // <img>要素が存在しない場合、新たに追加し、[削除]ボタンを有効に
            del.disabled = false;
            pic.appendChild(img);
          }
        }
      },
      false
    );

    // [削除]ボタンがクリックされた時の処理
    del.addEventListener(
      "click",
      function () {
        // <div id="pic">配下の子要素を削除し、[削除]ボタンを無効に
        pic.removeChild(pic.lastChild);
        del.disabled = true;
      },
      false
    );
  },
  false
);
