"use client";

import { useRouter } from "next/navigation";
import { bestSeller } from "@/constants/best";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { FaBasketShopping } from "react-icons/fa6";

const BestSeller = () => {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  const handleWishlist = (productId) => {
    if (!isLoggedIn) {
      router.push("/login"); // Redirect to login page
      return;
    }
    console.log(`Added product ${productId} to wishlist`);
  };

  const handleAddToCart = (productId) => {
    if (!isLoggedIn) {
      router.push("/login"); // Redirect to login page
      return;
    }
    console.log(`Added product ${productId} to cart`);
  };

  return (
    <div className="mt-24 host-regular">
      <div className="bg-gray-100">
        <div className="px-5 sm:px-10 mx-auto flex flex-col gap-10 justify-center items-center max-w-full">
          <h2 className="text-4xl text-gray-800 host-bold">Best Sellers</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full gap-6">
            {bestSeller.map((best) => (
              <div
                key={best.id}
                className="group p-6 relative flex flex-col bg-white rounded-lg"
              >
                <button
                  title="Add to Wishlist"
                  className="absolute end-4 top-4 z-30 rounded-full bg-gray-200 p-2 text-gray-900 transition hover:text-gray-900/75"
                  onClick={() => handleWishlist(best.id)}
                >
                  <span className="sr-only">Wishlist</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                    />
                  </svg>
                </button>

                <Image
                  src={best.img}
                  alt={best.title}
                  width={10000}
                  height={10000}
                  className="w-[60%] mx-auto transition duration-500 group-hover:scale-105 mb-4"
                />

                <div className="relative bg-white flex flex-col justify-between gap-1.5 lg:gap-3 flex-grow">
                  <h3 className="text-lg lg:text-xl host-semibold flex flex-col justify-between text-gray-900">
                    {best.title}{" "}
                    <span className="text-lg host-bold text-[#d0721a]">
                      {best.weight}
                    </span>
                  </h3>
                  <p className="text-[0.9rem] lg:text-lg host-light text-gray-700">
                    {best.description}
                  </p>

                  <p className="text-[#130e3f] text-2xl host-bold">₹{best.price}</p>

                  <div className="mt-4 flex flex-col xs:flex-row sm:flex-col xmd:flex-row lg:flex-col xlg:flex-row gap-4">
                    <button
                      className="w-full justify-center gap-2 rounded bg-gray-200 px-4 flex py-3 lg:text-[1rem] items-center font-medium text-gray-900 transition hover:scale-105"
                      onClick={() => handleAddToCart(best.id)}
                    >
                      <span>
                        <FaBasketShopping className="size-5" />
                      </span>
                      Add to Cart
                    </button>

                    <button
                      className="block w-full rounded bg-[#130e3f] px-4 py-3 text-sm font-medium text-white transition hover:scale-105"
                      onClick={() => router.push(`/checkout/${best.id}`)}
                    >
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestSeller;
