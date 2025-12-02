"use strict";

const ToDoList = {
  tasks: [
    { title: "Помыть посуду", id: 1, priority: 3 },
    { title: "Вынести мусор", id: 2, priority: 2 },
    { title: "Пропылесосить", id: 3, priority: 4 },
    { title: "Заправить постель", id: 4, priority: 1 },
  ],
  addTask: function (title, priority, id) {
    return this.tasks.push({ title: title, id: id, priority: priority });
  },
  deleteTask: function (id) {
    this.tasks = this.tasks.filter((el) => el.id !== id);
    return this.tasks;
  },
  renewTask: function (id, title, priority) {
    let findTask = this.tasks.find((el) => {
      return el.id === id;
    });

    if (findTask) {
      findTask.title = title;
      findTask.priority = priority;
    }
  },

  sortTask: function () {
    this.tasks.sort((el1, el2) => {
      return el1.priority - el2.priority;
    });
  },
};
ToDoList.addTask("Полить цветы", 5, 5);
ToDoList.deleteTask(5);
ToDoList.renewTask(3, "Приготовить еду", 1);
ToDoList.sortTask();
console.log(ToDoList);
