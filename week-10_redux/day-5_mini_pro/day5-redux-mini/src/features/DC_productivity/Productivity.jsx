import TaskAdder from "./TaskAdder";
import CategorySelector from "./CategorySelector";
import TasksList from "./TasksList";

const Productivity = () => {

    return (<>
        <CategorySelector />
        <TaskAdder />
        <TasksList />
    </>)
};

export default Productivity;