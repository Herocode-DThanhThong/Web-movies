import React from "react";
import { Link } from "react-router-dom";
import RegisterForm from "../components/RegisterForm.jsx/RegisterForm";

function Register(props) {
  return (
    <section className="min-h-screen flex flex-col">
      <div className="flex flex-1 items-center justify-center px-8">
        <div className="bg-black bg-opacity-70 rounded-lg  px-4 lg:px-24 py-16 lg:max-w-xl sm:max-w-md w-full text-center">
          <RegisterForm />
          <div className="text-center text-white text-xl mt-2">
            <span>Bạn đã có tài khoản?</span>
          </div>
          <Link
            to="/login"
            className="text-md mt-4 text-indigo-600 underline font-semibold hover:text-indigo-800"
          >
            Đăng nhập
          </Link>
          <div className="text-center mt-12"></div>
        </div>
      </div>
    </section>
  );
}

export default Register;
