import { useDispatch } from "react-redux";
import { useRef } from 'react';
import { addTask } from "./taskSlice";

function TaskInput() {
    const newTask = useRef<HTMLInputElement>(null);
    const dispatch = useDispatch();
    console.log('render TaskInput');

    const handleAddTask = () => {
        if (newTask.current) {
            if (newTask.current.value.trim() === "") return;
            dispatch(addTask(newTask.current.value));
            newTask.current.value = ''
        }
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
    )
};

export default TaskInput;