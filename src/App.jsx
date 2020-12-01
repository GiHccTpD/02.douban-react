import React, { Component } from 'react';
import { HashRouter, Route, Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import styles from './css/app.scss'
import HomeContainer from './components/home/HomeContainer.jsx';
import AboutContainer from './components/about/AboutContainer.jsx';
import MovieContainer from './components/movie/MovieContainer.jsx';

const { Header, Content, Footer } = Layout;

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    componentWillMount(){
    }

    render() {
        return (
            <HashRouter>
                <Layout className="layout" style={{flex: 1}}>
                    <Header>
                    <div className={styles.logo} />
                    <Menu
                        theme="dark" mode="horizontal" 
                        defaultSelectedKeys={[window.location.hash.split('/') || '1']}
                    >
                        <Menu.Item key="home">
                            <Link to="/home">首页</Link>
                        </Menu.Item>
                        <Menu.Item key="movie">
                            <Link to="/movie/in_threaters/1">电影</Link>
                        </Menu.Item> 
                        <Menu.Item key="about">
                            <Link to="/about">关于</Link>
                        </Menu.Item>
                    </Menu>
                    </Header>
                    <Content style={{ backgroundColor: '#fff', height:'100%'}}>
                            <Route path="/home" component={HomeContainer}></Route>
                            <Route path="/about" component={AboutContainer}></Route>
                            <Route path="/movie" component={MovieContainer}></Route>
                    </Content>

                    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                </Layout>,
            </HashRouter>
        );
    }
}

export default App;