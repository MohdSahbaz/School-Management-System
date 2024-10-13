import React from "react";

const StudentDashboard = () => {
  const studentInfo = {
    name: "Jane Smith",
    grade: "12th Grade",
    school: "Solker School of Excellence",
    email: "janesmith@student.solkerschool.com",
    enrolledSubjects: ["Mathematics", "Physics", "Chemistry", "English"],
    welcomeMessage: "Keep striving for excellence in your studies and beyond.",
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg p-8">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800">
            Welcome, {studentInfo.name}
          </h1>
          <p className="text-lg text-gray-600 mt-2">{studentInfo.school}</p>
          <p className="text-sm text-gray-500 mt-1">{studentInfo.email}</p>
        </div>

        {/* Student Info Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-blue-100 p-6 rounded-lg shadow">
            <h2 className="text-2xl font-semibold text-blue-800">
              Student Information
            </h2>
            <p className="text-gray-700 mt-4">
              {studentInfo.name} is currently enrolled in the{" "}
              {studentInfo.grade} with the following subjects:
              <ul className="list-disc list-inside mt-2 text-gray-600">
                {studentInfo.enrolledSubjects.map((subject, index) => (
                  <li key={index}>{subject}</li>
                ))}
              </ul>
            </p>
          </div>

          <div className="bg-green-100 p-6 rounded-lg shadow">
            <h2 className="text-2xl font-semibold text-green-800">
              Student's Message
            </h2>
            <p className="text-gray-700 mt-4">"{studentInfo.welcomeMessage}"</p>
          </div>
        </div>

        {/* Dashboard Links or Additional Info */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold text-gray-800">
              View Assignments
            </h3>
            <p className="text-gray-600 mt-2">
              Check and submit your assignments for each subject.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold text-gray-800">View Grades</h3>
            <p className="text-gray-600 mt-2">
              Access your academic performance and recent grades.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold text-gray-800">
              View Attendance
            </h3>
            <p className="text-gray-600 mt-2">
              Keep track of your attendance records and stay on top of your
              academic standing.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
