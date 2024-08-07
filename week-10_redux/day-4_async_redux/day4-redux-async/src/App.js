import './App.css';
import { Provider } from "react-redux";
import store from "./app/store.js";
import FetchData from './features/fetch_data/FetchData';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <FetchData/>
      </div>
    </Provider>
  );
}

export default App;
