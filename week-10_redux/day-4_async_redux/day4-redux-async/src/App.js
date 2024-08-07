import './App.css';
import { Provider } from "react-redux";
import store from "./app/store.js";
import FetchData from './features/fetch_data/FetchData';
import AgeCounter from './features/ageCounter/AgeCounter.jsx';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <FetchData/>
        <h1>Age Counter</h1>
        <AgeCounter/>
      </div>
    </Provider>
  );
}

export default App;
