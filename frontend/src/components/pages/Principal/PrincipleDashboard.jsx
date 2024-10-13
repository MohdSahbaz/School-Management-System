import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { FaEdit } from "react-icons/fa"; // Importing the edit icon

const PrincipalDashboard = () => {
  const navigate = useNavigate();
  const [welcomeMessage, setWelcomeMessage] = useState(
    "We are committed to excellence in education and leadership. Welcome to your dashboard!"
  );
  const [aboutMessage, setAboutMessage] = useState(
    "Solker is the Principal of Solker School of Excellence with over 15+ years in Educational Leadership. As an experienced educational leader, he is passionate about guiding both students and faculty towards success."
  );

  const principalInfo = {
    name: "Solker",
    role: "Principal",
    school: "Solker School of Excellence",
    email: "principal@solkerschool.com",
    experience: "15+ years in Educational Leadership",
  };

  const handleEditMessage = (setter) => {
    const newMessage = prompt("Edit your message:", setter());
    if (newMessage) {
      setter(newMessage);
    }
  };

  return (
    <div className="min-h-screen bg-yellow-100 p-6">
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg p-8">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800">
            Welcome, {principalInfo.role} {principalInfo.name}
          </h1>
          <p className="text-lg text-gray-600 mt-2">{principalInfo.school}</p>
          <p className="text-sm text-gray-500 mt-1">{principalInfo.email}</p>
        </div>

        {/* Principal Info Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-blue-100 p-6 rounded-lg shadow relative">
            <h2 className="text-2xl font-semibold text-blue-800">
              About the Principal
              <FaEdit
                className="absolute top-2 right-2 text-blue-600 cursor-pointer"
                onClick={() => handleEditMessage(setAboutMessage)}
              />
            </h2>
            <p className="text-gray-700 mt-4">{aboutMessage}</p>
          </div>

          <div className="bg-green-100 p-6 rounded-lg shadow relative">
            <h2 className="text-2xl font-semibold text-green-800">
              Principal's Message
              <FaEdit
                className="absolute top-2 right-2 text-green-600 cursor-pointer"
                onClick={() => handleEditMessage(setWelcomeMessage)}
              />
            </h2>
            <p className="text-gray-700 mt-4">"{welcomeMessage}"</p>
          </div>
        </div>

        {/* Dashboard Links or Additional Info */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div
            onClick={() => {
              navigate("manage-teachers");
            }}
            className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow cursor-pointer"
          >
            <h3 className="text-xl font-semibold text-gray-800">
              Manage Teachers
            </h3>
            <p className="text-gray-600 mt-2">
              Add, remove, or update teacher information in the system.
            </p>
          </div>

          <div
            onClick={() => {
              navigate("view-student-records");
            }}
            className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow cursor-pointer"
          >
            <h3 className="text-xl font-semibold text-gray-800">
              View Student Records
            </h3>
            <p className="text-gray-600 mt-2">
              Access and manage detailed student profiles, grades, and
              attendance.
            </p>
          </div>

          <div
            onClick={() => {
              navigate("approve-school-activities");
            }}
            className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow cursor-pointer"
          >
            <h3 className="text-xl font-semibold text-gray-800">
              Approve School Activities
            </h3>
            <p className="text-gray-600 mt-2">
              Review and approve upcoming school activities and events.
            </p>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default PrincipalDashboard;
