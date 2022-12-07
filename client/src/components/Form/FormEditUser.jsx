import { Select } from "antd";
import { useFormik, withFormik } from "formik";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { connect } from "react-redux";
import { UPDATE_USER_SAGA } from "../../redux/sagas/contants/manageUserContants";
import { SET_SUBMIT_FORM_HOC } from "../../redux/reducers/types/drawerTypes";
const { Option } = Select;
function FormEditUser(props) {
  const dispatch = useDispatch();
  const { callBackSubmit } = useSelector((state) => state.drawerReducer);
  const { handleSubmit, handleChange, values, errors, touched } = props;

  useEffect(() => {
    dispatch({
      type: SET_SUBMIT_FORM_HOC,
      callBackSubmit: handleSubmit,
    });
  }, []);
  return (
    <form onSubmit={callBackSubmit}>
      <div>
        <h4 className="mb-2">Username: </h4>
        <input
          name="username"
          type="text"
          style={{ borderWidth: "1px" }}
          value={values.username}
          onChange={handleChange}
          className="focus:outline-none block w-full py-1.5 px-4 rounded focus:border-blue-600"
        />
        {errors && (
          <p className="text-red-600 mx-2 mt-1 font-sans">{errors.username}</p>
        )}
      </div>

      <div className="mt-2 xl:w-100">
        <h4 className="mb-1">Role: </h4>
        <select
          defaultValue={values.role}
          className="form-select appearance-none block w-full px-3 py-1 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          onChange={handleChange}
          name="role"
        >
          <option value="ADMIN">ADMIN</option>
          <option value="CUSTOMER">CUSTOMER</option>
        </select>
      </div>
    </form>
  );
}

const FormEditUserWithFormik = withFormik({
  enableReinitialize: true,
  mapPropsToValues: (props) => {
    console.log("props: ", props);
    const { userEdit } = props;
    return {
      id: userEdit?._id,
      username: userEdit?.username,
      role: userEdit?.role,
    };
  },
  validationSchema: Yup.object({
    username: Yup.string()
      .required("Required")
      .min(3, "Username must have 3 characters")
      .max(12, "Username must less than 12 characters"),
  }),
  handleSubmit: (values, { props }) => {
    const { dispatch } = props;
    console.log(values);
    dispatch({
      type: UPDATE_USER_SAGA,
      data: values,
    });
  },
})(FormEditUser);

const mapStateToProps = (state) => {
  return {
    userEdit: state.userReducer.userEdit,
  };
};

export default connect(mapStateToProps)(FormEditUserWithFormik);
