import { BrowserRouter as Router, Routes,Route, Navigate } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./components/Home";



// Protected Route Component
const ProtectedRoute = ({ element }) => {
  const user = localStorage.getItem("user"); // Check if user exists
  return user ? element : <Navigate to="/signin" />;
};

function App() {



  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/signup" />} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/signin" element={<Login/>} />
          {/* Protected Home Route */}
          <Route path="/home" element={<ProtectedRoute element={<Home />} />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
