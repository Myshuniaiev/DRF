import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme, Input, Avatar } from "antd";
import { Outlet, useNavigate } from "react-router-dom";
import Text from "antd/es/typography/Text";
import Title from "antd/es/typography/Title";

const { Search } = Input;
const { Header, Sider, Content } = Layout;

const MainLayout: React.FC = () => {
  const navigate = useNavigate();

  const [collapsed, setCollapsed] = useState(true);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const onSearch = (value: string) => console.log(value);

  return (
    <Layout style={{ height: "100vh" }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <Title
          level={4}
          style={{
            color: "#fff",
            margin: "10px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          DFG
        </Title>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              onClick: () => navigate("/"),
              icon: <AppstoreOutlined />,
              label: "Dashboard",
            },
            {
              key: "2",
              onClick: () => navigate("/profile"),
              icon: <UserOutlined />,
              label: "Profile",
            },
            {
              key: "3",
              onClick: () => navigate("/settings"),
              icon: <SettingOutlined />,
              label: "Settings",
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
