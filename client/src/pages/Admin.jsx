import {
  BoxPlotOutlined,
  DesktopOutlined,
  UserOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
function Admin(props) {
  const [state, setState] = useState({
    collapsed: false,
  });

  const { pathname } = useLocation();

  const onCollapse = (collapsed) => {
    console.log(collapsed);
    setState({ collapsed });
  };

  const { collapsed } = state;
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <div className="logo" />
        <Menu theme="dark" mode="inline">
          <SubMenu key="sub0" icon={<DesktopOutlined />} title="Film">
            <Menu.Item key="1">
              <Link to="film/banner">
                <p className="mx-2">Banner</p>
              </Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="film/newFilm">
                <p className="mx-2">Phim mới</p>
              </Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to="film/popularFilm">
                <p className="mx-2">Phim phổ biến</p>
              </Link>
            </Menu.Item>
          </SubMenu>
          <Menu.Item key="4" icon={<UserOutlined />}>
            <Link to="user">
              <p className="mx-2">User</p>
            </Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Content style={{ margin: "0 16px" }}>
          <div
            className="site-layout-background"
            style={{ padding: 12, minHeight: 350 }}
          >
            <Outlet />
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
}

export default Admin;
