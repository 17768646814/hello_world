/**
 * Created by panchaohui on 2017/3/26.
 */
import React, {Component} from 'react'
import {Button, Layout, Menu, Breadcrumb, Icon} from 'antd'

import 'antd/lib/button/style/index.css'
import './App.css'

import MarkDown from './common/MarkDown'

const {SubMenu} = Menu
const {Header, Content, Footer, Sider} = Layout

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            content: 'Hello, world'
        }
    }



    render() {
        return (
            <Layout>
                <Header className="header">
                    <div className="logo"/>
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['0']}
                        style={{lineHeight: '64px'}}
                        onSelect={function (item, key, selectedKeys) {
                            console.info(item)
                        }.bind(this)}>
                        {
                            ['首页', '前端', '后端'].map(function (data, ind) {
                                return (
                                    <Menu.Item key={ind}>{data}</Menu.Item>
                                )
                            })
                        }
                    </Menu>
                </Header>
                <Content style={{padding: '0 50px'}}>
                    <Breadcrumb style={{margin: '12px 0'}}>
                        {
                            ['Home', 'App'].map(function (data, ind) {
                                return (
                                    <Breadcrumb.Item key={ind}>{data}</Breadcrumb.Item>
                                )
                            })
                        }
                    </Breadcrumb>
                    <Layout style={{padding: '24px 0', background: '#fff'}}>
                        <Sider width={200} style={{background: '#fff'}}>
                            <Menu
                                mode="inline"
                                defaultSelectedKeys={['1']}
                                defaultOpenKeys={['sub1']}
                                style={{height: '100%'}}
                            >
                                <SubMenu key="sub1" title={<span><Icon type="user"/>subnav 1</span>}>
                                    <Menu.Item key="1">option1</Menu.Item>
                                    <Menu.Item key="2">option2</Menu.Item>
                                    <Menu.Item key="3">option3</Menu.Item>
                                    <Menu.Item key="4">option4</Menu.Item>
                                </SubMenu>
                                <SubMenu key="sub2" title={<span><Icon type="laptop"/>subnav 2</span>}>
                                    <Menu.Item key="5">option5</Menu.Item>
                                    <Menu.Item key="6">option6</Menu.Item>
                                    <Menu.Item key="7">option7</Menu.Item>
                                    <Menu.Item key="8">option8</Menu.Item>
                                </SubMenu>
                                <SubMenu key="sub3" title={<span><Icon type="notification"/>subnav 3</span>}>
                                    <Menu.Item key="9">option9</Menu.Item>
                                    <Menu.Item key="10">option10</Menu.Item>
                                    <Menu.Item key="11">option11</Menu.Item>
                                    <Menu.Item key="12">option12</Menu.Item>
                                </SubMenu>
                            </Menu>
                        </Sider>
                        <Content style={{padding: '0 24px', minHeight: 280}}>
                            <MarkDown/>
                        </Content>
                    </Layout>
                </Content>
                <Footer style={{textAlign: 'center'}}>
                    Ant Design ©2016 Created by Ant UED
                </Footer>
            </Layout>
        );
    }
}


export default App