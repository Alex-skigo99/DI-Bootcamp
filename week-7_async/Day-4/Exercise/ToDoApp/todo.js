export class TodoList {
    constructor() {
        this.tasks = []; //{task: '', isDone: bool}
    };

    addTask(taskText) {
        this.tasks.push({task: taskText, isDone: false});
    };

    doneTask(nums) {
        nums.forEach(num => this.tasks[num].isDone = true)
    };

    getTodos() {
        this.tasks.forEach((task, i) => 
            console.log(`${i}. ${task.task}- ${task.isDone ? 'Done' : ''}`));
        return this.tasks;
    };
}

export default TodoList;