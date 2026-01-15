"use strict";
class Character {
  constructor(race, name, language) {
    this.race = race;
    this.name = name;
    this.language = language;
  }
  toSpeak() {
    console.log(`Меня зовут ${this.name} и я говорю на языке ${this.language}`);
  }
}

class Ork extends Character {
  constructor(race, name, language, weapon) {
    super(race, name, language);
    this.weapon = weapon;
  }

  smash() {
    console.log(`Наношу удар с помощью ${this.weapon}`);
  }

  toSpeak() {
    console.log(`Мое имя - ${this.name}. Мой язык - ${this.language}`);
  }
}

class Elf extends Character {
  constructor(race, name, language, spell) {
    super(race, name, language);
    this.spell = spell;
  }

  createSpell() {
    console.log(`Использую заклинание ${this.spell}`);
  }

  toSpeak() {
    console.log(
      `${this.name} - это мое Эльфийское имя. Мой язык - ${this.language} с эльфийским акцентом`
    );
  }
}

const ork = new Ork("Орк", "Вельзевул", "Орчий", "Топор");
console.log(ork);
ork.smash();
ork.toSpeak();

const elf = new Elf("Эльф", "Мартанзас", "Эльфийский", "Вонючий ветер");
console.log(elf);
elf.createSpell();
elf.toSpeak();
