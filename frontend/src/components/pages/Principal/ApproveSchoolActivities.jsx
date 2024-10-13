import React, { useState } from "react";

const ApproveSchoolActivities = () => {
  const [activities, setActivities] = useState([
    {
      id: 1,
      name: "Science Fair",
      date: "October 20, 2024",
      status: "Pending",
    },
    { id: 2, name: "Sports Day", date: "November 15, 2024", status: "Pending" },
  ]);

  const approveActivity = (id) => {
    setActivities(
      activities.map((activity) =>
        activity.id === id ? { ...activity, status: "Approved" } : activity
      )
    );
  };

  const rejectActivity = (id) => {
    setActivities(
      activities.map((activity) =>
        activity.id === id ? { ...activity, status: "Rejected" } : activity
      )
    );
  };

  return (
    <div className="p-6">
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold mb-6">Approve School Activities</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {activities.map((activity) => (
            <div
              key={activity.id}
              className="bg-gray-100 p-4 rounded-lg shadow"
            >
              <h2 className="text-xl font-semibold">{activity.name}</h2>
              <p className="text-gray-700">Date: {activity.date}</p>
              <p
                className={`text-${
                  activity.status === "Approved"
                    ? "green"
                    : activity.status === "Rejected"
                    ? "red"
                    : "yellow"
                }-500`}
              >
                Status: {activity.status}
              </p>
              <div className="mt-4">
                <button
                  onClick={() => approveActivity(activity.id)}
                  className="bg-green-500 text-white py-2 px-4 rounded-lg shadow hover:bg-green-600 mr-2"
                >
                  Approve
                </button>
                <button
                  onClick={() => rejectActivity(activity.id)}
                  className="bg-red-500 text-white py-2 px-4 rounded-lg shadow hover:bg-red-600"
                >
                  Reject
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ApproveSchoolActivities;
