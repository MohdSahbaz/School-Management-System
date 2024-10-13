import React from "react";

const TeacherDashboard = () => {
  const teacherInfo = {
    name: "John Doe",
    role: "Math Teacher",
    school: "Solker School of Excellence",
    email: "johndoe@solkerschool.com",
    experience: "10 years of teaching Mathematics",
    subjects: ["Algebra", "Geometry", "Calculus"],
    welcomeMessage: "Empowering students with knowledge, one equation at a time.",
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg p-8">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800">
            Welcome, {teacherInfo.role} {teacherInfo.name}
          </h1>
          <p className="text-lg text-gray-600 mt-2">
            {teacherInfo.school}
          </p>
          <p className="text-sm text-gray-500 mt-1">
            {teacherInfo.email}
          </p>
        </div>

        {/* Teacher Info Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-purple-100 p-6 rounded-lg shadow">
            <h2 className="text-2xl font-semibold text-purple-800">
              About the Teacher
            </h2>
            <p className="text-gray-700 mt-4">
              {teacherInfo.name} has {teacherInfo.experience} and teaches the following subjects:
              <ul className="list-disc list-inside mt-2 text-gray-600">
                {teacherInfo.subjects.map((subject, index) => (
                  <li key={index}>{subject}</li>
                ))}
              </ul>
            </p>
          </div>

          <div className="bg-yellow-100 p-6 rounded-lg shadow">
            <h2 className="text-2xl font-semibold text-yellow-800">
              Teacher's Message
            </h2>
            <p className="text-gray-700 mt-4">
              "{teacherInfo.welcomeMessage}"
            </p>
          </div>
        </div>

        {/* Dashboard Links or Additional Info */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold text-gray-800">
              Manage Class Assignments
            </h3>
            <p className="text-gray-600 mt-2">
              Create, review, or update class assignments and tasks for students.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold text-gray-800">
              Grade Student Work
            </h3>
            <p className="text-gray-600 mt-2">
              Review and grade student submissions and provide feedback.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold text-gray-800">
              View Attendance Records
            </h3>
            <p className="text-gray-600 mt-2">
              Manage and view the attendance records of your class.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherDashboard;
