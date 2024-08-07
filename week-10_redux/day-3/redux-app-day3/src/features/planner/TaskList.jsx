import { useSelector, useDispatch } from "react-redux";
import { removeTask, toggleTask } from "./plannerSlice";
import TaskEditer from "./TaskEditer";

function TaskList(props) {
    const tasks_all = useSelector((state) => state.plannerReducer.tasks);
    const currentDate = useSelector((state) => state.plannerReducer.currentDate);
    const dispatch = useDispatch();
    let tasks = tasks_all;
    if (currentDate !== 'all') tasks = tasks_all ? tasks_all.filter((task) => task.date == currentDate) : [];

    return (
        <div className="list">
            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>
                        {task.date}
                        <input
                            type="checkbox"
                            checked={!task.active}
                            onChange={() => dispatch(toggleTask(task.id))}
                        />
                        <button onClick={() => dispatch(removeTask(task.id))}>Remove</button>
                        {task.text}
                        <TaskEditer id={task.id} />
                    </li>
                ))}
            </ul>
        </div>
    )
};

export default TaskList;