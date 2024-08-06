import { useSelector, useDispatch } from "react-redux";
import { useRef } from 'react';
import { addTask, setCurrentDate } from "./plannerSlice";

function TaskAdder(props) {
    const newTask = useRef();
    const date = useRef();
    const dispatch = useDispatch();
    const currentDate = useSelector((state) => state.plannerReducer.currentDate);


    const handleAddTask = () => {
        if (newTask.current.value.trim() === "") return;
        dispatch(addTask([currentDate, newTask.current.value]));
        newTask.current.value = '';
    };

    const handleSetDate = () => {
        dispatch(setCurrentDate(date.current.value))
    };

    return (
        <div>
            <label htmlFor="date">Date: </label>
            <input
                type="date"
                id="date"
                defaultValue="06/08/2024"
                ref={date}
            />
            <button onClick={handleSetDate}>Set date</button>
            <br />
            <h3>Tasks for {currentDate}</h3>
            <input
                type="text"
                id="new_task_text"
                placeholder="Add a new task"
                ref={newTask}
            />
            <button onClick={handleAddTask}>Add Task</button>
        </div>
    );
}

export default TaskAdder;