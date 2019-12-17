import React from 'react'
import { Row, Col } from 'antd';
import { Layout} from 'antd';
import {withRouter} from 'react-router-dom';
const { Sider } = Layout;
class Theader extends React.Component{
    constructor(props){
        super(props)
    }
    login(){
        sessionStorage.removeItem('userData'); 
        this.props.history.push('/login');
    }
    render(){ 
        return(
            <div className='header'>
                <nav className="navbar navbar-custom">
                    <Row>
                    <Col span={12}><div className="imgbk"></div><div style={{textAlign:'left',fontSize:30,float:'left'}}>CMS</div></Col>
                    <Col span={12}><div className="nav navbar-nav navbar-right"><a onClick={()=>this.login()}><i className="fa fa-sign-out"></i>退出</a></div></Col>
                    </Row>
                </nav>
            </div>
        )
    }
}
export default withRouter(Theader)