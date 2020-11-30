import React, { Component } from 'react'
import { Layout, Menu } from 'antd';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

import { Route, Link } from 'react-router-dom';

import MovieList from './MovieList.jsx'

export default class MovieContainer extends Component {
    render() {
        return (
            <Layout style={{height: '100%'}}>
                <Sider width={200} className="site-layout-background">
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        style={{ height: '100%', borderRight: 0 }}
                    >
                        <Menu.Item key="1">
                            <Link to="/movie/in_threaters/1">正在热映</Link>
                            </Menu.Item>
                        <Menu.Item key="2">
                            <Link to="/movie/coming_soon/1">即将上映</Link>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <Link to="/movie/top250/1">Top250</Link>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout style={{ paddingLeft: '1px' }}>
                    <Content
                        className="site-layout-background"
                        style={{
                            padding: 10,
                            margin: 0,
                            minHeight: 280,
                        }}
                    >
                        <Route path="/movie/:type/:page" component={MovieList}></Route>
                    </Content>
                </Layout>
            </Layout>
        )
    }
}
