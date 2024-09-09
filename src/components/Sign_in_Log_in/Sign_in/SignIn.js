"use client";
import { FaGoogle } from "react-icons/fa";

function SignIn() {
  const handleGoogleSignIn = () => {
    // Add Google sign-in logic here (Firebase, OAuth, etc.)
    console.log("Sign in with Google");
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Sign Up</h2>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Your Name"
          />
        </div>
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
          Sign Up
        </button>
      </form>
      
      {/* Google Sign In Button */}
      <div className="mt-4">
        <button
          onClick={handleGoogleSignIn}
          className="flex items-center justify-center w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600"
        >
          <FaGoogle className="mr-2" /> Sign in with Google
        </button>
      </div>
    </div>
  );
}

export default SignIn;
