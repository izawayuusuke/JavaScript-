document.addEventListener(
  "DOMContentLoaded",
  function () {
    window.addEventListener(
      "message",
      function (e) {
        var origin = "http://localhost:8000";
        if (e.origin !== origin) {
          return;
        }
        document.getElementById("result").textContent = e.data;
        // 現在の日付を返送
        var current = new Date();
        e.source.postMessage(current, origin);
      },
      false
    );
  },
  false
);
