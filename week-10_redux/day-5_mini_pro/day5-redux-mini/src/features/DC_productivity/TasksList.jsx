import { useDispatch } from "react-redux";
import { removeTask, toggleTask } from "./tasksSlice";
import { useSelectTasksByCategory } from "./hooks";

const TasksList = () => {
    const renderTasks = useSelectTasksByCategory();
    console.log('TasksList: ', renderTasks); //------------------
    const dispatch = useDispatch();

    return (
        <div>
            <ul>
                {renderTasks.map((task) => (
                    <li key={task.id}>
                        <input
                            type="checkbox"
                            checked={!task.active}
                            onChange={() => dispatch(toggleTask(task.id))}
                        />
                        {task.text}
                        <button onClick={() => dispatch(removeTask(task.id))}>Remove</button>
                        {task.category}
                    </li>
                ))}
            </ul>
        </div>
    )
};

export default TasksList;