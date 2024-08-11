import { useDispatch } from "react-redux";
import { useRef } from 'react';
import { addTask } from "./tasksSlice";

function TaskAdder(props) {
    const newTask = useRef();
    const dispatch = useDispatch();

    const handleAddTask = () => {
        if (newTask.current.value.trim() === "") return;
        dispatch(addTask(newTask.current.value));
        newTask.current.value = '';
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Add a new task"
                ref={newTask}
            />
            <button onClick={handleAddTask}>Add Task</button>
        </div>
    );
}

export default TaskAdder;