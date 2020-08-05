// Mapオブジェクトに値を追加
let m = new Map();
m.set("dog", "ワンワン");
m.set("cat", "ニャー");
m.set("mouse", "チュー");

console.log(m.size);
console.log(m.get("dog"));
console.log(m.has("cat"));

// キーを順に取得
for (let key of m.keys()) {
  console.log(key);
}
// 値を順に取得
for (let value of m.values()) {
  console.log(value);
}
// キー／値を順に取得
for (let [key, value] of m) {
  console.log(key + "：" + value);
}

// キーdogを削除
m.delete("dog");
console.log(m.size);

// すべてのキー／値を破棄
m.clear();
console.log(m.size);
