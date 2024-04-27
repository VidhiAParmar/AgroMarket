import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import axios from "axios";
import InputBox from "../Component/InputBox";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; // regex for email
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/; // regex for password
  const navigate = useNavigate();

  useEffect(() => {
    setEmail("");
    setPassword("");
  }, []);

  const login = async () => {
    if (!email.length) {
      return toast.error("Email is required");
    }
    if (!emailRegex.test(email)) {
      return toast.error("Email is not valid");
    }
    if (!password.length) {
      return toast.error("Password is required");
    }
    if (!passwordRegex.test(password)) {
      return toast.error(
        "Password must be between 6 to 20 characters and contain at least one numeric digit, one uppercase and one lowercase letter"
      );
    }

    try {
      const response = await axios.post("http://localhost:2525/auth/login", {
        email,
        password,
      });
      let authToken = response.data.data.authToken;
      let userId = response.data.data.id;
      localStorage.setItem(
        "user",
        JSON.stringify({ email, password, authToken, userId })
      );
      console.log(response);
      console.log("userId is: " + userId);
      console.log(localStorage.getItem("user"));
      toast.success("Login successfully");
      navigate("/");
    } catch (error) {
      console.error("Error:", error);
      toast.error("Failed to log in. Please check your credentials.");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-[#3f8c48] w-[400px]  h-[400px] justify-center items-center px-10 py-10 rounded-xl">
        <Toaster />
        <div>
          <h1 className="text-center text-white text-xl mb-6 font-bold">Login</h1>
        </div>
        <InputBox
          type="email"
          name="email"
          placeholder="Enter Email"
          value={email}
          handleChange={(e) => setEmail(e.target.value)}
        />
        <InputBox
          type="password"
          name="password"
          placeholder="Enter Password"
          value={password}
          handleChange={(e) => setPassword(e.target.value)}
        />
        <div className="flex justify-center mb-3">
          <button
            className="bg-[#173d1c] w-full text-black font-bold px-2 py-2 rounded-lg"
            onClick={login}
          >
            Login
          </button>
        </div>
        <div>
          <h2 className="text-white mt-8">
            Don't have an account?{" "}
            <Link className="text-[#173d1c] font-bold" to={"/register"}>
              Register
            </Link>
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Login;
