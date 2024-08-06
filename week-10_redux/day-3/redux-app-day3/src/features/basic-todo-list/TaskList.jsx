import { useSelector, useDispatch } from "react-redux";
import { removeTask, toggleTask } from "./tasksSlice";

function TaskList(props) {
    const tasks = useSelector((state) => state.tasksReducer.tasks);
    const dispatch = useDispatch();

    return (
        <div>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>
                        <input
                            type="checkbox"
                            checked={!task.active}
                            onChange={() => dispatch(toggleTask(task.id))}
                        />
                        {task.text}
                        <button onClick={() => dispatch(removeTask(task.id))}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    )
};

export default TaskList;