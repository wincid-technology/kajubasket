"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import toast from "react-hot-toast";

const Login = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading effect
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // 1.5 seconds loading time

    return () => clearTimeout(timer); // Cleanup timer
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        {/* Loader */}
        <div className="spinner-border animate-spin border-t-4 border-[#d0721a] border-solid rounded-full w-16 h-16"></div>
      </div>
    );
  }
  
  const handleLogin = () => {
    toast.success("Welcome back!");
  };

  return (
    <>
      <div className="relative host-regular">
        <div className="h-[240px]">
          <Image
            src="/img/register.jpg"
            alt="Banner Image"
            width={1000}
            height={1000}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative -mt-40 m-4">
          <form className="bg-white max-w-xl w-full mx-auto shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] p-8 rounded-2xl">
            <div className="mb-12">
              <h3 className="text-gray-800 text-3xl text-center">Log In</h3>
            </div>

            {/* Email Input */}
            <div className="mt-8">
              <label className="text-gray-800 text-sm block mb-2">Email</label>
              <div className="relative flex items-center">
                <input
                  name="email"
                  type="email"
                  required
                  className="w-full border p-2 rounded-md focus-visible:border-[#d0721a] outline-none"
                  placeholder="Enter email"
                />
                
              </div>
            </div>

            {/* Password Input */}
            <div className="mt-8">
              <label className="text-gray-800 text-sm block mb-2">Password</label>
              <div className="relative flex items-center">
                <input
                  name="password"
                  type="password"
                  required
                  className="w-full border p-2 rounded-md focus-visible:border-[#d0721a] outline-none"
                  placeholder="Enter password"
                />
              </div>
            </div>

            {/* Remember Me Checkbox and Forgot Password Link */}
            <div className="flex justify-between items-center mt-8">
              <div className="flex justify-start items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 shrink-0 rounded accent-[#d0721a]"
                />
                <label htmlFor="remember-me" className="ml-2 block text-md">
                  Remember Me
                </label>
              </div>
              <div>
                <Link className="text-[#d0721a] hover:underline" href="/forgot-password">
                  Forgot Password?
                </Link>
              </div>
            </div>

            {/* Login Button */}
            <div className="mt-8 flex flex-col gap-4">
              <button
                type="submit"
                onClick={handleLogin}
                className="w-full shadow-sm py-2.5 px-5 text-md tracking-wider rounded-md text-white bg-[#d0721a] hover:bg-[#bd5b00] focus:outline-none transition-all"
              >
                Log In
              </button>

              {/* Google Login Button */}
              {/* <div className="my-2 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                <p className="mx-4 text-center text-gray-500">OR</p>
              </div> */}
              {/* <button
                type="button"
                className="w-full px-2 py-2.5 flex items-center justify-center rounded-md shadow-sm text-gray-800 text-base tracking-wider host-semibold border-none outline-none bg-gray-100 hover:bg-gray-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22px"
                  fill="#fff"
                  className="inline shrink-0 mr-2"
                  viewBox="0 0 512 512"
                >
                  
                  <g>
                    <path
                      d="M113.47 309.408 95.648 375.94l-65.139 1.378C11.042 341.211 0 299.9 0 256c0-42.451 10.324-82.483 28.624-117.732h.014L86.63 148.9l25.404 57.644c-5.317 15.501-8.215 32.141-8.215 49.456.002 18.792 3.406 36.797 9.651 53.408z"
                      fill="#fbbb00"
                    ></path>
                    <path
                      d="M507.527 208.176C510.467 223.662 512 239.655 512 256c0 18.328-1.927 36.206-5.598 53.451-12.462 58.683-45.025 109.925-90.134 146.187l-.014-.014-73.044-3.727-10.338-64.535c29.932-17.554 53.324-45.025 65.646-77.911h-136.89V208.176h245.899z"
                      fill="#518ef8"
                    ></path>
                    <path
                      d="m416.253 455.624.014.014C372.396 490.901 316.666 512 256 512c-97.491 0-182.252-54.491-225.491-134.681l82.961-67.91c21.619 57.698 77.278 98.771 142.53 98.771 28.047 0 54.323-7.582 76.87-20.818l83.383 68.262z"
                      fill="#28b446"
                    ></path>
                    <path
                      d="m419.404 58.936-82.933 67.896C313.136 112.246 285.552 103.82 256 103.82c-66.729 0-123.429 42.957-143.965 102.724l-83.397-68.276h-.014C71.23 56.123 157.06 0 256 0c62.115 0 119.068 22.126 163.404 58.936z"
                      fill="#f14336"
                    ></path>
                  </g>
                </svg>
                Continue with Google
              </button> */}
            </div>

            <p className="text-gray-800 text-md mt-8 text-center">
              Don&apos;t have an account?{" "}
              <Link href="/signup" className="text-[#d0721a] hover:underline ml-1">
                Sign Up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
