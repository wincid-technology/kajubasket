"use client";

import { useState, useEffect } from "react";
import { BsBoxSeamFill } from "react-icons/bs";
import { FaBasketShopping, FaHeart } from "react-icons/fa6";
import Orders from "@/components/Orders/Orders";
import Wishlist from "@/components/wishlist/Wishlist";
import Cart from "@/components/Cart/Cart";
import { useRouter } from "next/navigation";
import { useSession, signIn } from "next-auth/react";
import Image from "next/image";

const AccountSection = () => {
  const [activeTab, setActiveTab] = useState("orders");
  const { data: session, status } = useSession();
  const router = useRouter();

  // Redirect unauthenticated users to sign-in page
  useEffect(() => {
    if (status === "unauthenticated") {
      signIn(); // Trigger sign-in flow for unauthenticated users
    }
  }, [status]);

  if (status === "loading") {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="spinner-border animate-spin border-t-4 border-[#d0721a] border-solid rounded-full w-16 h-16"></div>
      </div>
    );
  }

  // Render content for each tab
  const renderTabContent = () => {
    switch (activeTab) {
      case "orders":
        return <Orders />;
      case "wishlist":
        return <Wishlist />;
      case "cart":
        return <Cart />;
      default:
        return <Orders />;
    }
  };

  return (
    <div className="max-w-full px-20 mx-auto p-6 bg-white host-regular rounded shadow-md">
      <h2 className="text-2xl  mb-4 text-center">
        Welcome, {session?.user?.name || "User"}!
      </h2>
      <p className="text-center mb-6">{session?.user?.email}</p>

      {/* Tabs */}
      <div className="grid grid-cols-3 justify-around mb-6 mt-10 border-b">
        <button
          onClick={() => setActiveTab("orders")}
          className={`py-3 flex items-center justify-center uppercase gap-2 px-10 font-medium border-b-2 transition-colors duration-300 ${
            activeTab === "orders"
              ? "border-[#d0721a] bg-[#d0721a]/10 rounded-t-xl text-[#d0721a]"
              : "border-transparent text-gray-500"
          } hover:text-[#d0721a]`}
        >
          <BsBoxSeamFill className="text-2xl" />
          My Orders
        </button>
        <button
          onClick={() => setActiveTab("wishlist")}
          className={`py-3 flex items-center justify-center uppercase gap-2 px-10 font-medium border-b-2 transition-colors duration-300 ${
            activeTab === "wishlist"
              ? "border-[#d0721a] bg-[#d0721a]/10 rounded-t-xl text-[#d0721a]"
              : "border-transparent text-gray-500"
          } hover:text-[#d0721a]`}
        >
          <FaHeart className="text-2xl" />
          My Wishlist
        </button>
        <button
          onClick={() => setActiveTab("cart")}
          className={`py-3 flex items-center justify-center uppercase gap-2 px-10 font-medium border-b-2 transition-colors duration-300 ${
            activeTab === "cart"
              ? "border-[#d0721a] bg-[#d0721a]/10 rounded-t-xl text-[#d0721a]"
              : "border-transparent text-gray-500"
          } hover:text-[#d0721a]`}
        >
          <FaBasketShopping className="text-2xl" />
          My Cart
        </button>
      </div>

      {/* Tab Content */}
      <div className="tab-content">{renderTabContent()}</div>
    </div>
  );
};

export default AccountSection;
