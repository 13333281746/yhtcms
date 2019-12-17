import React from 'react'
import { Layout, Menu, Icon, Avatar } from 'antd';
import {NavLink,withRouter} from 'react-router-dom';
const { Sider } = Layout;
class Lheader extends React.Component{
    render(){
        const userData = JSON.parse(sessionStorage.getItem('userData'));
        return(
            <Sider
            breakpoint="lg"
            collapsedWidth="0"
            >
            <div className="logo" style={{margin:30}}><Avatar size={64} src="img/yue-sprit001.png" />
            <div style={{margin:20,fontSize:20}}>{userData.username}</div></div>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                <Menu.Item key="1">
                <Icon type="user" />
                <span className="nav-text"><NavLink to="/">欢迎页面</NavLink></span>
                </Menu.Item>
                <Menu.Item key="2">
                <Icon type="user" />
                <span className="nav-text"><NavLink to="/banner" >banner图</NavLink></span>
                </Menu.Item>
                <Menu.Item key="3">
                <Icon type="video-camera" />
                <span className="nav-text"><NavLink to="/news">新闻管理</NavLink></span>
                </Menu.Item>
                <Menu.Item key="4">
                <Icon type="upload" />
                <span className="nav-text"><NavLink to="/variety">产品管理</NavLink></span>
                </Menu.Item>
                <Menu.Item key="5">
                <Icon type="user" />
                <span className="nav-text"><NavLink to="/staff">员工管理</NavLink></span>
                </Menu.Item>
            </Menu>
            </Sider>
        )
    }
}
export default withRouter(Lheader)