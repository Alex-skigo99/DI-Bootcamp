import TaskAdder from "./TaskAdder";
import TaskList from "./TaskList";


function Planner() {
    return (
        <>
            <h1>Planner</h1>
            <TaskAdder />
            <TaskList />
        </>
    );
}

export default Planner;