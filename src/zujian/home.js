import React from 'react';
export default class Home extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        const userData = JSON.parse(sessionStorage.getItem('userData'));
        return(
       <div style={{ padding: 24, background: '#fff', minHeight: 360,fontSize:30,textAlign:'center',lineHeight:'360px'}}>欢迎使用悦合同cms{userData.username}</div>
        )
    }
}
