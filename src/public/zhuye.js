import React from 'react';
import Theader from "./header";
import Lheader from "./Lheader";
import { Layout} from 'antd';
import {withRouter} from "react-router-dom"
const { Header, Footer, Content } = Layout;
class Zhuye extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(  
            <Layout>
                <Lheader/>
                <Layout>
                    <Header style={{ background: '#fff', padding: 0,height:100 }}><Theader/></Header>
                    <Content style={{ margin: '24px 16px 0' }}>
                    {/* <Luyou/> */}
                    {this.props.children}
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                </Layout>
            </Layout>
        )
    }
}
export default withRouter(Zhuye);