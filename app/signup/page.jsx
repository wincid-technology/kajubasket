"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Modal from "@/components/Modal/Modal";
import Image from "next/image";
import Link from "next/link";
import { signIn } from "next-auth/react"; // Import the signIn function from next-auth

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);
  const [isTermsAccepted, setIsTermsAccepted] = useState(false);
  const [isClient, setIsClient] = useState(false); // Ensure rendering only on the client side
  const [showModal, setShowModal] = useState(false); // Modal state
  const navigate = useRouter();

  useEffect(() => {
    setIsClient(true); // Set client-side rendering flag to true after initial render
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simple client-side validation
    if (!name || !email || !phone || !password || !confirmPassword) {
      setError("Please fill in all fields.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (!isTermsAccepted) {
      setError("You must accept the terms and conditions.");
      return;
    }

    try {
      navigate.push("/account"); // Redirect after successful sign-up
    } catch (err) {
      setError("There was an issue with your signup. Please try again.");
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  // Sign-in with Google handler
  const handleGoogleSignUp = () => {
    signIn("google", { callbackUrl: "/account" }); // Redirect to /account after sign-in
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
          <form
            onSubmit={handleSubmit}
            className="bg-white max-w-2xl w-full mx-auto shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] p-8 rounded-2xl"
          >
            <div className="mb-12">
              <h3 className="text-gray-800 text-3xl text-center">Sign Up</h3>
            </div>

            {/* Error Display */}
            {error && (
              <div className="mb-4 text-red-500 text-center">{error}</div>
            )}

            {/* Input Fields */}
            <div className="mb-4">
              <label htmlFor="name" className="text-gray-600">Full Name</label>
              <input
                type="text"
                id="name"
                className="w-full border p-2 rounded-md focus-visible:border-[#d0721a] outline-none"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="mb-4">
                <label htmlFor="email" className="text-gray-600">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full border p-2 rounded-md focus-visible:border-[#d0721a] outline-none"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="phone" className="text-gray-600">Phone</label>
                <input
                  type="text"
                  id="phone"
                  maxLength={10}
                  className="w-full border p-2 rounded-md focus-visible:border-[#d0721a] outline-none"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="mb-4">
                <label htmlFor="password" className="text-gray-600">Password</label>
                <input
                  type="password"
                  id="password"
                  className="w-full border p-2 rounded-md focus-visible:border-[#d0721a] outline-none"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="confirmPassword" className="text-gray-600">Confirm Password</label>
                <input
                  type="password"
                  id="confirmPassword"
                  className="w-full border p-2 rounded-md focus-visible:border-[#d0721a] outline-none"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Terms and Conditions */}
            <div className="mb-4 flex items-center">
              <input
                type="checkbox"
                id="terms"
                checked={isTermsAccepted}
                onChange={() => setIsTermsAccepted(!isTermsAccepted)}
                className="mr-2 accent-[#d0721a]"
              />
              <label htmlFor="terms" className="text-gray-600">
                I accept the{" "}
                <a href="/terms" className="text-[#d0721a] hover:underline">
                  Terms and Conditions
                </a>{" "}
                and{" "}
                <a href="/privacy" className="text-[#d0721a] hover:underline">
                  Privacy Policy
                </a>
              </label>
            </div>

            {/* Sign-Up Button */}
            <div className="mt-8 flex flex-col gap-4">
              <button
                type="submit"
                className="w-full shadow-sm py-2.5 px-5 text-md tracking-wider rounded-md text-white bg-[#d0721a] hover:bg-[#bd5b00] focus:outline-none transition-all"
              >
                Sign Up
              </button>

              <div className="my-2 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                <p className="mx-4 text-center text-gray-500">OR</p>
              </div>

              {/* Google Button */}
              <button
                type="button"
                onClick={handleGoogleSignUp}
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
                    />
                    <path
                      d="M507.527 208.176C510.467 223.662 512 239.655 512 256c0 18.328-1.927 36.206-5.598 53.451-12.462 58.683-45.025 109.925-90.134 146.187l-.014-.014-73.044-3.727-10.338-64.535c29.932-17.554 53.324-45.025 65.646-77.911h-136.89V208.176h245.899z"
                      fill="#518ef8"
                    />
                    <path
                      d="m416.253 455.624.014.014C372.396 490.901 316.666 512 256 512c-97.491 0-182.252-54.491-225.491-134.681l82.961-67.91c21.619 57.698 77.278 98.771 142.53 98.771 28.047 0 54.323-7.582 76.87-20.818l83.383 68.262z"
                      fill="#28b446"
                    />
                    <path
                      d="m419.404 58.936-82.933 67.896C313.136 112.246 285.552 103.82 256 103.82c-71.184 0-131.706 47.302-152.649 111.074l-54.594-38.544C92.846 77.388 162.418 0 256 0c71.167 0 133.552 42.24 163.404 58.936z"
                      fill="#f14336"
                    />
                  </g>
                </svg>
                Sign Up with Google
              </button>
            </div>
            <p className="text-gray-800 text-md mt-8 text-center">
              Already have an account?{" "}
              <Link href="/login" className="text-[#d0721a] hover:underline ml-1">
                Log In
              </Link>
            </p>
          </form>
        </div>

        {/* Modal */}
        {showModal && <Modal closeModal={closeModal} />}
      </div>
    </>
  );
};

export default Signup;
