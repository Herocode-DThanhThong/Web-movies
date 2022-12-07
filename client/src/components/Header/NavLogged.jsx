import React from "react";
import { useNavigate } from "react-router-dom";
import { TOKEN, USER_INFO } from "../../utils/contants/settingSystem";
import avt from "../../assests/img/avt.png";
function NavLogged(props) {
  const navigate = useNavigate();
  const getInfoUser = () => {
    if (localStorage.getItem(USER_INFO)) {
      const data = JSON.parse(localStorage.getItem(USER_INFO));
      return data.username;
    }
  };
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-wrap gap-x-2 gap-y-2">
        <button
          onClick={() => {
            localStorage.removeItem(USER_INFO);
            localStorage.removeItem(TOKEN);
            navigate("/login");
          }}
          className="bg-red-600 text-white font-medium inline-flex items-center  border-0 py-1 px-3 focus:outline-none hover:bg-opacity-5 hover:text-red-500   rounded text-base mt-4 md:mt-0"
        >
          Đăng xuất
        </button>
        <div className="relative mx-2 text-white font-medium inline-flex items-center  border-0 py-1 rounded text-base mt-4 md:mt-0 flex-shrink-0">
          <img
            src={avt}
            alt="error"
            className="w-6 h-6 border rounded-full dark:bg-coolGray-500 dark:border-coolGray-700"
          />
        </div>
        <p className="text-white font-sans capitalize">{getInfoUser()}</p>
      </div>
    </div>
  );
}

export default NavLogged;
