
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./componenets/Navbar";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Register/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
