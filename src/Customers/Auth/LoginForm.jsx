import { Button, Grid, TextField } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUser, login } from "../State/Auth/Action";

const LoginForm = () => {
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
const auth = useSelector((store) => store);


  const navigate = useNavigate();
  
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const userData = {
      email: formData.get("email"),
      password: formData.get("password"),
    };

    dispatch(login(userData));
dispatch(getUser(jwt));

    // console.log(userData);
  };

  return (
    <div className="">
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="password"
              label="Password"
              type="password"
              name="password"
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              fullWidth
              sx={{ padding: ".8rem 2rem", backgroundColor: "#4f46e5" }}
              type="submit"
            >
              login
            </Button>
          </Grid>
        </Grid>
      </form>
      <div className="flex justify-center p-2 items-center">
        <div className="flex items-center justify-center ">
          <p>don't have an account ?</p>
          <Button
            size="small"
            className="ml-3 lo "
            onClick={() => navigate("/register")}
          >
            Register
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
