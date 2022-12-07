import { Button } from "antd";
import { useFormik } from "formik";
import _ from "lodash";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { SET_SUBMIT_FORM_HOC } from "../../redux/reducers/types/drawerTypes";
import { ADD_EPISODE_FILM_SAGA } from "../../redux/sagas/contants/manageFilmContants";
function FormAddEpisodes(props) {
  const dispatch = useDispatch();
  const { record } = props;
  const { callBackSubmit } = useSelector((state) => state.drawerReducer);
  const { handleSubmit, handleChange, values, errors, touched, resetForm } =
    useFormik({
      initialValues: {
        idYoutube: "",
        image: "",
      },
      validationSchema: Yup.object({
        idYoutube: Yup.string().required("Required"),
        image: Yup.string().required("Required"),
      }),

      onSubmit: (values, { resetForm }) => {
        dispatch({
          type: ADD_EPISODE_FILM_SAGA,
          data: {
            ...values,
            id: record._id,
          },
        });
        resetForm();
      },
    });

  const countEpisodAdded = () => {
    let count = 0;
    record?.episodes.find((item, index) => {
      if (!_.isEmpty(item)) count++;
    });
    return count;
  };

  useEffect(() => {
    dispatch({
      type: SET_SUBMIT_FORM_HOC,
      callBackSubmit: handleSubmit,
    });
  }, []);
  return (
    <form onSubmit={callBackSubmit}>
      <div>
        <h4 className="mb-2">ID Youtube: </h4>
        <input
          name="idYoutube"
          type="text"
          placeholder="idYoutube"
          style={{ borderWidth: "1px" }}
          value={values.idYoutube}
          onChange={handleChange}
          className="focus:outline-none border-sky-300 block w-full py-1.5 px-4 rounded focus:border-blue-600"
        />
        {errors && touched.idYoutube && (
          <p className="text-red-600 mx-2 mt-1 font-sans">{errors.idYoutube}</p>
        )}
      </div>
      <div>
        <h4 className="mb-2">Image: </h4>
        <input
          name="image"
          type="text"
          placeholder="https://picsums.photos/500"
          style={{ borderWidth: "1px" }}
          value={values.image}
          onChange={handleChange}
          className="focus:outline-none border-sky-300 block w-full py-1.5 px-4 rounded focus:border-blue-600"
        />
        {errors && touched.image && (
          <p className="text-red-600 mx-2 mt-1 font-sans">{errors.image}</p>
        )}
      </div>
      <div className="mt-2">
        <h4 className="my-2">Số tập hiện có:</h4>
        <Button type="primary" danger>
          {countEpisodAdded()}
        </Button>
      </div>

      <div className="mt-2">
        <h4 className="mb-2">Thêm tập phim: </h4>
        <input
          name="number"
          type="number"
          disabled
          style={{ borderWidth: "1px" }}
          value={countEpisodAdded() + 1}
          className="focus:outline-none bg-gray-400 border-sky-300 block w-full py-1.5 px-4 rounded focus:border-blue-600"
        />
      </div>
    </form>
  );
}

export default FormAddEpisodes;
