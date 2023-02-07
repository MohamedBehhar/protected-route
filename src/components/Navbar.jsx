import React from "react";
import { json, Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Navbar = () => {
  const { auth, setAuth } = useAuth();
  const navigate = useNavigate();
  const logout = () => {
    if (auth) {
      setAuth({});
      navigate("/login");
    }
  };
  return (
    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900 shadow-lg ">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <br />
            <Link to="/home" className="text-lg text-blue-900">
              Home
            </Link>
            <Link to="/dashboard" className="text-lg text-blue-900">
              Dashboard
            </Link>
          </ul>
        </div>
        <div className="login">
          <ul>
            {auth.user ? (
              <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={logout}>Logout</button>
            ) : (
              <Link to="/login" className="text-lg text-blue-900">
                Login
              </Link>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
