import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ViewStudentRecords = () => {
  const navigate = useNavigate();
  const [students, setStudents] = useState([
    { id: 1, name: "Alice Johnson", grade: "12th", attendance: "95%" },
    { id: 2, name: "Bob Williams", grade: "11th", attendance: "88%" },
  ]);

  return (
    <div className="p-6">
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold mb-6">Student Records</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {students.map((student) => (
            <div
              key={student.id}
              onClick={() => navigate(`${student.id}`)}
              className="bg-gray-100 p-4 rounded-lg shadow"
            >
              <h2 className="text-xl font-semibold">{student.name}</h2>
              <p className="text-gray-700">Grade: {student.grade}</p>
              <p className="text-gray-500">Attendance: {student.attendance}</p>
              <button className="mt-4 bg-green-500 text-white py-2 px-4 rounded-lg shadow hover:bg-green-600">
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ViewStudentRecords;
