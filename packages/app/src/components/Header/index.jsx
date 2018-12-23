import React from 'react';
import { Layout, Menu } from 'antd';
import './style.scss';

const { Header } = Layout;

/**
 * Header component
 * @type {React.PureComponent}
 */
const TopHeader = () => (
  <Layout className="">
    <Header>
      <Menu
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="1">Home</Menu.Item>
        <Menu.Item key="2">
          Product
        </Menu.Item>
        <Menu.Item key="3">Servics</Menu.Item>
      </Menu>
    </Header>
  </Layout>
);

export default TopHeader;
