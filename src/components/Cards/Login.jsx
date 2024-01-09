"use client";
import React, { useState } from 'react'
import { loginValidation } from '@/utils/FormValidation';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa6";
function Login() {
  const [log, setLog] = useState({
    user_id: "",
    password: "",
  });
  const [pending, setPending] = useState(false);
  const [error, setError] = useState({});
  const [passtog, setPasstog] = useState(false);

  const router = useRouter()
  const handleLog = (e) => {
    const updateValue = { ...log, [e.target.name]: e.target.value };
    setLog(updateValue);
    setError(loginValidation(updateValue));
  };

  async function handleSubmit(e){
    e.preventDefault();
    try {
      setPending(true);
      const res = await signIn("credentials", {
        user_id: log.user_id,
        password: log.password,
        redirect: false
      })
      if(res.error){
        setError("Invalid credentials");
        setPending(false);
      }else{
        router.push("/");
      }
    } catch (error) {
      setPending(false);
      console.log(error);
    }
  }
  // Password Input Field Visibility.
  const handleVisibility = () =>{
    setPasstog(!passtog);
  }

  return (
    <div className="h-screen bg-indigo-100 flex justify-center items-center">
    <div className="lg:w-2/5 md:w-1/2 w-2/3">
      <form className="bg-white p-10 rounded-lg shadow-lg min-w-full" onSubmit={handleSubmit}>
        <h1 className="text-center text-2xl mb-6 text-gray-600 font-bold font-sans">
          Login
        </h1>
        <div>
          <label
            className="text-gray-800 font-semibold block my-3 text-md"
            htmlFor="user_id"
          >
            Phone
          </label>
          <input
            className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
            type="text"
            name="user_id"
            id="user_id"
            placeholder="Insert your phone number."
            onChange={handleLog}
          />
          {error.user_id && (
              <p className="text-sm text-red-600">{error.user_id}</p>
            )}
        </div>
        <div >
          <label
            className="text-gray-800 font-semibold block my-3 text-md"
            htmlFor="password"
          >
            Password
          </label>
          <div className='relative h-11'>
          <input
            className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
            type={passtog ? "text" : "password"}
            name="password"
            id="password"
            placeholder="password"
            onChange={handleLog}
          />
          {error.password && (
              <p className="text-sm text-red-600">{error.password}</p>
            )}
          <div onClick={handleVisibility} className='absolute right-1 md:right-4 top-[50%] translate-y-[-50%]'>{passtog ? <FaEye /> : <FaEyeSlash />}</div>
          </div>
        </div>
        <button
          disabled={Object.entries(error).length > 0 || pending == true}
          type="submit"
          className="w-full mt-10 mb-3 bg-indigo-100 rounded-lg px-4 py-2 text-lg text-gray-800 tracking-wide font-semibold font-sans disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {pending? "Loging in...": "Login"}
        </button>
      </form>
    </div>
  </div>
  )
}

export default Login