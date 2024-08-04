import { useState, useContext, createContext } from 'react';
import Display from './Display';
import Action from './Action';

export const AppContext = createContext()

function Class() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Counter</h1>
      <AppContext.Provider value={{ count, setCount }}>
        <Display count={count} />
        <Action setCount={setCount} />
      </AppContext.Provider>
    </div>
  );
}

export default Class;
