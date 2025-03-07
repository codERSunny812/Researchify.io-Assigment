import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const [error, setError] = useState(null);
    const navigate = useNavigate();

    // Handle Input Change
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle Login Form Submit
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);

        try {
            const response = await fetch("http://localhost:3000/api/auth/signin", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || "Login failed");
            }

            localStorage.setItem("token", data.token); // Store token
            localStorage.setItem("user", JSON.stringify(data.user)); // Store user details
            alert("Login successful! Redirecting...");
            navigate("/home"); // Redirect to Home Page
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div className="w-full h-screen flex justify-center items-center bg-black">
            <div className="p-6 rounded-lg shadow-lg bg-gray-900 text-white w-96">
                <h1 className="text-3xl font-bold text-center mb-6">Login</h1>
                {error && <p className="text-red-500 text-center">{error}</p>}
                <form className="flex flex-col space-y-4 mb-4" onSubmit={handleSubmit}>
                    <div className="flex flex-col">
                        <label htmlFor="email" className="mb-1">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="p-2 rounded bg-gray-800 text-white focus:outline-none"
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="password" className="mb-1">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="p-2 rounded bg-gray-800 text-white focus:outline-none"
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-amber-200 text-black font-bold p-2 rounded w-full mt-4 hover:bg-amber-300 transition"
                    >
                        Login
                    </button>
                </form>
                <span className="block text-center mt-2">
                    Don't have an account?{" "}
                    <Link to="/signup" className="text-amber-200">Signup</Link>
                </span>
            </div>
        </div>
    );
};

export default Login;
