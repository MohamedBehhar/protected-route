import React, { useState } from "react";
import { TextField } from "@mui/material";
import axios from "../api/axios";
import { Navigate, useNavigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
const LOGIN_URL = "/auth/login";

const Login = () => {
  const { setAuth } = useAuth();
  const navigate = useNavigate();

  // login data object
  const [loginData, setLoginData] = useState({});

  // redirect the user to the desired page
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  // handel input change
  const handelOnChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handelSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(LOGIN_URL, loginData);
      const accessToken = res?.data?.access_token;
      const roles = res?.data?.roles;
      const user = loginData.email;
      const password = loginData.password;
      navigate(from);
      setAuth({ user, password, roles, accessToken });
    } catch (error) {}
  };

  return (
    <div className="flex justify-center items-center h-[700px]">
      <form onSubmit={handelSubmit} className="grid grid-cols-1 gap-2">
        <TextField
          id="outlined-basic"
          type="email"
          label="Email"
          required="true"
          variant="outlined"
          name="email"
          onChange={handelOnChange}
        />
        <TextField
          id="outlined-basic"
          label="Password"
          required="true"
          variant="outlined"
          name="password"
          onChange={handelOnChange}
        />
        <button
          type="submit"
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          login
        </button>{" "}
      </form>
    </div>
  );
};

export default Login;
