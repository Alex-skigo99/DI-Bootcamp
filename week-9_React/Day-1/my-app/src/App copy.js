import users from "./users.json";
import User from "./components/User";
import "./components/user.css";
import "./App.css";

// import "tachyons";

function App() {
  return (
    <div>
      <h1>Users</h1>
      {users.map((item) => {
        return <User key={item.id} {...item} />;
      })}
    </div>
  );
}

export default App;

/**
Instructions for the Exercise:

1. Create a React app.
2. Import the users.json file from the src folder.
3. Create a User component.
4. Send user information via props to the User component.
5. Display the users, with each user showing their name, email, username, and user's image.
6. For the image source, you can use: https://robohash.org/1?size=150x150.

 */
