import React, { useState } from "react";
import { Drawer, Button, Space, Radio } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { HIDE_LOADING } from "../../redux/reducers/types/loadingType";
import { HIDE_DRAWER } from "../../redux/reducers/types/drawerTypes";
import { toast } from "react-toastify";

function DrawerApp(props) {
  const dispatch = useDispatch();
  const { visible, ComponentContentDrawer, callBackSubmit, title } =
    useSelector((state) => state.drawerReducer);

  const onClose = () => {
    dispatch({
      type: HIDE_DRAWER,
    });
  };
  return (
    <Drawer
      title={title}
      placement={"right"}
      width={500}
      onClose={onClose}
      visible={visible}
      extra={
        <Space>
          <Button onClick={onClose}>Cancel</Button>
          <Button
            danger
            onClick={() => {
              callBackSubmit();
            }}
          >
            OK
          </Button>
        </Space>
      }
    >
      {ComponentContentDrawer}
    </Drawer>
  );
}

export default DrawerApp;
