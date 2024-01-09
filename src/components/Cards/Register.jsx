"use client";
import Link from "next/link";
import React, { useState } from "react";
import { regValidation } from "../../utils/FormValidation";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/navigation";
import "react-toastify/dist/ReactToastify.css";
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa6";

function Register() {
  const [reg, setReg] = useState({
    user_name: "",
    user_id: "",
    password: "",
  });
  const [error, setError] = useState({});
  const [pending, setPending] = useState(false);
  const [passtog, setPasstog] = useState(false);
  const router = useRouter();

  const handlereg = (e) => {
    const updateValue = { ...reg, [e.target.name]: e.target.value };
    setReg(updateValue);
    setError(regValidation(updateValue));
  };

  async function handleSub(e) {
    e.preventDefault();
    try {
      setPending(true);
      const res = await fetch("http://localhost:3000/api/signup", {
        method: "POST",
        body: JSON.stringify(reg),
      });

      if (res.ok) {
        setPending(false);
        toast.success("Register Successfull!!", {
          position: toast.POSITION.TOP_RIGHT,
        });
        setInterval(router.push("/login"), 1000);
      } else {
        const error = await res.json();
        setError(error.message);
        setPending(false);
      }
    } catch (error) {
      setPending(false);
      console.log(error);
    }
  }

  const handleVisibility = () =>{
    setPasstog(!passtog);
  }

  return (
    <div className="h-screen bg-indigo-100 flex justify-center items-center">
      <div className="lg:w-2/5 md:w-1/2 w-2/3">
        <form
          className="bg-white p-10 rounded-lg shadow-lg min-w-full"
          onSubmit={handleSub}
        >
          <h1 className="text-center text-2xl mb-6 text-gray-600 font-bold font-sans">
            Register with us
          </h1>
          <div>
            <label
              className="text-gray-800 font-semibold block my-3 text-md"
              htmlFor="user_name"
            >
              Your Name
            </label>
            <input
              className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
              type="text"
              name="user_name"
              id="user_name"
              placeholder="Your Name"
              onChange={handlereg}
            />
            {error.user_name && (
              <p className="text-sm text-red-600">{error.user_name}</p>
            )}
          </div>
          <div>
            <label
              className="text-gray-800 font-semibold block my-3 text-md"
              htmlFor="user_id"
            >
              Phone Number
            </label>
            <input
              className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
              type="text"
              name="user_id"
              id="user_id"
              placeholder="Insert your phone number."
              onChange={handlereg}
            />
            {error.user_id && (
              <p className="text-sm text-red-600">{error.user_id}</p>
            )}
          </div>
          <div>
            <label
              className="text-gray-800 font-semibold block my-3 text-md"
              htmlFor="password"
            >
              Password
            </label>
            <div className="relative h-11">
              <input
                className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
                type={passtog ? "text" : "password"}
                name="password"
                id="password"
                placeholder="password"
                onChange={handlereg}
              />
              {error.password && (
                <p className="text-sm text-red-600">{error.password}</p>
              )}
              <div onClick={handleVisibility} className='absolute right-1 md:right-4 top-[50%] translate-y-[-50%]'>{passtog ? <FaEye /> : <FaEyeSlash />}</div>
            </div>
          </div>
          <div className="flex flex-col h-fit">
            <button
              disabled={Object.entries(error).length > 0 || pending == true}
              type="submit"
              className="w-full mt-6 bg-indigo-600 rounded-lg px-4 py-2 text-lg text-white tracking-wide font-semibold font-sans disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {pending ? "Registering..." : "Register"}
            </button>
            <div className="divider">OR</div>
            <Link
              href={"/login"}
              className="w-full bg-indigo-100 rounded-lg px-4 py-2 text-lg text-black tracking-wide font-semibold font-sans text-center"
            >
              Login
            </Link>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Register;
