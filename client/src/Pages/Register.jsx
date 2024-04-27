import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";
import axios from "axios";
import InputBox from "../Component/InputBox";

function Register() {
  const [formData, setFormData] = useState({
    fullname: "",
    phone: "",
    city: "",
    country: "",
    email: "",
    password: "",
  });

  const inputFields = [
    { name: "fullname", placeholder: "Enter Name" },
    { name: "phone", placeholder: "Enter Phone Number" },
    { name: "city", placeholder: "Enter City Name" },
    { name: "country", placeholder: "Enter Country Name" },
    { name: "email", placeholder: "Enter Email" },
    { name: "password", placeholder: "Enter Password" },
  ];

  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; // regex for email
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/; // regex for password
  const phoneRegex = /^\d{10}$/; // regex for phone number
  const navigate = useNavigate();

  useEffect(() => {
    setFormData({
      fullname: "",
      phone: "",
      city: "",
      country: "",
      email: "",
      password: "",
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const register = async () => {
    if (!formData.fullname.trim()) {
      return toast.error("Name is required");
    }
    if (!formData.phone.trim()) {
      return toast.error("Phone number is required");
    }
    if (!phoneRegex.test(formData.phone)) {
      return toast.error("Phone number is not valid");
    }
    if (!formData.city.trim()) {
      return toast.error("City is required");
    }
    if (!formData.country.trim()) {
      return toast.error("Country is required");
    }
    if (!formData.email.trim()) {
      return toast.error("Email is required");
    }
    if (!emailRegex.test(formData.email)) {
      return toast.error("Email is not valid");
    }
    if (!formData.password.trim()) {
      return toast.error("Password is required");
    }
    if (!passwordRegex.test(formData.password)) {
      return toast.error(
        "Password must be between 6 to 20 characters and contain at least one numeric digit, one uppercase and one lowercase letter"
      );
    }

    try {
      const response = await axios.post("http://localhost:2525/auth/register", formData);
      console.log(response);
      toast.success("Register successfully");
      navigate("/login");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-[#3f8c48]  w-[400px] px-10 py-10 rounded-xl">
        <Toaster />
        <div>
          <h1 className="text-center text-white text-xl mb-4 font-bold">Register</h1>
        </div>
        {inputFields.map((field, index) => (
          <InputBox
            key={index}
            type={field.name === "password" ? "password" : "text"}
            name={field.name}
            placeholder={field.placeholder}
            value={formData[field.name]}
            handleChange={handleChange}
          />
        ))}
        <div className="flex justify-center mb-3">
          <button
            className="bg-[#173d1c] w-full text-black font-bold px-2 py-2 rounded-lg"
            onClick={register}
          >
            Register
          </button>
        </div>
        <div>
          <h2 className="text-white">
            Already Registered{" "}
            <Link className="text-[#173d1c] font-bold" to={"/login"}>
              Login
            </Link>
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Register;
