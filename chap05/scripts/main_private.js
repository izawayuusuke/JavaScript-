import MyApp from "./lib/MyApp";

let app = new MyApp("secret string");

// for...in命令でも列挙できない
for (let key in app) {
  console.log(key);
}

// JSON文字列に変換してもプロパティは見えない
console.log(JSON.stringify(app));

// メソッド経由ではSECRET＿VALUEプロパティは見えない
console.log(app.checkValue("secret string"));
