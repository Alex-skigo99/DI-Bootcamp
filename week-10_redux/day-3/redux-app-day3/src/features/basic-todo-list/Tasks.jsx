import TaskAdder from "./TaskAdder";
import TaskList from "./TaskList";


function Tasks() {
    return (
        <>
            <h1>Task Manager</h1>
            <TaskAdder />
            <TaskList />
        </>
    );
}

export default Tasks;