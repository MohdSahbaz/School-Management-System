import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const StudentDetail = () => {
  const { studentId } = useParams(); // Get the studentId from the route
  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch student details using the studentId
    const fetchStudent = async () => {
      // Simulate fetching data from an API or database
      const studentData = {
        id: studentId,
        name: "John Doe",
        email: "johndoe@student.com",
        grade: "12th Grade",
        attendance: "95%",
        address: "1234 Elm Street, City, Country",
        parentName: "Jane Doe",
        parentContact: "123-456-7890",
      };

      setStudent(studentData);
      setLoading(false);
    };

    fetchStudent();
  }, [studentId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!student) {
    return <div>No student found.</div>;
  }

  return (
    <div className="p-6">
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg p-8">
        {/* Student details */}
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Student Details
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-blue-50 p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold text-blue-800">Basic Info</h2>
            <p className="mt-2 text-gray-600">Name: {student.name}</p>
            <p className="mt-2 text-gray-600">Email: {student.email}</p>
            <p className="mt-2 text-gray-600">Grade: {student.grade}</p>
            <p className="mt-2 text-gray-600">
              Attendance: {student.attendance}
            </p>
          </div>

          {/* Parents details */}
          <div className="bg-green-50 p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold text-green-800">
              Parent Info
            </h2>
            <p className="mt-2 text-gray-600">
              Parent Name: {student.parentName}
            </p>
            <p className="mt-2 text-gray-600">
              Parent Contact: {student.parentContact}
            </p>
            <p className="mt-2 text-gray-600">Address: {student.address}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDetail;
