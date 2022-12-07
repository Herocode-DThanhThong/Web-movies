import { useFormik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { REGISTER_USER_SAGA } from "../../redux/sagas/contants/manageUserContants";

function RegisterForm(props) {
  const dispatch = useDispatch();
  const { handleSubmit, handleChange, values, errors, touched } = useFormik({
    initialValues: {
      username: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .required("Required")
        .min(3, "Username must 3 characters")
        .max(20, "Username must less than 20 characters"),
      password: Yup.string()
        .required("Required")
        .min(6, "Password must 6 characters")
        .max(20, "Password must less than 20 characters"),
      confirmPassword: Yup.string()
        .required("Required")
        .oneOf([Yup.ref("password"), null], "Passwords doesn't match"),
    }),

    onSubmit: (values) => {
      dispatch({
        type: REGISTER_USER_SAGA,
        userData: values,
      });
    },
  });
  return (
    <form className="text-center" onSubmit={handleSubmit}>
      <h1 className="font-bold tracking-wider text-3xl mb-8 w-full text-white">
        Đăng kí
      </h1>
      <div className="py-2 text-left">
        <input
          name="username"
          type="text"
          value={values.username}
          onChange={handleChange}
          className="bg-gray-200 border-2 border-gray-100 focus:outline-none block w-full py-2 px-4 rounded-lg focus:border-gray-700 "
          placeholder="Tài khoản"
        />
        {errors && touched.username && (
          <p className="text-red-600 mx-2 mt-1 font-sans">{errors.username}</p>
        )}
      </div>
      <div className="py-2 text-left">
        <input
          name="password"
          value={values.password}
          onChange={handleChange}
          type="password"
          className=" border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700 "
          placeholder="Mật khẩu"
        />
        {errors && touched.password && (
          <p className="text-red-600 mx-2 mt-1 font-sans">{errors.password}</p>
        )}
      </div>
      <div className="py-2 text-left">
        <input
          name="confirmPassword"
          type="password"
          onChange={handleChange}
          value={values.confirmPassword}
          className=" border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700 "
          placeholder="Nhập lại mật khẩu"
        />
        {errors && touched.confirmPassword && (
          <p className="text-red-600 mx-2 mt-1 font-sans">
            {errors.confirmPassword}
          </p>
        )}
      </div>
      <div className="py-2">
        <button
          type="submit"
          className="focus:outline-none bg-red-600 text-white font-bold tracking-wider block w-full p-2 rounded-lg focus:border-gray-700 hover:opacity-2"
        >
          Đăng kí
        </button>
      </div>
    </form>
  );
}

export default RegisterForm;
