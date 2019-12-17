import React from  'react'
// import { Form, Icon, Input, Button, Checkbox } from 'antd';
import {connect} from 'react-redux'
import {getUserDataAction} from './../store/actionCreators'

class Login extends React.Component {
    constructor(props){
        super(props)
        this.state={
            username:'',
            userpwd:'',
            userclass:'',
            usertype:'' 
        }
    }
  render() {
    return (
        <div className='cmslogin'>
            <div className="login1">
            用户名<input type='text'  
                name="username"
                onChange={e=>this._onInputChange(e)}
                onKeyUp={e=>this._onInputKeyUp(e)}
            /><br/>
            密&nbsp;&nbsp;&nbsp;&nbsp;码<input type='password'  
                name="userpwd"
                onChange={e=>this._onInputChange(e)}
                onKeyUp={e=>this._onInputKeyUp(e)}
            /><br/>
            部&nbsp;&nbsp;&nbsp;&nbsp;门<input type='text'  
                name="userclass"
                onChange={e=>this._onInputChange(e)}
                onKeyUp={e=>this._onInputKeyUp(e)}
            /><br/>
            级&nbsp;&nbsp;&nbsp;&nbsp;别<input type='text'  
                name="usertype"
                onChange={e=>this._onInputChange(e)}
                onKeyUp={e=>this._onInputKeyUp(e)}
            /><br/>
            <button 
            type='submit'
            onClick={e=>this._onSubmit(e)}
            >登&nbsp;&nbsp;&nbsp;&nbsp;录</button>
            </div>
        </div>
    );
  }
  //输入框内容改变
  _onInputChange(e){
    //获取数据
    let inputValue=e.target.value;
    let inputName=e.target.name; 
    //更新数据
    this.setState(this.state={
        [inputName]:inputValue
    })

  }
  //处理回车
  _onInputKeyUp(e){
      if(e.keyCode ===13){
          this._onSubmit(e);
      }

  }
  //用户提交表单
  _onSubmit(){
    //获取数据
    const {username,userpwd,userclass,usertype} = this.state;
    //验证数据
    if(!username){
        alert('用户名不能为空')
    }
    if(!userpwd){
        alert('密码不能为空')
    }
    if(!userclass){
        alert('部门不能为空')
    }
    if(!usertype){
        alert('级别不能为空')
    }

    this.props.reqLogin({
        username,
        userpwd,
        userclass,
        usertype
    },(userData)=>{
        if(userData.username!==''){
            this.props.history.push('/');
        }
    });

  }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        reqLogin(data,callback){
        const action = getUserDataAction(data,callback); 
        dispatch(action)
    }
    }
}
export default connect(null,mapDispatchToProps)(Login);
