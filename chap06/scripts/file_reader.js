window.addEventListener("DOMContentLoaded", function () {
  document.getElementById("file").addEventListener(
    "change",
    function (e) {
      // 選択されたファイルを取得（単一選択なので、0で決め打ち）
      var input = document.getElementById("file").files[0];
      var reader = new FileReader();
      reader.addEventListener(
        "load",
        function () {
          document.getElementById("result").textContent = reader.result;
        },
        false
      );
      reader.readAsText(input, "UTF-8");
    },
    true
  );
});
