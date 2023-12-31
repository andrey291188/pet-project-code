import Headers from "./Headers/Headers";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Loader } from "./Loader/Loader";


const Layout = () => {
  return (
    <>
      <Headers />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <ToastContainer
          position="top-center"
          autoClose={2000}
          hideProgressBar={true}
          theme="colored"
        />
    </>
  );
};

export default Layout;
