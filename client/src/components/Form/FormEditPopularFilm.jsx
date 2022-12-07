import { Select } from "antd";
import { withFormik } from "formik";
import { useEffect, useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { SET_SUBMIT_FORM_HOC } from "../../redux/reducers/types/drawerTypes";
import { EDIT_POPULAR_FILM_SAGA } from "../../redux/sagas/contants/manageFilmContants";
const { Option } = Select;
function FormEditPopularFilm(props) {
  const dispatch = useDispatch();
  const { callBackSubmit } = useSelector((state) => state.drawerReducer);
  const { setFieldValue, handleSubmit, handleChange, values, errors, touched } =
    props;
  const [valueTextarea, setValueTextarea] = useState(values.description);

  useEffect(() => {
    dispatch({
      type: SET_SUBMIT_FORM_HOC,
      callBackSubmit: handleSubmit,
    });
  }, []);
  return (
    <form onSubmit={callBackSubmit}>
      <div>
        <h4 className="mb-2">Name: </h4>
        <input
          name="name"
          type="text"
          style={{ borderWidth: "1px" }}
          value={values.name}
          onChange={handleChange}
          className="focus:outline-none block w-full py-1.5 px-4 rounded focus:border-blue-600"
        />
        {errors && touched.name && (
          <p className="text-red-600 mx-2 mt-1 font-sans">{errors.name}</p>
        )}
      </div>

      <div>
        <h4 className="mb-2">Image: </h4>
        <input
          name="image"
          type="text"
          style={{ borderWidth: "1px" }}
          value={values.image}
          onChange={handleChange}
          className="focus:outline-none block w-full py-1.5 px-4 rounded focus:border-blue-600"
        />
        {errors && touched.image && (
          <p className="text-red-600 mx-2 mt-1 font-sans">{errors.image}</p>
        )}
      </div>
      <div>
        <h4 className="mb-2">Image trailer: </h4>
        <input
          name="imgTrailer"
          type="text"
          style={{ borderWidth: "1px" }}
          value={values.imgTrailer}
          onChange={handleChange}
          className="focus:outline-none block w-full py-1.5 px-4 rounded focus:border-blue-600"
        />
        {errors && touched.imgTrailer && (
          <p className="text-red-600 mx-2 mt-1 font-sans">
            {errors.imgTrailer}
          </p>
        )}
      </div>
      <div>
        <h4 className="mb-2">Evaluate: </h4>
        <input
          name="evaluate"
          type="number"
          style={{ borderWidth: "1px" }}
          value={values.evaluate}
          onChange={handleChange}
          className="focus:outline-none block w-full py-1.5 px-4 rounded focus:border-blue-600"
        />
        {errors && touched.evaluate && (
          <p className="text-red-600 mx-2 mt-1 font-sans">{errors.evaluate}</p>
        )}
      </div>
      <div>
        <h4 className="mb-2">Description: </h4>
        <textarea
          className="resize bg-gray-200 rounded-md outline-blue-600"
          name="description"
          id=""
          cols="30"
          rows="10"
          onChange={async (e) => {
            await setValueTextarea(e.target.value);
            setFieldValue("description", e.target.value);
          }}
          value={valueTextarea}
        />

        {errors && touched.description && (
          <p className="text-red-600 mx-2 mt-1 font-sans">
            {errors.description}
          </p>
        )}
      </div>
    </form>
  );
}

const FormEditPopularFilmWithFormik = withFormik({
  enableReinitialize: true,
  mapPropsToValues: (props) => {
    const { popularFilmEdit } = props;
    return {
      id: popularFilmEdit?._id,
      name: popularFilmEdit?.name,
      image: popularFilmEdit?.image,
      imgTrailer: popularFilmEdit?.imgTrailer,
      evaluate: popularFilmEdit?.evaluate,
      description: popularFilmEdit?.description,
    };
  },
  validationSchema: Yup.object({
    name: Yup.string().required("Required"),
    image: Yup.string().required("Required"),
    imgTrailer: Yup.string().required("Required"),
    evaluate: Yup.string().required("Required"),
    description: Yup.string().required("Required"),
  }),
  handleSubmit: (values, { props }) => {
    const { dispatch } = props;
    dispatch({
      type: EDIT_POPULAR_FILM_SAGA,
      data: values,
    });
  },
})(FormEditPopularFilm);

const mapStateToProps = (state) => {
  return {
    popularFilmEdit: state.filmReducer.popularFilmEdit,
  };
};

export default connect(mapStateToProps)(FormEditPopularFilmWithFormik);
