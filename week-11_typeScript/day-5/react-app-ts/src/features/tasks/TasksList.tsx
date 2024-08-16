import TaskItem from "./TaskItem";
import TaskRemove from "./TaskRemove";
import { useTasks } from "./taskSlice";

function TasksList() {
    const tasks = useTasks();
    console.log('render TaskList');

    return (
        <div>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>
                        <TaskItem {...task}/>
                        <TaskRemove id={task.id}/>
                    </li>
                ))}
            </ul>
        </div>
    )
};

export default TasksList;