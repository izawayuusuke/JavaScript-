// 高階関数arrayWalkを定義
function arrayWalk(data, f) {
  for (var key in data) {
    f(data[key], key);
  }
}

// 配列を処理するためのユーザー定義関数
function showElement(value, key) {
  console.log(key + "：" + value);
}

var ary = [1, 2, 4, 8, 16];
arrayWalk(ary, showElement);
