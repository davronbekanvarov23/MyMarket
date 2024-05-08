// react-router-dom
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

// layouts
import MainLayout from "./layouts/MainLayout";

//context
import { useContext } from "react";
import { GlobalContext } from "./context/useGlobal";

//components
import ProtectedRoutes from "./components/ProtectedRoutes";

// pages
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Product from "./pages/Product";
import Signup from "./pages/SignUp";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

function App() {
  const user = useContext(GlobalContext);
  const routes = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoutes user={user}>
          <MainLayout />
        </ProtectedRoutes>
      ),
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/product/:id",
          element: <Product />,
        },
      ],
    },
    { path: "/login", element: user ? <Navigate to="/" /> : <Login /> },

    { path: "/signup", element: user ? <Navigate to="/" /> : <SignUp /> },
  ]);

  return <RouterProvider router={routes} />;
}

export default App;
