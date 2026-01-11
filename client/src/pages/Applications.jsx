import React, { useContext, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { assets } from "../assets/assets";
import moment from "moment";
import Footer from "../components/Footer";
import { AppContext } from "../context/AppContext";
import { useAuth, useUser } from "@clerk/clerk-react";
import axios from "axios";
import { toast } from "react-toastify";

const Applications = () => {
  const { user } = useUser();
  const { getToken } = useAuth();
  const [isEdit, setIsEdit] = useState(false);
  const [resume, setResume] = useState(null);
  const {
    backendUrl,
    userData,
    userApplications,
    fetchUserData,
    fetchUserApplications,
  } = useContext(AppContext);

  const updateResume = async () => {
    try {
      const formData = new FormData();
      formData.append("resume", resume);

      const token = await getToken();
      const { data } = await axios.post(
        backendUrl + "/api/users/update-resume",
        formData,
        { headers: { Authorization: `Bearer ${token}` } }
      );

      if (data.success) {
        toast.success(data.message);
        await fetchUserData();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }

    setIsEdit(false);
    setResume(null);
  };

  useEffect(() => {
    if (user) {
      fetchUserApplications();
    }
  }, [user]);

  return (
    <>
      <Navbar />
      <div className="container px-4 min-h-[70vh] 2xl:px-20 mx-auto my-10">
        <h2 className="text-xl font-semibold">Your Resume</h2>
        <div className="flex gap-2 mb-6 mt-3">
          {isEdit || (userData && userData.resume === "") ? (
            <>
              <label className="flex items-center" htmlFor="resumeUpload">
                <p className="text-blue-600 bg-blue-100 px-4 py-2 rounded-lg mr-2 hover:scale-105 active:scale-95 transition-all duration-300">
                  {resume ? resume.name : "Select Resume"}
                </p>
                <input
                  onChange={(e) => setResume(e.target.files[0])}
                  id="resumeUpload"
                  accept="application/pdf"
                  type="file"
                  hidden
                />
                <img
                  className="hover:scale-105 active:scale-95 transition-all duration-300"
                  src={assets.profile_upload_icon}
                  alt=""
                />
              </label>
              <button
                onClick={updateResume}
                className="text-green-600 bg-green-100 border border-green-400 rounded-lg px-4 py-2 hover:scale-105 active:scale-95 transition-all duration-300"
              >
                Save
              </button>
            </>
          ) : (
            <div className="flex gap-2">
              <a
                target="_blank"
                href={userData.resume}
                className="bg-green-100 text-green-600 px-4 py-2 rounded-lg hover:scale-105 active:scale-95 transition-all duration-300"
              >
                Resume
              </a>
              <button
                onClick={() => setIsEdit(true)}
                className="text-gray-500 border border-gray-300 rounded-lg px-4 py-2 hover:scale-105 active:scale-95 transition-all duration-300"
              >
                Edit
              </button>
            </div>
          )}
        </div>
        <h2 className="text-xl font-semibold mb-4">Jobs Applied</h2>
        <table className=" min-w-full bg-white border rounded-lg dark:bg-gray-950 dark:text-white">
          <thead>
            <tr>
              <th className="py-3 px-4 border-b text-left">Company</th>
              <th className="py-3 px-4 border-b text-left">Job Title</th>
              <th className="py-3 px-4 border-b text-left max-sm:hidden">
                Location
              </th>
              <th className="py-3 px-4 border-b text-left max-sm:hidden">
                Date
              </th>
              <th className="py-3 px-4 border-b text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {userApplications.map((job, index) =>
              true ? (
                <tr key={index}>
                  <td className="px-4 py-3 flex items-center gap-2 border-b">
                    <img className="w-8 h-8" src={job.companyId.image} alt="" />
                    {job.companyId.name}
                  </td>
                  <td className="px-4 py-2 border-b">{job.jobId.title}</td>
                  <td className="px-4 py-2 border-b max-sm:hidden">
                    {job.jobId.location}
                  </td>
                  <td className="px-4 py-2 border-b max-sm:hidden">
                    {moment(job.date).format("ll")}
                  </td>
                  <td className="px-4 py-2 border-b">
                    <span
                      className={`${
                        job.status === "Accepted"
                          ? "bg-green-100 dark:text-black"
                          : job.status === "Rejected"
                          ? "bg-red-100 dark:text-black"
                          : "bg-yellow-100 dark:text-black"
                      } px-4 py-1.5 rounded`}
                    >
                      {job.status}
                    </span>
                  </td>
                </tr>
              ) : null
            )}
          </tbody>
        </table>
      </div>
      <Footer />
    </>
  );
};

export default Applications;
