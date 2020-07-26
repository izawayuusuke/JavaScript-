var current = new Date();
// <input name="time">要素を取得
var nam = document.getElementsByName("time");
// そのvalue属性を設定
nam[0].value = current.toLocaleTimeString();
