import React from 'react';
import { Layout, Menu } from 'antd';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import RegisterUser from './RegisterUser';
import UserList from './UserList';
import Balance from './Balance';
import Admin from './Admin';
import Profile from './Profile';

const { Sider, Content } = Layout;

const HomePage = () => {
  return (
    <Router>
      <Layout style={{ minHeight: '100vh' }}>
        <Sider>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Link to="/register-user">Registrar Usuario</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/user-list">Usuarios Registrados</Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to="/balance">Balance</Link>
            </Menu.Item>
            <Menu.Item key="4">
              <Link to="/admin">Administrador</Link>
            </Menu.Item>
            <Menu.Item key="5">
              <Link to="/profile">Perfil</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Content style={{ width:'100%' }}>
            <div style={{ padding: 24, minHeight: 360 }}>
              <Routes>
                <Route path="/register-user" element={<RegisterUser />} />
                <Route path="/user-list" element={<UserList />} />
                <Route path="/balance" element={<Balance />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="/profile" element={<Profile />} />
              </Routes>
            </div>
          </Content>
        </Layout>
      </Layout>
    </Router>
  );
};

export default HomePage;