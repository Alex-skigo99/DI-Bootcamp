import { TaskProvider } from "./TaskProvider";
import TaskAdder from "./TaskAdder";
import TaskList from "./TaskList";
import TaskFilter from "./TaskFilter";

function TaskManager() {
  return (
    <>
      <TaskProvider>
        <h1>Task Manager</h1>
        <TaskAdder />
        <TaskFilter />
        <TaskList />
      </TaskProvider>
    </>
  );
}

export default TaskManager;
