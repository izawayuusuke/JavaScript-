var Area = function () {}; // コンストラクター

Area.version = "1.0"; // 静的プロパティの定義

// 静的メソッドtriangleの定義
Area.triangle = function (base, height) {
  return (base * height) / 2;
};

// 静的メソッドdiamondの定義
Area.diamond = function () {
  return (width * height) / 2;
};

console.log("Areaクラスのバージョン：" + Area.version);
console.log("三角形の面積：" + Area.triangle(5, 3));

var a = new Area();
console.log("菱形の面積：" + a.diamond(10, 2));
