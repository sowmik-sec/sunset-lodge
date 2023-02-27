import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Book from "./components/Book/Book";
import HomePage from "./components/Home/Home";
import Login from "./components/Login/Login";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Rooms from "./components/Rooms/Rooms";
import SignUp from "./components/SignUp/SignUp";
import Main from "./layout/Main";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        { path: "/", element: <HomePage /> },
        { path: "/rooms", element: <Rooms /> },
        {
          path: "/book",
          element: (
            <PrivateRoute>
              <Book />
            </PrivateRoute>
          ),
        },
        { path: "/about", element: <div>About</div> },
        { path: "/contact", element: <div>Contact</div> },
        { path: "/signup", element: <SignUp /> },
        { path: "/login", element: <Login /> },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
