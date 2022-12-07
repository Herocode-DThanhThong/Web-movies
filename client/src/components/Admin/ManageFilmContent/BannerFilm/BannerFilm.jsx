import { DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Table } from "antd";
import moment from "moment";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { OPEN_FORM_HOC } from "../../../../redux/reducers/types/drawerTypes";
import {
  DELETE_BANNER_SAGA,
  GET_BANNER_SAGA,
} from "../../../../redux/sagas/contants/manageFilmContants";
import FormAddBanner from "../../../Form/FormAddBanner";
function BannerFilm(props) {
  const { listBanner } = useSelector((state) => state.filmReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: GET_BANNER_SAGA,
    });
  }, []);
  let data = listBanner;
  const columns = [
    {
      title: "idBanner",
      dataIndex: "_id",
    },

    {
      title: "idYoutube",
      dataIndex: "idYoutube",
    },
    {
      title: "Image",
      dataIndex: "image",
      render: (text, record) => {
        return (
          <img
            style={{
              width: "50px",
              height: "50px",
              objectFit: "cover",
              borderRadius: "8px",
            }}
            src={text}
            alt="error"
          />
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
          <>
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
                    type: DELETE_BANNER_SAGA,
                    id: record._id,
                  });
                }
              }}
            >
              <DeleteOutlined className="text-xl" />
            </span>
          </>
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
        Quản lí Banner
      </h1>
      <div className="mb-2">
        <Button
          onClick={() => {
            dispatch({
              type: OPEN_FORM_HOC,
              ComponentContentDrawer: <FormAddBanner />,
              title: "ADD BANNER",
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

export default BannerFilm;
