import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Index from "./components/Home";
import NavBar from "./components/NavBar/NavBar";
import Login from "./components/Auth/Login";

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
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
