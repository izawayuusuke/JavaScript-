console.log(0.2 * 3); // 0.6000000000000001(無限循環小数)

var float = (0.2 * 10 * 3) / 10;
console.log(float); // 0.6
console.log(float === 0.6); // 小数第一位まで保証
