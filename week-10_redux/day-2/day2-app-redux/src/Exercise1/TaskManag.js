import { Provider } from "react-redux";
import TaskAdder from "./TaskAdder";
import TaskList from "./TaskList";
import {store} from './store';


function TaskManager() {
  return (
    <Provider store={store}>
        <h1>Task Manager</h1>
        <TaskAdder />
        <TaskList />
    </Provider>
  );
}

