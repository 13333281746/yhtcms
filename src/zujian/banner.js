import React from 'react';
import {connect} from 'react-redux';
import {getBannerDataAction} from './../store/actionCreators'
import {List} from 'antd'
const userData = JSON.parse(sessionStorage.getItem('userData'));
class Banner extends React.Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        this.props.reqBannerData();
    }
    render(){
        const bannerData=[];
        for(let v in this.props.bannerData){
            bannerData.push(this.props.bannerData[v]);
        }
        return(
       <div style={{ padding: 24, background: '#fff', minHeight: 360 }}> 
            {/* {bannerData.map((banner,i)=><div key={i}>
                <img src={"http://www.qhdlink-student.top/"+banner.path_banner} style={{width:500,hegith:'auto',float:'left',margin:30}}/>
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
                dataSource={bannerData}
                renderItem={item => (
                <List.Item
                    key={item.id_coach}
                >
                    <List.Item.Meta
                    />
                    <img style={{float:'left',width:'100%'}}
                        // width={272}
                        alt="logo"
                        src={'http://www.qhdlink-student.top/'+item.path_banner}
                    />
                </List.Item>
                )}
            />
        </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return{
        bannerData:state.bannerData
    }
};
const mapDispatchToProps=(dispatch)=>{
    return{
        reqBannerData(){
            const action=getBannerDataAction(userData);
            dispatch(action)
        }
    }
};
export default connect(mapStateToProps,mapDispatchToProps)(Banner);