import React from 'react';
import {connect} from 'react-redux';
import {getStaffDataAction} from './../store/actionCreators'
import {List} from 'antd'
const userData = JSON.parse(sessionStorage.getItem('userData'));
class Staff extends React.Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        this.props.reqStaffData();
    }
    getStar(n){
        let arr=[];
        for(let i=0;i<n;i++){
            arr.push("S");
        }
        return arr;
    }
    render(){
        const staffData=[];
        for(let v in this.props.staffData){
            staffData.push(this.props.staffData[v]);
        }
        return(
       <div style={{ padding: 24, background: '#fff', minHeight: 360 ,overflow:'auto'}}>
            {/* {staffData.map((teacher,i)=><div style={{width:'40%',float:'left',margin:"2%"}} key={i}>
                <div className="new-yb-des">{teacher.name_coach}</div>
                <img src={'http://www.qhdlink-student.top/'+teacher.path_coach}/>
                <div>
                    <p>简介：{teacher.name_coach}老师{teacher.tage_coach}加入朗科，
                    现任为{teacher.honor_coach},曾是{teacher.type_coach}</p>
                    <p>评价：{this.getStar(teacher.evaluate_coach).map((v,i)=><span key={i}>{v}</span>)}</p>
                    </div>
            </div>)} */}
            <List
               itemLayout="vertical"
                size="large"
                grid={{
                gutter: 16,
                xs: 1,
                sm: 1,
                md: 2,
                lg: 2,
                xl: 2,
                xxl: 2,
                }}
                pagination={{
                pageSize: 2,
                }}
                dataSource={staffData}
                renderItem={item => (
                <List.Item
                    key={item.id_coach}
                >
                    <List.Item.Meta
                    />
                    <img style={{float:'left'}}
                        width={272}
                        alt="logo"
                        src={'http://www.qhdlink-student.top/'+item.path_coach}
                    />
                    <div className='lsjzs'>
                    <p>姓名：{item.name_coach}</p>
                    <p>简介：{item.name_coach}老师{item.tage_coach}加入朗科，
                    现任为{item.honor_coach},曾是{item.type_coach},入行时间为{item.dage_coach}</p>
                    <p>评价：{this.getStar(item.evaluate_coach).map((v,i)=><span key={i}>{v}</span>)}</p>
                    </div>
                </List.Item>
                )}
            />
       </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return{
        staffData:state.staffData
    }
};
const mapDispatchToProps=(dispatch)=>{
    return{
        reqStaffData(){
            const action=getStaffDataAction(userData);
            dispatch(action)
        }
    }
};
export default connect(mapStateToProps,mapDispatchToProps)(Staff);