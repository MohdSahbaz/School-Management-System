import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Index from "./components/Home";
import NavBar from "./components/NavBar/NavBar";
import Login from "./components/Auth/Login";
import PrincipalDashboard from "./components/pages/Principal/PrincipleDashboard";
import ManageTeachers from "./components/pages/Principal/ManageTeachers";
import ViewStudentRecords from "./components/pages/Principal/ViewStudentRecords";
import ApproveSchoolActivities from "./components/pages/Principal/ApproveSchoolActivities";
import StudentDashboard from "./components/pages/Student/StudentDashboard";
import TeacherDashboard from "./components/pages/Teacher/TeacherDashboard";
import StudentDetail from "./components/pages/Student/StudentDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavBar />,
    children: [
      {
        path: "",
        element: <Index />,
      },
      {
        path: "login/:role",
        element: <Login />,
      },
      {
        path: "principal/dashboard",
        element: <PrincipalDashboard />,
        children: [
          {
            path: "manage-teachers",
            element: <ManageTeachers />,
          },
          {
            path: "view-student-records",
            element: <ViewStudentRecords />,
          },
          {
            path: "approve-school-activities",
            element: <ApproveSchoolActivities />,
          },
          {
            path: "view-student-records/:studentId",
            element: <StudentDetail />,
          },
        ],
      },
      {
        path: "teacher/dashboard",
        element: <TeacherDashboard />,
      },
      {
        path: "student/dashboard",
        element: <StudentDashboard />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
