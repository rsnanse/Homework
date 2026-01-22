(function (factory) {
  typeof define === 'function' && define.amd ? define(factory) :
  factory();
})((function () { 'use strict';

  class Task {
    constructor(message) {
      this.message = message;
    }

    run() {
      console.log(this.message);
    }
  }

  class User {
    constructor(task) {
      this.task = task;
    }

    do() {
      this.task.run();
    }
  }

  const task1 = new Task('Давай учи JS!!!!!!');
  const user1 = new User(task1);
  user1.do();

}));
