import TodoList from "./todo.js";

const myTodo = new TodoList();
myTodo.addTask('To do my Exercise XP');
myTodo.addTask('Read the book');
myTodo.addTask('To do my Dayly Challenge');
myTodo.doneTask([0, 2]);
let tasks = myTodo.getTodos();
