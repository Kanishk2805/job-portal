import React from "react";

const Loading = () => {
  return (
    <div className="min-h-screen flex items-center justify-center dark:bg-black">
      <div className="w-28 h-28 border-2 border-gray-400 border-t-8 border-t-yellow-600 rounded-full animate-spin"></div>
    </div>
  );
};

export default Loading;
