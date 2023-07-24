import React from 'react';
import { Outlet } from 'react-router-dom';
import { Layout, theme } from 'antd';

import Sider from './components/Sider';
import Footer from './components/Footer';
import Breadcrumb from './components/Breadcrumb';

const { Header, Content } = Layout;



const DefaultLayout: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider />
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }} />
        <Content style={{ margin: '0 16px' }}>
          <div style={{ margin: '16px 0' }}>
            {/* Start: Breadcrumb */}
            <Breadcrumb />
            {/* End: Breadcrumb */}
          </div>

          {/* Start: Outlet */}
          <Outlet />
          {/* End: Outlet */}
        </Content>
        {/* Start: Footer */}
        <Footer />
        {/* End: Footer */}
      </Layout>
    </Layout>
  );
};

export default DefaultLayout