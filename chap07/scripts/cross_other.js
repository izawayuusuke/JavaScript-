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
      },
      false
    );
  },
  false
);
