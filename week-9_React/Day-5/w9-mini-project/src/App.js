import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Calculator from "./challenge_calculator/Calculator";
import Quote from './Quote_generator/Quote';
import Snap from './snap_shot/Snap';
import Navbar from "./components/Navbar";


function App() {
  return (
    <div className="App">
      <Navbar />
        <Routes>
          <Route path="/" element={<Calculator />} />
          <Route path="/calc" element={<Calculator />} />
          <Route path="/quote" element={<Quote />} />
          <Route path="/snap" element={<Snap />} />
        </Routes>

    </div>
  );
}

export default App;
