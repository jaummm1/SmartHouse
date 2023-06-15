import { Route, Routes, Navigate } from "react-router-dom";
import Main from "./components/Main";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard/dashboard";
import SignUp from "./components/SignUp";
function App() {
  const user = localStorage.getItem("token");
  return (
    <Routes>
      {user && <Route path="/" element={<Main />} />}
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/Login" element={<Login />} />
      {/* <Route path="/Somos" element={<Somos />} /> */}
      <Route path="/Menu" element={<Dashboard />} />
      <Route path="/" exact element={<Navigate to="/Login" />} />
    </Routes>
  );
}

export default App;
