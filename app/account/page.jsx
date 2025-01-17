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
  const { data: session } = useSession();
  console.log(session)


  useEffect(() => {
    if (session) {
      fetch("/api/user")
        .then((res) => res.json())
        .then((data) => {
          console.log(data.name); // Ensure this fetches the correct name
        });
    }
  }, [session]);

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
      <h2 className="text-2xl mb-4 text-center">
        Welcome, {session?.user?.name || "Guest"}!
      </h2>

      {/* Tabs */}
      <div className="grid grid-cols-3 justify-around mb-6 mt-10 border-b" role="tablist">
        <button
          onClick={() => setActiveTab("orders")}
          role="tab"
          aria-pressed={activeTab === "orders"}
          className={`py-3 flex items-center justify-center uppercase gap-2 px-10 font-medium border-b-2 transition-colors duration-300 ${activeTab === "orders"
              ? "border-[#d0721a] bg-[#d0721a]/10 rounded-t-xl text-[#d0721a]"
              : "border-transparent text-gray-500"
            } hover:text-[#d0721a]`}
        >
          <BsBoxSeamFill className="text-2xl" />
          My Orders
        </button>
        <button
          onClick={() => setActiveTab("wishlist")}
          role="tab"
          aria-pressed={activeTab === "wishlist"}
          className={`py-3 flex items-center justify-center uppercase gap-2 px-10 font-medium border-b-2 transition-colors duration-300 ${activeTab === "wishlist"
              ? "border-[#d0721a] bg-[#d0721a]/10 rounded-t-xl text-[#d0721a]"
              : "border-transparent text-gray-500"
            } hover:text-[#d0721a]`}
        >
          <FaHeart className="text-2xl" />
          My Wishlist
        </button>
        <button
          onClick={() => setActiveTab("cart")}
          role="tab"
          aria-pressed={activeTab === "cart"}
          className={`py-3 flex items-center justify-center uppercase gap-2 px-10 font-medium border-b-2 transition-colors duration-300 ${activeTab === "cart"
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
