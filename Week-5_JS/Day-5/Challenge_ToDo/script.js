// Recreate the todo list above:

// Create an HTML, CSS and a JS file.

// In the HTML file
// create a form with one input type="text", and a “Submit” button.
// add an empty div below the form
// <div class="listTasks"></div>

// In the js file, you must add the following functionalities:
// Create an empty array : const tasks = [];

// Create a function called addTask(). As soon as the user clicks on the button:
// check that the input is not empty,
// then add it to the array (ie. add the text of the task)
// then add it to the DOM, below the form (in the <div class="listTasks"></div>) .
// Each new task added should have (starting from left to right - check out the image at the top of the page)
// a “X” button. Use font awesome for the “X” button.
// an input type="checkbox". The label of the input is the task added by the user.

// BONUS I (not mandatory):
// Change the variable tasks to an array of task objects.
// Each new task added to the array should have the properties : task_id, text and done (a boolean - false by default).
// Every new task object should have a task_id, starting from 0, and a data-task-id attribute, 
// which value is the same as the task_id. Check out data-* attributes here.
// Create a function named doneTask(), that as soon as the user clicks on the “checkbox” input, 
// the done property should change from false to true in the object, and from black to crossed out red in the DOM.

// BONUS II (not mandatory):
// Create a function named deleteTask(), that as soon as the user clicks on the “X” button, delete that specific task from the array listTasks.

let tasks = {};
let id = 0;
let listTasks = document.getElementById('list_tasks');
let new_task_elem = document.getElementById('new_task');

function createTaskDom(task_id, text) {
    let taskDom = document.createElement('div');  // add task container
    listTasks.appendChild(taskDom);
    taskDom.id = `task_id_${task_id}`;
    taskDom.classList.add('task');
    
    let taskDom_btn = document.createElement('button');  // add x-button
    taskDom.appendChild(taskDom_btn);
    taskDom_btn.type = 'button';
    taskDom_btn.id = `btn_id_${task_id}`;
    taskDom_btn.innerText = 'X';
    taskDom_btn.classList.add('x-button');
    taskDom_btn.addEventListener('click', deleteTask);
    
    let taskDom_input = document.createElement('input'); // add check-box
    taskDom.appendChild(taskDom_input);
    taskDom_input.type = 'checkbox';
    taskDom_input.id = `chb_id_${task_id}`;
    taskDom_input.name = `chb_id_${task_id}`;
    taskDom_input.classList.add('check_box');
    taskDom_input.addEventListener('change', setTaskDone);
    
    let taskDom_label = document.createElement('label');  // add task text
    taskDom.appendChild(taskDom_label);
    taskDom_label.for = `chb_id_${task_id}`;
    taskDom_label.id = `lbl_id_${task_id}`;
    taskDom_label.innerText = text;
    taskDom_label.classList.add('task-text');
}

// submit function
function addTask(e) {
    e.preventDefault();
    let new_task_text = new_task_elem.value;
    console.log(new_task_text);
    tasks[id] = {
            text: new_task_text,
            done: false
        };
    console.log(tasks); //-------
    createTaskDom(id, new_task_text);
    id += 1;
    new_task_elem.value = '';
};

// check-box change function
function setTaskDone(e) {
    taskId = Number(e.target.id.split('_')[2]);
    console.log(taskId);    // ---------
    console.log(e.target.checked);
    let label = document.getElementById(`lbl_id_${taskId}`);
    if (e.target.checked) {
        tasks[taskId].done = true;
        label.classList.add('done');
    }
    else {
        tasks[taskId].done = false;
        label.classList.remove('done');
    };
};

// delete Task function
function deleteTask(e) {
    taskId = Number(e.target.id.split('_')[2]);
    document.getElementById(`task_id_${taskId}`).remove();
    delete tasks[taskId];
}