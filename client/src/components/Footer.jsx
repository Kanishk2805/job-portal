import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="container px-4 2xl:px-20 mx-auto flex items-center justify-between gap-4 py-3 mt-20 bg-gradient-to-t from-green-200 to-white dark:from-gray-600 dark:to-black dark:text-white">
      <img width={100} src={assets.logo} alt="" />
      <p className="flex-1 border-l border-gray-400 pl-4 text-sm text-gray-500 max-sm:hidden dark:text-white">
        Copyrights 2024 &copy; AyushKumar | All rights reserved.
      </p>
      <div className="flex gap-3">
        <img
          className="dark:bg-white dark:rounded-full"
          width={38}
          src={assets.instagram_icon}
          alt=""
        />
        <img
          className="dark:bg-white dark:rounded-full"
          width={38}
          src={assets.twitter_icon}
          alt=""
        />
        <img
          className="dark:bg-white dark:rounded-full"
          width={38}
          src={assets.facebook_icon}
          alt=""
        />
      </div>
    </div>
  );
};

export default Footer;
