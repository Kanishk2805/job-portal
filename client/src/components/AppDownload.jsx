import React from "react";
import { assets } from "../assets/assets";

const AppDownload = () => {
  return (
    <div className="container px-4 2xl:px-20 mx-auto my-20 dark:bg-black dark:text-white">
      <div className="relative bg-gradient-to-r from-red-100 to-red-100 p-12 sm:p-24 lg:p-32 rounded-lg  dark:from-gray-800 dark:to-gray-950">
        <div>
          <h1 className="text-2xl sm:text-4xl font-bold mb-8 max-w-md">
            Download Mobile App For Better Experience
          </h1>
          <div className="flex gap-4">
            <a href="#" className="inline-block">
              <img className="h-12" src={assets.play_store} alt="" />
            </a>
            <a href="#" className="inline-block">
              <img className="h-12" src={assets.app_store} alt="" />
            </a>
          </div>
        </div>
        <img
          className="absolute w-80 right-0 bottom-0 mr-32 max-lg:hidden"
          src={assets.app_main_img}
          alt=""
        />
      </div>
    </div>
  );
};

export default AppDownload;
