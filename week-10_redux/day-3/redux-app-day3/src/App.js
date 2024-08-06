import './App.css';
import Tasks from './features/basic-todo-list/Tasks';
import Planner from './features/planner/Planner';

function App() {
  return (
    <div className="App">
      <Tasks/>
      <Planner/>
    </div>
  );
}

export default App;
