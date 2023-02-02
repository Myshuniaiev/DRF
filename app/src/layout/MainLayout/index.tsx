import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme, Input, Avatar } from "antd";
import { Outlet } from "react-router-dom";
import Text from "antd/es/typography/Text";

const { Search } = Input;
const { Header, Sider, Content } = Layout;

const MainLayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const onSearch = (value: string) => console.log(value);

  return (
    <Layout style={{ height: "100vh" }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <UserOutlined />,
              label: "",
            },
            {
              key: "2",
              icon: <VideoCameraOutlined />,
              label: "nav 2",
            },
            {
              key: "3",
              icon: <UploadOutlined />,
              label: "nav 3",
            },
          ]}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          style={{
            display: "flex",
            alignItems: "center",
            padding: 0,
            background: colorBgContainer,
          }}
        >
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              style: {
                lineHeight: 0,
                height: "100%",
                display: "flex",
                alignItems: "center",
              },
              className: "trigger",
              onClick: () => setCollapsed(!collapsed),
            }
          )}
          <Search
            placeholder="input search text"
            onSearch={onSearch}
            style={{ width: 200, marginRight: "auto" }}
          />
          <Text>Oleksii Myshuniaiev</Text>
          <Avatar
            style={{
              backgroundColor: "#87d068",
              margin: "24px",
            }}
            icon={<UserOutlined />}
          />
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
