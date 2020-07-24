// Animalクラスと、これを継承したHamsterクラスを準備
var Animal = function () {};
var Hamster = function () {};
Hamster.prototype = new Animal();

var a = new Animal();
var h = new Hamster();
console.log(Hamster.prototype.isPrototypeOf(h));
console.log(Animal.prototype.isPrototypeOf(h));
