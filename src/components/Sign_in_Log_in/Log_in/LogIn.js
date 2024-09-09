"use client";
import { FaGoogle } from "react-icons/fa";

function LogIn() {
  const handleGoogleLogIn = () => {
    // Add Google log-in logic here (Firebase, OAuth, etc.)
    console.log("Log in with Google");
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Log In</h2>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Your Email"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Password</label>
          <input
            type="password"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Your Password"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-dark-green text-white py-2 rounded-md hover:bg-gray-100 hover:text-black"
        >
          Log In
        </button>
      </form>
      
      {/* Google Log In Button */}
      <div className="mt-4">
        <button
          onClick={handleGoogleLogIn}
          className="flex items-center justify-center w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600"
        >
          <FaGoogle className="mr-2" /> Log in with Google
        </button>
      </div>
    </div>
  );
}

export default LogIn;
