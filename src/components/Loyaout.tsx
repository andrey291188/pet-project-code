import Headers from "./Headers/Headers";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const Layout = () => {
  return (
    <>
      <Headers />
      <Suspense fallback={<div>Loading...</div>}>
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
