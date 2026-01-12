"use strict";

const Character = function (race, name, language) {
  this.race = race;
  this.name = name;
  this.language = language;
};

Character.prototype.toSpeak = function () {
  console.log(`Меня зовут ${this.name} и я говорю на языке ${this.language}`);
};

const Ork = function (race, name, language, weapon) {
  Character.call(this, race, name, language);
  this.weapon = weapon;
}; // здесь мы создаем конструктор Орка на основе базового конструктора Персонажа. Для этого обязательно нужно прописать call чтобы связать контекст

Ork.prototype = new Character();
/* Ork.prototype = new Character(); — создаёт новый объект на основе вызова Character, и устанавливает его как прототип Ork.
После этого перезаписываем constructor на Ork, чтобы сохранить правильное имя функции конструктора. 
Фраза Ork.prototype.constructor = Ork; устанавливается после того, как вы переназначаете прототип объекта. Это делается для того, чтобы свойство constructor правильно указывало на функцию-конструктор Ork.

Почему это важно?
По умолчанию, когда создаёте функцию-конструктор, её prototype содержит свойство constructor, ссылающееся на саму функцию.
Когда вы присваиваете Ork.prototype = Object.create(Character.prototype) или Ork.prototype = new Character(), свойство constructor у Ork.prototype исчезает или указывает неправильно.
Поэтому после такого изменения рекомендуется явно задать Ork.prototype.constructor = Ork; — это помогает сохранять правильную цепочку прототипов и корректно воспринимать объект как экземпляр Ork.*/
Ork.prototype.constructor = Ork;

Ork.prototype.smash = function () {
  console.log(`Наношу удар с помощью ${this.weapon}`);
};

const ork1 = new Ork("Орк", "Тиран", "Русский", "Меч");
console.log(ork1);
ork1.toSpeak();
ork1.smash();

const Elf = function (race, name, language, spell) {
  Character.call(this, race, name, language);
  this.spell = spell;
};

Elf.prototype = new Character();
Elf.prototype.constructor = Elf;

Elf.prototype.createSpell = function () {
  console.log(`Использую заклинание ${this.spell}`);
};

const elf1 = new Elf("Эльф", "Венера", "Эльфийский", "Вонючий ветер");

console.log(elf1);
elf1.toSpeak();
elf1.createSpell();
