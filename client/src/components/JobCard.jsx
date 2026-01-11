import React from "react";
import { useNavigate } from "react-router-dom";

const JobCard = ({ job }) => {
  const navigate = useNavigate();

  return (
    <div className="border p-6 shadow rounded hover:scale-105 transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-900">
      <div className="flex justify-between items-center">
        <img className="h-8" src={job.companyId.image} alt="" />
      </div>
      <h4 className="font-medium text-xl mt-2">{job.title}</h4>
      <div className="flex items-center gap-3 mt-2 text-xs">
        <span className="bg-purple-50 border border-purple-200 px-4 py-1.5 rounded dark:text-black">
          {job.location}
        </span>
        <span className="bg-yellow-50 border border-yellow-200 px-4 py-1.5 rounded dark:text-black">
          {job.level}
        </span>
      </div>
      <p
        className="text-gray-500 text-sm mt-4 dark:text-gray-300"
        dangerouslySetInnerHTML={{
          __html: job.description.slice(0, 150).replace(/style="[^"]*"/g, ""),
        }}
      ></p>

      <div className="mt-4 flex gap-4 text-sm">
        <button
          onClick={() => {
            navigate(`/apply-job/${job._id}`);
            scrollTo(0, 0);
          }}
          className="bg-green-600 text-white px-4 py-2 rounded hover:scale-105 hover:bg-green-700 active:scale-95 transition-all duration-300"
        >
          Apply Now
        </button>
        <button
          onClick={() => {
            navigate(`/apply-job/${job._id}`);
            scrollTo(0, 0);
          }}
          className="text-gray-500 border border-gray-500 px-4 py-2 rounded dark:text-white dark:border-white hover:scale-105 hover:bg-blue-800 hover:text-white active:scale-95 transition-all duration-300"
        >
          Learn More
        </button>
      </div>
    </div>
  );
};

export default JobCard;
