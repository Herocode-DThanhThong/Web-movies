import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { CHECK_LOGIN } from "../redux/reducers/types/checkLogin";
import { TOKEN } from "../utils/contants/settingSystem";

function ProtectRouteAuth(props) {
  const dispatch = useDispatch();
  let token = localStorage.getItem(TOKEN);
  useEffect(() => {
    if (token) {
      dispatch({
        type: CHECK_LOGIN,
        isLogin: true,
      });
    } else {
      dispatch({
        type: CHECK_LOGIN,
        isLogin: false,
      });
    }
  }, [dispatch, token]);
  return token ? (
    <Navigate to={"/home"} />
  ) : (
    <div
      style={{
        backgroundSize: "cover",
        minHeight: "100vh",
        backgroundImage:
          "url('https://assets.nflxext.com/ffe/siteui/vlv3/6dea7743-5586-45d1-89a2-9569b1bb0340/b6f5515e-a664-442c-b18a-b67187d501f9/VN-vi-20220207-popsignuptwoweeks-perspective_alpha_website_medium.jpg')",
      }}
    >
      <Outlet />
    </div>
  );
}

export default ProtectRouteAuth;
