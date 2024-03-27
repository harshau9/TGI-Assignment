import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  const handleLogin = async () => {
    const payload = {
      email,
      password,
    };
    fetch("https://puzzled-clothes-ox.cyclic.app/users/login", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        navigate("/home");
      })
      .catch((err) => {
        alert("enter correct details not found");
        console.log(err);
      });
  };
  return (
    <div className="border-2 w-4/5 md:w-1/2 lg:w-2/6 border-gray-200 m-auto mt-6  rounded-2xl text-center">
      <p className="my-6 text-3xl font-bold">Login</p>
      <p className="my-3 text-xl font-semibold">Welocome back to ECOMMERCE</p>
      <p className="font-semobild mb-7">The next Gen business marketplace</p>
      <div className="w-3/4 m-auto text-left">
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
          onClick={handleLogin}
        >
          Login
        </button>
        <p className="w-full my-5 mb-5 text-center">
          Don't have an Account?{" "}
          <button className="font-semibold" onClick={() => navigate("/")}>
            SIGN UP
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
