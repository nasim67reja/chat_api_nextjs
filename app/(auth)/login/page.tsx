// app/(auth)/signin/page.js or page.tsx
"use client";
import React, { useState } from "react";
// import { PUBLIC_API } from '../../../../services/axios.service';
import { PUBLIC_API } from "../../../services/axios.service";
import ApiUrls from "@/helper/ApiUrls";
import { REFRESH_TOKEN, TOKEN } from "@/config/config";

const SigninPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    // try {
    //   const response = await fetch("http://localhost:8000/api/signin/", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(formData),
    //   });

    //   if (response.ok) {
    //     const result = await response.json();
    //     setSuccess("Sign in successful!"); // Display a success message
    //     console.log("Sign in successful:", result);
    //   } else {
    //     const errorData = await response.json();
    //     setError(errorData.message || "Sign in failed! Please try again."); // Display error message from API
    //     console.error("Sign in error:", errorData);
    //   }
    // } catch (error) {
    //   setError("An error occurred while signing in. Please try again."); // Handle network or other errors
    //   console.error("Network error:", error);
    // }

    PUBLIC_API.post(ApiUrls.SIGN_IN, formData)
      .then((res) => {
        const resuserData = res.data;
        // console.log("resuserData", resuserData);
        localStorage.setItem(TOKEN, resuserData.idToken);
        localStorage.setItem(REFRESH_TOKEN, resuserData.refreshToken);
      })
      .catch((err) => {
        console.log("err", err);
      })
      .finally(() => {});
  };

  return (
    <div className="w-full max-w-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>
      {error && <p className="text-red-500 text-center mb-4">{error}</p>}
      {success && <p className="text-green-500 text-center mb-4">{success}</p>}
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            name="username"
            type="text"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
};

export default SigninPage;
