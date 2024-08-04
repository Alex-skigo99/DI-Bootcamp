import './App.css';
import { useState, useContext, createContext } from 'react';
import Class from './components/class/Class';
import Exercise1 from './components/exercise1/Exercise1';
import CharacterCounter from './components/exercis2/CharacterCounter';
import TodoList from './components/exercise3/TodoList';
import TaskManager from './components/challenge/TaskManager';

function App() {
  return (
    <div className="App">
      {/* <Class/> */}
      {/* <Exercise1 /> */}
      {/* <CharacterCounter /> */}
      {/* <TodoList /> */}
      <TaskManager />
    </div>
  );
}

export default App;
