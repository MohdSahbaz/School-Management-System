import React, { useState } from "react";

const ManageTeachers = () => {
  const [teachers, setTeachers] = useState([
    { id: 1, name: "John Doe", subject: "Math", email: "john.doe@school.com" },
    {
      id: 2,
      name: "Jane Smith",
      subject: "English",
      email: "jane.smith@school.com",
    },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [newTeacher, setNewTeacher] = useState({
    name: "",
    subject: "",
    email: "",
  });

  const handleChange = (e) => {
    setNewTeacher({
      ...newTeacher,
      [e.target.name]: e.target.value,
    });
  };

  const addTeacher = (e) => {
    e.preventDefault();
    const teacherToAdd = {
      id: teachers.length + 1,
      ...newTeacher,
    };
    setTeachers([...teachers, teacherToAdd]);
    setShowForm(false);
    setNewTeacher({ name: "", subject: "", email: "" });
  };

  const removeTeacher = (id) => {
    setTeachers(teachers.filter((teacher) => teacher.id !== id));
  };

  return (
    <div className="p-6">
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold mb-6">Manage Teachers</h1>

        {/* Button to show the form */}
        <div className="mb-6">
          <button
            onClick={() => setShowForm(true)}
            className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-600"
          >
            Add New Teacher
          </button>
        </div>

        {/* Add Teacher Form */}
        {showForm && (
          <div className="mb-6 bg-gray-100 p-6 rounded-lg shadow">
            <form onSubmit={addTeacher}>
              <div className="mb-4">
                <label className="block text-gray-700">Name</label>
                <input
                  type="text"
                  name="name"
                  value={newTeacher.name}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border border-gray-300 rounded-lg"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={newTeacher.subject}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border border-gray-300 rounded-lg"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  value={newTeacher.email}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border border-gray-300 rounded-lg"
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-green-500 text-white py-2 px-4 rounded-lg shadow hover:bg-green-600"
                >
                  Add Teacher
                </button>
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="ml-4 bg-red-500 text-white py-2 px-4 rounded-lg shadow hover:bg-red-600"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Teachers List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {teachers.map((teacher) => (
            <div key={teacher.id} className="bg-gray-100 p-4 rounded-lg shadow">
              <h2 className="text-xl font-semibold">{teacher.name}</h2>
              <p className="text-gray-700">Subject: {teacher.subject}</p>
              <p className="text-gray-500">Email: {teacher.email}</p>
              <button
                onClick={() => removeTeacher(teacher.id)}
                className="mt-4 bg-red-500 text-white py-2 px-4 rounded-lg shadow hover:bg-red-600"
              >
                Remove Teacher
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ManageTeachers;
