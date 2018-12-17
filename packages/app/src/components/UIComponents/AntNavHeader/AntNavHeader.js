import React from 'react';
import './AntNavHeader.css';
import {
  Layout, Menu, Icon, Row, Col, Button, Divider
} from 'antd';

const { SubMenu } = Menu;
const MenuItemGroup = Menu.ItemGroup;

class AntNavHeader extends React.Component {
  state = {
    current: 'mail'
  };

  handleClick = (e) => {
    this.setState({
      current: e.key
    });
  };

  render() {
    const { current } = this.state;
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Layout.Header style={{
          position: 'fixed',
          zIndex: 1,
          width: '100%',
          backgroundColor: 'white'
        }}
        >
          <Row type="flex" justify="center">
            <Col span={4}>
              <div className="logo">
                <h2>
                  BRAND
                  <b>LOGO</b>
                </h2>
              </div>
            </Col>
            <Col span={16} align="middle">
              <Menu
                style={{ lineHeight: '62px' }}
                onClick={this.handleClick}
                selectedKeys={[current]}
                mode="horizontal"
              >
                <Menu.Item key="home">
                  <Icon type="home" />
                  Home
                </Menu.Item>

                <SubMenu
                  title={(
                    <span className="submenu-title-wrapper">
                      <Icon type="shopping" />
                      Products Catalog
                    </span>)
                  }
                >
                  <MenuItemGroup title="RICE CATEGORY">
                    <Menu.Item key="setting:1">Basmati Rice</Menu.Item>
                    <Menu.Item key="setting:2">Brown Rice</Menu.Item>
                    <Menu.Item key="setting:3">Sona Rice</Menu.Item>
                  </MenuItemGroup>
                  <MenuItemGroup title="WATER CATEGORY">
                    <Menu.Item key="setting:1">Bisleri Mineral Water</Menu.Item>
                    <Menu.Item key="setting:2">Kinley Mineral Water</Menu.Item>
                  </MenuItemGroup>
                </SubMenu>
                <Menu.Item key="Service">
                  <Icon type="car" />
                  Service
                </Menu.Item>
                <Menu.Item key="cart">
                  <Icon type="shopping-cart" />
                  Cart
                </Menu.Item>
                <Menu.Item key="contact">
                  <Icon type="phone" />
                  Contact
                </Menu.Item>
              </Menu>
            </Col>
            <Col span={4} align="middle">
              <Button type="primary">Registration</Button>
              <Divider type="vertical" />
              <Button>Login</Button>
            </Col>
          </Row>
        </Layout.Header>
        <Layout.Content />
        <Layout.Footer style={{ textAlign: 'center', backgroundColor: 'white' }}>
          Morning Hopper ©2018 Created by Javicore TECH
        </Layout.Footer>
      </Layout>
    );
  }
}

export default AntNavHeader;
