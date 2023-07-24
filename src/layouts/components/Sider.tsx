import React from 'react'
import { Divider, Menu, Layout } from 'antd';
import type { MenuProps } from 'antd';
import {
    PieChartOutlined,
    UserOutlined,
    DropboxOutlined,
    ShoppingOutlined,
    LikeOutlined,
    SolutionOutlined,
    ReconciliationOutlined
} from '@ant-design/icons';
import { Link } from 'react-router-dom';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
    } as MenuItem;
}

const items: MenuItem[] = [
    getItem('Dashboard', '1', <PieChartOutlined />),
    getItem('Profiles', 'sub1', <UserOutlined />, [
        getItem(<Link to="/confession">Confession</Link>, '2'),
        getItem(<Link to="/user">User</Link>, '3'),
    ]),
    getItem('Products', 'sub2', <DropboxOutlined />, [
        getItem(<Link to="/category">Category</Link>, '4'),
        getItem(<Link to="/product-type">Product Type</Link>, '5'),
        getItem(<Link to="/tag">Tag</Link>, '6'),
        getItem(<Link to="/product">Product</Link>, '7'),
        getItem(<Link to="/saved-product">Saved Product</Link>, '8'),
    ]),
    getItem('Orders', 'sub3', <ShoppingOutlined />, [
        getItem(<Link to="/payment-type">Payment Type</Link>, '9'),
        getItem(<Link to="/payment-status">Payment Status</Link>, '10'),
        getItem(<Link to="/order">Order</Link>, '11'),
    ]),
    getItem('Blog', '12', <LikeOutlined />),
    getItem('Contacts', 'sub4', <SolutionOutlined />, [
        getItem(<Link to="/contact-type">Contact Type</Link>, '13'),
        getItem(<Link to="/contact">Contact</Link>, '14'),
    ]),
    getItem('Hires', 'sub5', <ReconciliationOutlined />, [
        getItem(<Link to="/approach">Approach</Link>, '15'),
        getItem(<Link to="/estimate-budget">Estimate Budget</Link>, '16'),
        getItem(<Link to="/service-package">Service Package</Link>, '17'),
        getItem(<Link to="/timeline">Timeline</Link>, '18'),
        getItem(<Link to="/hire">Hire</Link>, '19'),
    ]),
];

const Sider = () => {
    const [collapsed, setCollapsed] = React.useState(false);

    return (
        <Layout.Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
            <div className="demo-logo-vertical">
                <img src={require('../../assets/images/logo/Logo.png')} width={200} alt='logo' />
            </div>
            <Divider style={{ borderColor: 'white', margin: 0, marginBottom: 10 }} />
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
        </Layout.Sider>
    )
}

export default Sider;