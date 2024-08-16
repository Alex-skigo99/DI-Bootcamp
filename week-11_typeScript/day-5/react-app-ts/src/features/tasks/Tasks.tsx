import TaskInput from "./TaskInput";
import TasksList from "./TasksList";
import TaskTitle from "./TaskTitle";


function Tasks() {
    console.log('render Tasks');
    return (
        <>
            <TaskTitle />
            <TaskInput />
            <TasksList />
        </>
    );
}

export default Tasks;