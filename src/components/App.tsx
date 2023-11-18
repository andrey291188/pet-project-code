import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./Loyaout";
import "../App.css";
import { lazy, useEffect } from "react";
import { RootStore, useAppDispatch, useAppSelector } from "../store/store";
import PublicRoute from "./PublicRoute/PublicRoute";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import { currentUserThunk } from "../store/authorization/thunkAuth";
import { Loader } from "./Loader/Loader";

const Homepage = lazy(() => import("../pages/Homepage/Homepage"));
const Ads = lazy(() => import("../pages/Ads/Ads"));
const AdsUser = lazy(() => import("../pages/AdsUser/AdsUser"));
const Favorite = lazy(() => import("../pages/Favorite/Favorite"));
const Login = lazy(() => import("../pages/User/Login/Login"));
const Register = lazy(() => import("../pages/User/Register/Register"));
const AdminMenu = lazy(() => import("../pages/AdminMenu/AdminMenu"));
const PurchasesUser = lazy(() => import("../pages/User/AdsUser/Purchases/PurchasesUser"));
const SalesUser = lazy(
  () => import("../pages/User/AdsUser/Sales/SalesUser")
);
const AdsDetails = lazy(() => import("./AdsDetails/AdsDetails"));
const AdsRedirect = lazy(() => import("./AdsRedirect/AdsRedirect"));

const authSelector = (state: RootStore) => {
  return state.auth as { isRefreshing: boolean };
};

function App() {
  const { isRefreshing } = useAppSelector(authSelector);
  const dispatch = useAppDispatch();

  useEffect(() => {
     dispatch(currentUserThunk());
  }, [dispatch]);

  return isRefreshing ? (
     <Loader/> 
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path="ads" element={<Ads/>}/>
        <Route path="favorite" element={<Favorite />}/>
        <Route path="adsUser" element={ <PrivateRoute>
              <AdsUser />
            </PrivateRoute>} />
        <Route
          path="ads/:adsID"
          element={
            <PrivateRoute>
              <AdsDetails />
            </PrivateRoute>
          }
        />
        <Route
          path="registered"
          element={
            <PublicRoute>
              <Register />
            </PublicRoute>
          }
        />
        <Route
          path="login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="admin-menu"
          element={
            <PrivateRoute>
              <AdminMenu />
            </PrivateRoute>
          }
        />
        <Route
          path="buyer"
          element={
            <PrivateRoute>
              <PurchasesUser />
            </PrivateRoute>
          }
        />
        <Route
          path="seller"
          element={
            <PrivateRoute>
              <SalesUser />
            </PrivateRoute>
          }
        />
         <Route path="favorite/:adsID" element={<AdsRedirect />} />
        <Route path="ads/:adsID/:adsID" element={<AdsRedirect />} />
        <Route path="*" element={<Navigate to={"/"} />} />
      </Route>
    </Routes>
  );
}

export default App;
