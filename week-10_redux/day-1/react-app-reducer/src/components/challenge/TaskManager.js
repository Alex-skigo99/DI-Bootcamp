import { TaskProvider } from "./TaskProvider";
import TaskAdder from "./TaskAdder";
import TaskList from "./TaskList";

function TaskManager() {
  return (
    <>
      <TaskProvider>
        <h1>Task Manager</h1>
        <TaskAdder />
        <TaskList />
      </TaskProvider>
    </>
  );
}

export default TaskManager;
