import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ApplyJob from "./pages/ApplyJob";
import Applications from "./pages/Applications";
import RecruiterLogin from "./components/RecruiterLogin";
import { AppContext } from "./context/AppContext";
import Dashboard from "./pages/Dashboard";
import AddJob from "./pages/AddJob";
import ManageJobs from "./pages/ManageJobs";
import ViewApplications from "./pages/ViewApplications";
import "quill/dist/quill.snow.css";
import { ToastContainer, toast } from "react-toastify";

const App = () => {
  const { showRecruiterLogin, darkMode, companyToken } = useContext(AppContext);

  return (
    <div className={`${darkMode && "dark"}`}>
      <div className="dark:bg-black">
        <ToastContainer />
        {showRecruiterLogin && <RecruiterLogin />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/apply-job/:id" element={<ApplyJob />} />
          <Route path="/applications" element={<Applications />} />
          <Route path="/dashboard" element={<Dashboard />}>
            {companyToken ? (
              <>
                <Route path="add-job" element={<AddJob />} />
                <Route path="manage-jobs" element={<ManageJobs />} />
                <Route
                  path="view-applications"
                  element={<ViewApplications />}
                />
              </>
            ) : null}
          </Route>
        </Routes>
      </div>
    </div>
  );
};

export default App;
