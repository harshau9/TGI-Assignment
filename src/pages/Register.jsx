import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  const handleSignup = async () => {
    const payload = {
      name,
      email,
      password,
    };
    fetch("https://puzzled-clothes-ox.cyclic.app/users/register", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
      });
    navigate("/login");
  };

  return (
    <div className="border-2 w-4/5 md:w-1/2 lg:w-2/6 border-gray-200 m-auto mt-6  rounded-2xl text-center">
      <p className="my-6 text-3xl font-bold">Create your account</p>
      <div className="w-3/4 m-auto text-left">
        <label className="text-md font-semibold">Name</label>
        <br />
        <input
          className="w-full border-gray-200 border-2 p-2 mb-5 h-11 rounded-md"
          placeholder="Enter Name"
          value={name}
          type="text"
          onChange={(e) => setName(e.target.value)}
        />
        <label className="text-md font-semibold">Email</label>
        <br />
        <input
          className="w-full border-gray-200 border-2 p-2 mb-5 h-11 rounded-md"
          placeholder="Enter Email"
          value={email}
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label className="text-md font-semibold">Password</label>
        <br />
        <div className="relative">
          <input
            className="w-full border-gray-200 border-2 p-2 mb-5 h-11 rounded-md"
            placeholder="Enter Password"
            value={password}
            type={isVisible ? "text" : "password"}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="absolute top-0 right-0 mt-3 mr-2 text-sm font-semibold text-gray-600 focus:outline-none"
            onClick={() => setIsVisible(!isVisible)}
          >
            {isVisible ? "Hide" : "Show"}
          </button>
        </div>
        <button
          className="bg-black text-white my-5 mt-10 h-11 w-full rounded-md"
          onClick={handleSignup}
        >
          Create Account
        </button>
        <p className="w-full my-5 mb-5 text-center">
          Have an Account?{" "}
          <button className="font-semibold" onClick={() => navigate("/login")}>
            LOGIN
          </button>
        </p>
      </div>
    </div>
  );
};

export default Register;
