import React from 'react';
import {connect} from 'react-redux';
import {getVarietyDataAction} from './../store/actionCreators'
import {List} from 'antd';
const userData = JSON.parse(sessionStorage.getItem('userData'));
class Variety extends React.Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        this.props.reqVarietyData();
    }
    getStar(n){
        let arr=[];
        for(let i=0;i<n;i++){
            arr.push("S");
        }
        return arr;
    }
    render(){
        const varietyData=[];
        for(let v in this.props.varietyData){
            varietyData.push(this.props.varietyData[v]);
        }
        // console.log(varietyData)
        return(
       <div style={{ padding: 24, background: '#fff', minHeight: 360,overflow:'auto'}}>
            {/* {varietyData.map((variety,i)=><div style={{width:'40%',float:'left',margin:"2%"}} key={i}>
                <div className="new-yb-des">{variety.name_coach}</div>
                <img src={'http://www.qhdlink-student.top/'+variety.path_coach}/>
                <div>
                    <p>商品名称{variety.name_coach}生产时间{variety.dage_coach}
                    失效时间{variety.tage_coach}
                    折扣{variety.honor_coach}价格{variety.type_coach}</p>
                    <p>评价：{this.getStar(variety.evaluate_coach).map((v,i)=><span key={i}>{v}</span>)}</p>
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
                dataSource={varietyData}
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
                    <p>名称：{item.name_coach}</p>
                    <p>价格：￥{item.type_coach}元</p>
                    <p>折扣：{item.honor_coach}</p>
                    <p>生产时间：{item.dage_coach}</p>
                    <p>失效时间：{item.tage_coach}</p>
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
        varietyData:state.varietyData
    }
};
const mapDispatchToProps=(dispatch)=>{
    return{
        reqVarietyData(){
            const action=getVarietyDataAction(userData);
            dispatch(action)
        }
    }
};
export default connect(mapStateToProps,mapDispatchToProps)(Variety);
