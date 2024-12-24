"use client"

import Image from 'next/image';
import React from 'react';
import CountUp from 'react-countup';

const Stats = () => {
  return (
    <div className="py-10">
      <div className="relative host-regular shadow-lg before:absolute before:w-full before:h-full before:inset-0 before:bg-black before:opacity-50 before:z-10">
        <Image
          src="/img/stats.jpg"
          alt="A banner displaying statistical insights"
          className="absolute inset-0 w-full h-full object-cover object-center"
          width={1000}
          height={1000}
        />
        <div className="min-h-[500px] relative z-40 h-full max-w-full mx-auto flex flex-col justify-center items-center text-center px-4 lg:px-20 py-8">
          <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-10 lg:gap-20">
            {/* Metric Card */}
            <div className="text-center">
              <h3 className="text-white host-bold" style={{fontSize: "max(4vw, 50px)"}}>
                <CountUp end={5400} duration={3} separator="," suffix="+" />
              </h3>
              <p className="text-2xl text-white host-semibold mt-1">Total Users</p>
              <p className="leading-relaxed text-sm font-light text-gray-200 mt-2">
                The total number of registered users on the platform.
              </p>
            </div>
            {/* Metric Card */}
            <div className="text-center">
              <h3 className="text-white host-bold" style={{fontSize: "max(4vw, 50px)"}}>
                <CountUp end={20000} duration={3} separator="," suffix="+" />
              </h3>
              <p className="text-2xl text-white host-semibold mt-1">Employees</p>
              <p className="leading-relaxed text-sm font-light text-gray-200 mt-2">
                The total employees working on the platform.
              </p>
            </div>
            {/* Metric Card */}
            <div className="text-center">
              <h3 className="text-white host-bold" style={{fontSize: "max(4vw, 50px)"}}>
                <CountUp end={100000} duration={3} separator="," />
              </h3>
              <p className="text-2xl text-white host-semibold mt-1">Engagement</p>
              <p className="leading-relaxed text-sm font-light text-gray-200 mt-2">
                The level of user engagement with the application&apos;s content and features.
              </p>
            </div>
            {/* Metric Card */}
            <div className="text-center">
              <h3 className="text-white host-bold" style={{fontSize: "max(4vw, 50px)"}}>
                <CountUp end={99.9} duration={3} decimals={1} suffix="%" />
              </h3>
              <p className="text-2xl text-white host-semibold mt-1">Server Uptime</p>
              <p className="leading-relaxed text-sm font-light text-gray-200 mt-2">
                The percentage of time the server has been operational and available.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
