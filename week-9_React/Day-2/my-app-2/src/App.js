import './App.css';
import Car from './components/Car';
import Events from './components/Events';
import Phone from './components/Phone';
import Color from './components/Color';
import Vote from './components/Vote';

const carinfo = {name: "Ford", model: "Mustang"};


function App() {
  return (
    <div className="App">
      <Car {...carinfo}/>
      <Events />
      <Phone />
      <Color />
      <Vote />
    </div>
  );
}

export default App;
