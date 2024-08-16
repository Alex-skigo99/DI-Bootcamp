import { useTasksNumber } from "./taskSlice";

function TaskTitle() {
    let tasksNumber = useTasksNumber();
    console.log('render TaskTitle-', tasksNumber);

    return (
        <div>
            <h2>T A S K S</h2>
            <h3>Number of tasks = {tasksNumber}</h3>
        </div>
    )
};

export default TaskTitle;