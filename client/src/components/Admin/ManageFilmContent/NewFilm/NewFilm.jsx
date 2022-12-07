import {
  DeleteOutlined,
  EditOutlined,
  ExceptionOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { Button, Table } from "antd";
import moment from "moment";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { OPEN_FORM_HOC } from "../../../../redux/reducers/types/drawerTypes";
import { SET_NEW_FILM_EDIT } from "../../../../redux/reducers/types/filmTypes";
import {
  DELETE_NEW_FILM_SAGA,
  GET_LIST_NEW_FILM_SAGA,
} from "../../../../redux/sagas/contants/manageFilmContants";
import FormAddEpisodes from "../../../Form/FormAddEpisodes";
import FormAddNewFilm from "../../../Form/FormAddNewFilm";
import FormEditNewFilm from "../../../Form/FormEditNewFilm";

function NewFilm(props) {
  const { listNewFilm } = useSelector((state) => state.filmReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: GET_LIST_NEW_FILM_SAGA,
    });
  }, []);
  let data = listNewFilm;
  const columns = [
    {
      title: "ID",
      dataIndex: "_id",
    },
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Image",
      dataIndex: "image",
      render: (text, record) => {
        return (
          <img
            src={text}
            style={{ width: 50, height: 50, borderRadius: "8px" }}
            alt="error"
          />
        );
      },
    },
    {
      title: "ImgTrailer",
      dataIndex: "imgTrailer",
      render: (text, record) => {
        return (
          <img
            src={text}
            style={{ width: 50, height: 50, borderRadius: "8px" }}
            alt="error"
          />
        );
      },
    },
    {
      title: "Evaluate",
      dataIndex: "evaluate",
      render: (text, record) => {
        return <span className="text-red-700 font-bold">{text}</span>;
      },
    },
    {
      title: "Description",
      dataIndex: "description",
      render: (text, record) => {
        return (
          <span>{text.length > 100 ? text.slice(0, 100) + "..." : text}</span>
        );
      },
    },
    {
      title: "Created At",
      dataIndex: "createdAt",
      render: (text, record) => {
        return moment(text).format("DD/MM/YYYY");
      },
    },
    {
      title: "Action",
      dataIndex: "action",
      render: (text, record) => {
        return (
          <div className="flex">
            <span
              style={{ cursor: "pointer" }}
              onClick={() => {
                dispatch({
                  type: OPEN_FORM_HOC,
                  ComponentContentDrawer: <FormEditNewFilm />,
                  title: "EDIT NEW FILM",
                });
                dispatch({
                  type: SET_NEW_FILM_EDIT,
                  filmEdit: record,
                });
              }}
              className="mr-2 py-2 px-2 rounded text-blue-700 hover:bg-blue-700 hover:text-white transition-all"
            >
              <EditOutlined className="text-xl" />
            </span>
            <span
              style={{ cursor: "pointer" }}
              className="rounded py-2 px-2 text-red-700 hover:bg-red-700 hover:text-white transition-all"
              onClick={() => {
                if (
                  window.confirm(
                    "Bạn có chắc muốn xóa không? Hành động này không thể khôi phục"
                  )
                ) {
                  dispatch({
                    type: DELETE_NEW_FILM_SAGA,
                    id: record._id,
                  });
                }
              }}
            >
              <DeleteOutlined className="text-xl" />
            </span>
            <span
              style={{ cursor: "pointer" }}
              onClick={() => {
                dispatch({
                  type: OPEN_FORM_HOC,
                  ComponentContentDrawer: <FormAddEpisodes record={record} />,
                  title: "THÊM TẬP PHIM",
                });
              }}
              className="mr-2 py-2 px-2 rounded text-purple-700 hover:bg-purple-700 hover:text-white transition-all"
            >
              <ExceptionOutlined className="text-xl" />
            </span>
          </div>
        );
      },
    },
  ];

  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };
  return (
    <div>
      <h1 className="font-bold text-red-500 text-2xl my-2 text-center ">
        Quản lí phim
      </h1>
      <div className="mb-2">
        <Button
          onClick={() => {
            dispatch({
              type: OPEN_FORM_HOC,
              ComponentContentDrawer: <FormAddNewFilm />,
              title: "ADD FILM NEW",
            });
          }}
          icon={<PlusOutlined className="text-sky-500" />}
          size="medium"
        >
          <span>Add</span>
        </Button>
      </div>
      <Table
        rowKey={"_id"}
        columns={columns}
        dataSource={data}
        onChange={onChange}
      />
    </div>
  );
}

export default NewFilm;
