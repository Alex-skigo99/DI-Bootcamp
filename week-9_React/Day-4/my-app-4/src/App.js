import { Routes, Route, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from 'react-bootstrap/Button';
import './App.css';
import ErrorBoundary from "./components/ErrorBoundary";
import PostList from "./components/PostList";
import data from './data/data.json';
import Example1 from "./components/Example1";
import Example2 from "./components/Example2";
import Example3 from "./components/Example3";


const HomeScreen = () => {
  return <h2>Home</h2>
}

const ProfileScreen = () => {
  return <h2>ProfileScreen</h2>
}

const ShopScreen = () => {
  throw new Error('Something wrong!')
  return <h2>ShopScreen</h2>
}

const Navbar = () => {
  return (<>
    <NavLink
      to="/"
      className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "active" : ""
      }
    >
      <Button variant="outline-primary">Home</Button>
    </NavLink>
    <NavLink
      to="/profile"
      className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "active" : ""
      }
    >
      <Button variant="outline-primary">Profile</Button>
    </NavLink>
    <NavLink
      to="/shop"
      className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "active" : ""
      }
    >
      <Button variant="outline-primary">Shop</Button>
    </NavLink>
  </>)
}

const fetch_data = {
  key1: 'myusername',
  email: 'mymail@gmail.com',
  name: 'Isaac',
  lastname: 'Doe',
  age: 27
};

const postData = async () => {
  // const { data } = props;
  const options = {
    method: 'POST',
    headers: {
      "content-type": "aplication/json"
    },
    body: JSON.stringify(fetch_data)
  };
  try {
    const res = await fetch('https://webhook.site/8b498c63-94a2-4cdc-991c-f148df207bcb', options);
    const res_data = await res.json();
    console.log('res_data from postData: ', res_data);
    // return res_data
  } catch (err) {
    console.log(err);
  }
}

const Btn = () => {
  return (
    <Button variant="outline-info" onClick={postData}>Fetch</Button>
  )
}

function App() {
  return (
    <div className="App">
      // ------- ex-1 ------
      <br />
      <Navbar />
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/profile" element={<ProfileScreen />} />
          <Route path="/shop" element={<ShopScreen />} />
        </Routes>
      </ErrorBoundary>
      // ------- ex-2 ------
      <PostList />
      // ------- ex-3 ------
      <Example1 data={data.SocialMedias} />
      <Example2 data={data.Skills} />
      <Example3 data={data.Experiences} />
      // ------- ex-4 ------
      <br />
      <Btn />
    </div>
  );
}


export default App;
