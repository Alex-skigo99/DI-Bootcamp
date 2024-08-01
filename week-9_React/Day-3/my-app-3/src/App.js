// import logo from './logo.svg';
import { useState } from 'react';

import './App.css';
import Counter from './components/Counter';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <Counter count={count} setCount={setCount} />
    </div>
  );

  // return (
  //   <div className="App">
  //     <Counter />
  //   </div>
  // );
}

export default App;

{/* <div className="App">
<header className="App-header">
  <h2>Good morning!</h2>
  <img src={logo} className="App-logo" alt="logo" />
  <p>
    Edit <code>src/App.js</code> and save to reload.
  </p>
  <a
    className="App-link"
    href="https://reactjs.org"
    target="_blank"
    rel="noopener noreferrer"
  >
    Learn React
  </a>
</header>
</div> */}
