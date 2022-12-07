import jwt_decode from "jwt-decode";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { CHECK_ADMIN, CHECK_LOGIN } from "../redux/reducers/types/checkLogin";
import { TOKEN } from "../utils/contants/settingSystem";

function ProtectedRouteAdmin(props) {
  const dispatch = useDispatch();
  let token = localStorage.getItem(TOKEN);
  useEffect(() => {
    if (token) {
      dispatch({
        type: CHECK_LOGIN,
        isLogin: true,
      });
      if (jwt_decode(token)?.role === "ADMIN") {
        dispatch({
          type: CHECK_ADMIN,
          isAdmin: true,
        });
      } else {
        dispatch({
          type: CHECK_ADMIN,
          isAdmin: false,
        });
      }
    } else {
      dispatch({
        type: CHECK_LOGIN,
        isLogin: false,
      });
    }
  }, [dispatch, token]);
  return !token ? (
    <Navigate to={"/login"} />
  ) : jwt_decode(token)?.role === "ADMIN" ? (
    <Outlet />
  ) : (
    <Navigate to={"/"} />
  );
}

export default ProtectedRouteAdmin;
