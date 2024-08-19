import axios from "axios";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Box, TextField, Button } from "@mui/material";

const LoginRegister = ({ title }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate()

  const loginregister = async () => {
    if (title === "Login") {
      try {
        const response = await axios.post(
          "http://localhost:5001/user/login",
          { email, password },
          { withCredentials: true }
        );

        if (response.status === 200) {
          setMessage(response.data.message);
          console.log(response.data);
          navigate('/')
        }
      } catch (error) {
        console.log(error);
        setMessage(error.response.data.message);
      }
    }
    else {
      try {
        const response = await axios.post(
          "http://localhost:5001/user/register",
          { email, password },
          { withCredentials: true }
        );

        if (response.status === 201) {
          setMessage(response.data.message);
          console.log(response.data);
          // context
          navigate('/login')
        }
        else if (response.status === 200) {
          setMessage(response.data.message);
          console.log(response.data);
        }
      } catch (error) {
        console.log(error);
        setMessage(error.response.data.message);
      }
    }
  };

  return (
    <>
      <h2>{title}</h2>
      <Box component={"form"} sx={{ m: 1 }} noValidate autoComplete='off'>
        <TextField
          sx={{ m: 1 }}
          id='email'
          type='email'
          label='Enter email...'
          variant='outlined'
          onChange={(e) => setEmail(e.target.value)}
        />

        <TextField
          sx={{ m: 1 }}
          id='password'
          type='password'
          label='Enter password...'
          variant='outlined'
          onChange={(e) => setPassword(e.target.value)}
        />
      </Box>
      <Button variant='contained' onClick={loginregister}>
        {title}
      </Button>
      <div>{message}</div>
    </>
  );
};
export default LoginRegister;
