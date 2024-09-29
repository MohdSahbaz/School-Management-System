import { useState } from "react";
import { Link, useParams } from "react-router-dom";

const Login = () => {
  const { role } = useParams();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!email || !password) {
      setError("Both fields are required.");
      return;
    }

    // Add login logic here
    console.log("Logging in with:", { email, password });
    setError(""); // Clear the error on successful submission
  };

  return (
    <div
      style={{ minHeight: "calc(100vh - 64px)" }}
      className="flex justify-center items-center bg-yellow-100"
    >
      <div className="bg-yellow-200 p-8 rounded-lg shadow-md max-w-md w-full">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
          Login as {role}
        </h2>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium mb-2"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border rounded-lg outline-none caret-red-700"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Password Field */}
          <div>
            <label
              htmlFor="password"
              className="block text-gray-700 font-medium mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 border rounded-lg outline-none caret-red-700"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-yellow-400 text-black py-2 rounded-lg hover:bg-yellow-500 transition-colors"
          >
            Login
          </button>
        </form>

        {/* Additional Links */}
        <div className="mt-6 text-center">
          <p>
            Don't have an account?{" "}
            <Link to="/register" className="text-yellow-700 hover:underline">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
