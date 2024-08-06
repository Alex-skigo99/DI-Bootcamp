import { connect } from "react-redux";
import { REMOVE_TASK, TOGGLE_TASK, removeTask, toggleTask } from "./actions";

function TaskList(props) {

    return (
        <div>
            <ul>
                {props.tasks.map((task) => (
                    <li key={task.id}>
                        <input
                            type="checkbox"
                            checked={task.completed}
                            onChange={() => props.toggle(task.id)}
                        />
                        {task.text}
                        <button onClick={() => props.remove(task.id)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
      tasks: state.taskReducer.tasks,
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      remove: (id) => dispatch(removeTask(id)),
      toggle: (id) => dispatch(toggleTask(id)),
    };
  };
  
export default connect(mapStateToProps,mapDispatchToProps)(TaskList);