import './App.css';
import { Provider } from "react-redux";
import store from "./app/store.js";
import FetchData from './features/posts/FetchData';
import AuthorChoice from './features/users/AuthorChoice.jsx';
import BookList from './features/ex-XP_book-inventory/BookList.jsx';
import Productivity from './features/DC_productivity/Productivity.jsx';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <AuthorChoice/>
        <FetchData/> */}
        {/* <BookList/> */}
        <Productivity/>
      </div>
    </Provider>
  );
}

export default App;
