import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { USER_INFO } from "../../utils/contants/settingSystem";
import NavAdmin from "./NavAdmin";
import NavLogged from "./NavLogged";

function Nav(props) {
  const { isLogin, isAdmin } = useSelector((state) => state.checkLoginReducer);

  const renderNavlogged = () => {
    if (!isLogin && !isAdmin) {
      return (
        <>
          <Link to="/login" className="mx-2 hover:text-gray-900">
            <button className="bg-red-600 text-white font-medium inline-flex items-center  border-0 py-1 px-3 focus:outline-none hover:bg-opacity-5 hover:text-red-500   rounded text-base mt-4 md:mt-0">
              Đăng nhập
            </button>
          </Link>
          <Link to="/register" className="mx-2 hover:text-gray-900">
            <button className="font-medium inline-flex items-center bg-black text-white border-0 py-1 px-3 focus:outline-none hover:bg-opacity-5 hover:text-red-500  rounded text-base mt-4 md:mt-0">
              Đăng kí
            </button>
          </Link>
        </>
      );
    } else if (isLogin && !isAdmin) {
      return <NavLogged />;
    } else {
      return <NavAdmin />;
    }
  };
  return (
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      {renderNavlogged()}
    </nav>
  );
}

export default Nav;
