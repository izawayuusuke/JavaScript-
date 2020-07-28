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
      // ファイル読み込み時にエラーが発生した場合、その結果をログ表示
      reader.addEventListener(
        "error",
        function () {
          console.log(reader.error.message);
        },
        true
      );
      reader.readAsText(input, "UTF-8");
      // エラーを発生させるため、読み込み直後に処理を中止
      reader.abort();
    },
    true
  );
});
