// react-router-dom
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

// layouts
import MainLayout from "./layouts/MainLayout";

//context
import { useContext, useEffect } from "react";
import { GlobalContext } from "./context/useGlobal";

//components
import ProtectedRoutes from "./components/ProtectedRoutes";

// pages
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Product from "./pages/Product";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/firebaseConfig";
//
//actions
import { action as SignupAction } from "./pages/SignUp";
import { action as LoginAction } from "./pages/Login";

//firebasa
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase/firebaseConfig";
function App() {
  const { user, dispatch, authReady } = useContext(GlobalContext);
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
    {
      path: "/login",
      element: user ? <Navigate to="/" /> : <Login />,
      action: LoginAction,
    },

    {
      path: "/signup",
      element: user ? <Navigate to="/" /> : <SignUp />,
      action: SignupAction,
    },
  ]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      dispatch({ type: "LOG_IN", payload: user });
      dispatch({ type: "AUTH_READY" });
    });

    //
    async function getData() {
      const allData = [];
      const querySnapshot = await getDocs(collection(db, "products"));
      querySnapshot.docs.forEach((item) => {
        allData.push({ idf: item.id, ...item.data() });
      });
      dispatch({ type: "INITIAL_DATA", payload: allData });
    }

    getData();
  }, []);

  return <>{authReady && <RouterProvider router={routes} />}</>;
}

export default App;
