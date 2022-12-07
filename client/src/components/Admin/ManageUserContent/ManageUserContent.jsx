import {
  DeleteOutlined,
  EditOutlined,
  SketchOutlined,
} from "@ant-design/icons";
import { Table, Tag } from "antd";
import moment from "moment";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { OPEN_FORM_HOC } from "../../../redux/reducers/types/drawerTypes";
import { SET_USER_EDIT } from "../../../redux/reducers/types/userType";
import {
  DELETE_USER_SAGA,
  GET_ALL_USER_SAGA,
} from "../../../redux/sagas/contants/manageUserContants";
import FormEditUser from "../../Form/FormEditUser";
import UserSearch from "./UserSearch";
function ManageUserContent(props) {
  const { allUser } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  let data = allUser;
  const columns = [
    {
      title: "ID",
      dataIndex: "_id",
      sorter: (a, b) => {
        let id1 = b._id.toLowerCase().trim();
        let id2 = a._id.toLowerCase().trim();
        if (id2 > id1) return -1;
        return 1;
      },
    },
    {
      title: "Username",
      dataIndex: "username",
    },
    {
      title: "ROLE",
      dataIndex: "role",
      render: (text, record) => {
        let color;
        if (record.role === "CUSTOMER") color = "geekblue";
        else color = "green";

        return <Tag color={color}>{text.toUpperCase()}</Tag>;
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
        return record.role !== "ADMIN" ? (
          <>
            <span
              style={{ cursor: "pointer" }}
              onClick={() => {
                dispatch({
                  type: OPEN_FORM_HOC,
                  ComponentContentDrawer: <FormEditUser />,
                  title: "EDIT USER",
                });
                dispatch({
                  type: SET_USER_EDIT,
                  userEdit: record,
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
                    type: DELETE_USER_SAGA,
                    id: record._id,
                  });
                }
              }}
            >
              <DeleteOutlined className="text-xl" />
            </span>

            {/* <span
            style={{ cursor: "pointer" }}
            className="rounded py-2 px-2 text-purple-700"
          >
            <CalendarOutlined className="text-xl" />
          </span> */}
          </>
        ) : (
          <>
            <span className="rounded py-2 px-2 ">
              <SketchOutlined className="text-xl text-yellow-500" />
            </span>
          </>
        );
      },
    },
  ];

  useEffect(() => {
    dispatch({
      type: GET_ALL_USER_SAGA,
    });
  }, []);
  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  return (
    <div>
      <h1 className="font-bold text-red-500 text-2xl my-2 text-center ">
        Quản Người dùng
      </h1>
      <UserSearch />
      <Table
        rowKey={"_id"}
        columns={columns}
        dataSource={data}
        onChange={onChange}
      />
    </div>
  );
}

export default ManageUserContent;
