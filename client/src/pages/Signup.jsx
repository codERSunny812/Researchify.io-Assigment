import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Signup Form Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URI}/api/auth/signup`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            password: formData.password,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Signup failed");
      }

      alert("Signup successful! Redirecting to login...");
      navigate("/signin"); // Redirect to login page
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="w-full h-screen flex justify-center items-center bg-black">
      <div className="border-2 border-amber-200 p-6 rounded-lg shadow-lg bg-gray-900 text-white w-96">
        <h1 className="text-3xl font-bold text-center mb-6">Signup</h1>
        {error && <p className="text-red-500 text-center">{error}</p>}
        <form className="flex flex-col space-y-4 mb-4" onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <label htmlFor="name" className="mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="border-2 border-amber-200 p-2 rounded bg-gray-800 text-white focus:outline-none"
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="border-2 border-amber-200 p-2 rounded bg-gray-800 text-white focus:outline-none"
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password" className="mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="border-2 border-amber-200 p-2 rounded bg-gray-800 text-white focus:outline-none"
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="confirmPassword" className="mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              className="border-2 border-amber-200 p-2 rounded bg-gray-800 text-white focus:outline-none"
              onChange={handleChange}
              required
            />
          </div>
          <button
            type="submit"
            className="bg-amber-200 text-black font-bold p-2 rounded w-full mt-4 hover:bg-amber-300 transition"
          >
            Signup
          </button>
        </form>
        <span className="m-10">
          Already have an account?{" "}
          <Link to="/signin" className="text-amber-200">
            Signin
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Signup;
