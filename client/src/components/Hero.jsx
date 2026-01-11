import React, { useContext, useRef } from "react";
import { assets } from "../assets/assets";
import { AppContext } from "../context/AppContext";

const Hero = () => {
  const { setSearchFilter, setIsSearched } = useContext(AppContext);

  const titleRef = useRef(null);
  const locationRef = useRef(null);

  const onSearch = () => {
    setSearchFilter({
      title: titleRef.current.value.trim(),
      location: locationRef.current.value.trim(),
    });
    setIsSearched(true);
  };

  return (
    <div className="container 2xl:px-20 mx-auto my-10 dark:bg-black dark:text-white">
      <div
        className="relative text-white py-16 text-center mx-2 rounded-3xl bg-cover bg-center"
        style={{
          backgroundImage: `url(${assets.hero_image})`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-70 rounded-3xl"></div>

        <div className="relative">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium mb-4">
            Find Your Dream Job Among 5,000+ Opportunities!
          </h2>
          <p className="mb-8 max-w-xl mx-auto text-sm font-light px-5">
            Start your journey toward a brighter future today. Explore top job
            openings and take the next big step in your career!
          </p>
          <div className="flex items-center justify-between bg-white rounded text-gray-600 max-w-xl pl-4 mx-4 sm:mx-auto ">
            <div className="flex items-center ">
              <img className="h-4 sm:h-5" src={assets.search_icon} alt="" />
              <input
                type="text"
                placeholder="Search for jobs"
                className="max-sm:text-xs p-2 rounded outline-none w-full"
                ref={titleRef}
              />
            </div>
            <div className="flex items-center">
              <img className="h-4 sm:h-5" src={assets.location_icon} alt="" />
              <input
                type="text"
                placeholder="Location"
                className="max-sm:text-xs p-2 rounded outline-none w-full"
                ref={locationRef}
              />
            </div>
            <button
              onClick={onSearch}
              className="bg-gradient-to-r from-green-600 to-green-950 px-6 py-2 rounded text-white m-1 hover:scale-105 transition-all duration-300 active:scale-95"
            >
              Search
            </button>
          </div>
        </div>
      </div>

      <div className="border border-gray-300 shadow-md mx-2 mt-5 p-6 rounded-md flex justify-center">
        <div className="flex justify-center gap-6 lg:gap-14 flex-wrap">
          <p className="font-medium text-center w-full">Trusted by</p>

          <div className="bg-white dark:bg-white p-4 rounded-md shadow flex items-center justify-center h-16 w-32 hover:scale-105 transition-all duration-300 hover:bg-gray-200">
            <img className="h-6 " src={assets.amazon_logo} alt="Amazon Logo" />
          </div>

          <div className="bg-white dark:bg-white p-4 rounded-md shadow flex items-center justify-center h-16 w-32 hover:scale-105 transition-all duration-300 hover:bg-gray-200">
            <img
              className="h-6 "
              src={assets.microsoft_logo}
              alt="Microsoft Logo"
            />
          </div>

          <div className="bg-white dark:bg-white p-4 rounded-md shadow flex items-center justify-center h-16 w-32 hover:scale-105 transition-all duration-300 hover:bg-gray-200">
            <img
              className="h-6 "
              src={assets.samsung_logo}
              alt="Samsung Logo"
            />
          </div>

          <div className="bg-white dark:bg-white p-4 rounded-md shadow flex items-center justify-center h-16 w-32 hover:scale-105 transition-all duration-300 hover:bg-gray-200">
            <img
              className="h-6 "
              src={assets.accenture_logo}
              alt="Accenture Logo"
            />
          </div>

          <div className="bg-white dark:bg-white p-4 rounded-md shadow flex items-center justify-center h-16 w-32 hover:scale-105 transition-all duration-300 hover:bg-gray-200">
            <img
              className="h-6 "
              src={assets.walmart_logo}
              alt="Walmart Logo"
            />
          </div>

          <div className="bg-white dark:bg-white p-4 rounded-md shadow flex items-center justify-center h-16 w-32 hover:scale-105 transition-all duration-300 hover:bg-gray-200">
            <img className="h-6 " src={assets.adobe_logo} alt="Adobe Logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
