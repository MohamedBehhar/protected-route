import { Link, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";
import Layout from "./components/Layout";
import Login from "./components/Login";
import RequireAuth from "./components/RequireAuth";

function App() {
  const ROLES = {
    'User': 2001,
    'Editor': 1984,
    'Admin': 5150
  }
  
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Public route  */}
          <Route path="/login" element={<Login />}></Route>
          {/* admin routes  */}
          <Route element={<RequireAuth allowedRoles={ROLES.Admin} />}>
            <Route path="/dashboard" element={<Dashboard />}></Route>
          </Route>
          {/* user route  */}
          <Route element={<RequireAuth allowedRoles={ROLES.User} />}>
            <Route path="/home" element={<Home />}></Route>
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
