import { useDispatch } from "react-redux";
import { useRef } from 'react';
import { editTask } from "./plannerSlice";

function TaskEditer(props) {
    const newTask = useRef();
    const dispatch = useDispatch();
    const { id } = props;

    const handleEditTask = () => {
        if (newTask.current.value.trim() === "") return;
        dispatch(editTask([id, newTask.current.value]));
        newTask.current.value = '';
    };

    return (
        <>
            <input
                type="text"
                placeholder="New text"
                id="edit_text"
                ref={newTask}
            />
            <button onClick={handleEditTask}>Edit</button>
        </>
    );
}

export default TaskEditer;