"use client";

import { navigations } from '@/constants/nav';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import { FaBasketShopping } from "react-icons/fa6";
import { FaUserAlt } from "react-icons/fa";
import { MdArrowDropDown } from "react-icons/md";
import { PiPowerBold } from "react-icons/pi";
import { HiMenuAlt3 } from "react-icons/hi";
import { PiSignInBold } from "react-icons/pi";
import { FiUser, FiUserPlus } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { signOut, useSession } from 'next-auth/react';
import { toast } from "react-hot-toast"; // Import toast

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const { data: session } = useSession();

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const toggleDropdown = () => setDropdownOpen((prev) => !prev);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    signOut();
    toast.success("You have been logged out successfully!");
  };



  return (
    
    <div className="w-full">
      
      <header className="flex shadow-md py-4 px-4 sm:px-10 bg-white min-h-[50px] max-w-screen tracking-wide relative z-50 font-semibold">
        <div className="flex flex-wrap items-center justify-between gap-4 w-full">
          <Link href="/">
            <Image
              src="/logos/logo.png"
              height={10000}
              width={10000}
              alt="Logo"
              className="md:w-32 w-24"
            />
          </Link>

          {/* Main Menu */}
          <div
            className={`${menuOpen ? 'block' : 'hidden'
              } max-lg:fixed max-lg:bg-black/60 backdrop-blur-[2px] max-lg:w-full max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-[60000] lg:flex lg:gap-x-5`}
          >
            <button
              onClick={toggleMenu}
              className="lg:hidden fixed top-2 right-4 shadow-md rounded-full bg-white p-3  z-[2000]"
            >
              <HiMenuAlt3 className="text-[#130e3f] size-7 md:size-8" />
            </button>

            <ul className="lg:flex gap-x-5 max-lg:space-y-3 max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md">
              {navigations.map((nav, i) => (
                <li key={i} className="max-lg:border-b max-lg:py-3 px-3">
                  <Link
                    href={nav.href}
                    className="hover:text-[#9a4a00] lg:hover:after:w-full lg:after:w-0 lg:after:h-[2px] lg:after:bg-[#9a4a00] lg:after:absolute lg:after:bottom-0 lg:after:left-0 lg:after:transition-all lg:after:duration-300 uppercase text-[#d0721a] block host-regular relative"
                  >
                    {nav.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Icons */}
          <div className="flex gap-5 items-center">
            {/* User Dropdown */}
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="flex items-center bg-transparent text-[#333] text-sm group"
              >
                {session?.user?.image ? (
                  <Image
                    src={session.user.image}
                    alt="User Profile"
                    className="rounded-full object-cover w-8 h-8 sm:w-10 sm:h-10"
                    width={40}
                    height={40}
                  />
                ) : (
                  <FaUserAlt className="text-[#130e3f] size-5 group-hover:text-[#d0721a] sm:size-6 transition-colors duration-300" />
                )}
                <MdArrowDropDown className="text-[#130e3f] group-hover:text-[#d0721a] size-5 sm:size-6 -ml-1 transition-colors duration-300" />
              </button>
              {dropdownOpen && (
                <ul ref={dropdownRef} className="absolute shadow-[0_3px_15px_rgb(0,0,0,0.5)] right-0 host-regular bg-white top-9 py-2 z-[1000] min-w-full w-[250px] rounded-lg">
                  {session?.user ? (
                    <>
                      <li className="py-4 px-5 hover:bg-gray-100 hover:text-[#d0721a] cursor-pointer flex items-center gap-2">
                        <Link href="/account" className="flex items-center gap-2">
                          <FiUser className="size-5" /> My Account
                        </Link>
                      </li>
                      <li
                        onClick={handleLogout}
                        className="py-4 px-5 hover:bg-gray-100 cursor-pointer hover:text-[#d0721a] flex items-center gap-2"
                      >
                        <PiPowerBold className="size-5" /> Logout
                      </li>
                    </>
                  ) : (
                    <>
                      <li className="py-4 px-5 hover:bg-gray-100 cursor-pointer border-b hover:text-[#d0721a] flex items-center gap-2">
                        <Link href="/login" onClick={handleLogin} className="flex items-center gap-2">
                          <PiSignInBold /> Log In
                        </Link>
                      </li>
                      <li className="py-4 px-5 hover:bg-gray-100 cursor-pointer hover:text-[#d0721a] flex items-center gap-2">
                        <Link href="/signup" className="flex items-center gap-2">
                          <FiUserPlus /> Sign Up
                        </Link>
                      </li>
                    </>
                  )}
                </ul>
              )}
            </div>

            {/* Cart Icon */}
            <Link href={'/cart'} className="relative cursor-pointer">
              <FaBasketShopping className="text-[#130e3f] size-6 hover:text-[#d0721a] sm:size-7" />
              <span className="absolute -right-2 top-0 rounded-full bg-red-500 px-1 py-0 text-[10px] text-white">
                0
              </span>
            </Link>

            {/* Mobile Menu Toggle */}
            <button onClick={toggleMenu} className="lg:hidden">
              <HiMenuAlt3 className="text-[#130e3f] size-7 md:size-8" />
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
