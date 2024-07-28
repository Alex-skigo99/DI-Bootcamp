// const User = (props) => {
//     const {id, name, username, email} = props.user
//     return (
//         <div>
//             <img src={``}
//             <h2>{name}</h2>
//             <h4>{email}</h4>
//             <p>{username}</p>
//         </div>
//     )
// };

// import "./user.css";
// import Button from "@mui/material/Button";

const User = (props) => {
  console.log(props);
  const { id, name, username, email } = props;

  const styleOptions = {
    display: "inline-block",
    border: "1px solid #000",
    padding: "20px",
    margin: "20px",
    textAlign: "center",
    backgroundColor: "lightgreen",
  };

      // className='tc dib br3 pa3 ma2 bg-light-green grow shadow-5'
      //  <div style={styleOptions}>
  return (
    <div className='users'>
      <img src={`https://robohash.org/${id}?size=150x150`} />
      <h2>{name}</h2>
      <h4>{email}</h4>
      <p>{username}</p>
    </div>
  );  // <Button variant='contained'>Contained</Button>
};

export default User;