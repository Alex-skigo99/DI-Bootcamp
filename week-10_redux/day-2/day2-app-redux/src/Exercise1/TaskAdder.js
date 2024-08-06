import { connect } from "react-redux";
import { useRef } from 'react';
import { addTask } from "./actions";

function TaskAdder(props) {
  const newTask = useRef()

  const handleAddTask = () => {
    if (newTask.current.value.trim() === "") return;
    console.log(newTask.current.value);
    props.add(newTask.current.value);
    // props.dispatch(addTask(newTask.current.value));
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

const mapDispatchToProps = (dispatch) => {
  return {
    add: (text) => dispatch(addTask(text)),
  };
};

// export default TaskAdderfsdfsf;
export default connect(null, mapDispatchToProps)(TaskAdder);