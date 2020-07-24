// Animalクラスと、これを継承したHamsterクラスを準備
var Animal = function () {};
var Hamster = function () {};
Hamster.prototype = new Animal();

var a = new Animal();
var h = new Hamster();
console.log(a.constructor === Animal);
console.log(h instanceof Animal);
console.log(h instanceof Hamster);
