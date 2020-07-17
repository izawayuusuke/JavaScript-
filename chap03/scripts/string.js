var str1 = "にわにはにわにわとりがいる";
console.log(str1.indexOf("にわ")); // 先頭から検索
console.log(str1.lastIndexOf("にわ")); // 末尾から検索
console.log(str1.indexOf("にわ", 3)); // 右方向検索
console.log(str1.lastIndexOf("わ", 5)); // 左方向検索
console.log(str1.indexOf("ガーデン")); // 不一致
console.log(str1.startsWith("にわ"));
console.log(str1.endsWith("にわ"));
console.log(str1.includes("にわ"));

var str2 = "Wingsプロジェクト";
var str3 = "叱られて";
var str4 = " wings ";

console.log(str2.charAt(4)); // ５文字目を抽出
console.log(str2.slice(5, 8)); // 6~8文字目を抽出
console.log(str2.substring(5, 8)); // 6~8文字目を抽出
console.log(str2.substr(5, 3)); // 6文字目から3文字抽出
console.log(str2.split("s")); // 文字列"s"で分割
console.log(str1.split("わ", 3)); // 文字列"わ"で3分割
console.log(str2.charCodeAt(0));
console.log(String.fromCharCode(87, 105, 110, 103));
console.log(str2.concat("有限会社"));
console.log(str2.repeat(2));
console.log(str4.trim());
console.log(str2.length); // 日本語も１文字換算
