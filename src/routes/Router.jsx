import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Home from "../pages/Home";
import About from "../pages/About";
import Careers from "../pages/Careers";
import Support from "../pages/Support";

const LayOut = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayOut />,
    children: [
      {path: "/", element: <Home/>},
      {path: "about", element: <About/>},
      {path: "careers", element: <Careers/>},
      {path: "support", element: <Support/>},
    ],
  },
]);

function Router() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default Router