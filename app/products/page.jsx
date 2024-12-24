"use client";

import { Butter, DryRoasted, Flavoured, Gift, Pieces, Wholes } from "@/components/products/products";
import React, { useState, useRef } from "react";

const ProductsPage = () => {
  const [activeTab, setActiveTab] = useState("wholes");
  const carouselRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const tabs = [
    { id: "wholes", label: "Whole Cashews" },
    { id: "dryRoasted", label: "Dry Roasted Cashews" },
    { id: "flavored", label: "Flavored Cashews" },
    { id: "pieces", label: "Cashew Pieces" },
    { id: "butter", label: "Cashew Butter" },
    { id: "gift", label: "Corporate Gifting" },
  ];

  const content = {
    wholes: { title: "Whole Cashews", element: <Wholes /> },
    dryRoasted: { title: "Dry Roasted", element: <DryRoasted /> },
    flavored: { title: "Flavored Cashews", element: <Flavoured /> },
    pieces: { title: "Cashew Pieces", element: <Pieces /> },
    butter: { title: "Cashew Butter", element: <Butter /> },
    gift: { title: "Corporate Gifting", element: <Gift /> },
  };

  const scrollCarousel = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = direction === "prev" ? -300 : 300;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const handleMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.pageX - carouselRef.current.offsetLeft;
    scrollLeft.current = carouselRef.current.scrollLeft;
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX.current) * 2; // Adjust the multiplier for sensitivity
    carouselRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const handleMouseUpOrLeave = () => {
    isDragging.current = false;
  };

  return (
    <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 max-w-full host-regular mx-auto px-5 md:px-10 xl:px-14">
      {/* Tabs Section */}
      <div className="flex justify-center lg:justify-start mt-5 sm:mt-0 items-center lg:items-start px-3">
        <button
          onClick={() => scrollCarousel("prev")}
          className="bg-transparent text-black px-3 rounded-full w-10 h-10 text-3xl items-center justify-center flex lg:hidden"
        >
          &#8249; {/* Left arrow */}
        </button>

        <div className="relative lg:min-w-[280px] lg:border-r max-lg:w-full flex justify-center">
          <ul
            ref={carouselRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUpOrLeave}
            onMouseLeave={handleMouseUpOrLeave}
            className="flex no-scrollbar max-lg:overflow-x-auto max-lg:scroll-smooth lg:w-full lg:flex-col bg-gray-100 p-3 sm:p-5 cursor-grab lg:cursor-default"
          >
            {tabs.map((tab) => (
              <li
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`tab cursor-pointer px-4 py-2 text-sm text-nowrap sm-plus:text-[1rem] lg:text-lg transition-all ${activeTab === tab.id
                  ? "text-[#d0721a] host-bold rounded-md shadow-lg text-sm lg:text-lg bg-white"
                  : "text-gray-800 hover:text-[#d0721a]"
                  }`}
              >
                {tab.label}
              </li>
            ))}
          </ul>

        </div>
        <button
          onClick={() => scrollCarousel("next")}
          className="bg-transparent text-black px-3 rounded-full w-10 h-10 text-3xl items-center justify-center flex lg:hidden"
        >
          &#8250; {/* Right arrow */}
        </button>
      </div>

      {/* Content Section */}
      <div className="max-w-full host-semibold lg:my-4 pb-5 h-screen overflow-y-auto no-scrollbar">
        <h4 className="text-2xl lg:text-4xl text-center lg:text-start text-[#130e3f]">{content[activeTab].title}</h4>
        <div className="text-sm text-gray-600 mt-4">{content[activeTab].element}</div>
      </div>
    </div>
  );
};

export default ProductsPage; 
