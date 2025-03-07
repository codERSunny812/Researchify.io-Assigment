import { BrowserRouter as Router, Routes,Route, Navigate } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./components/Home";

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/signup" />} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/signin" element={<Login/>} />
          <Route path="/home" element={<Home/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
