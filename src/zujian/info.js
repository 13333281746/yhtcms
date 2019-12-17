import React from 'react';
import {connect} from 'react-redux';
import {getInfoDataAction} from './../store/actionCreators'
const userData = JSON.parse(sessionStorage.getItem('userData'));
// const infoData=[];
class Info extends React.Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        this.props.reqInfoData(this.props.match.params.infoid)
    }
    render(){
        const infoData=[]
        for (let v in this.props.infoData){
            infoData.push(this.props.infoData[v])
        }
        return(
       <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
           {infoData.map((info,id)=><div key={id}><div style={{fontSize:20,color:'#666',margin:30}}>{info.title_news}{info.time_news}</div>
           <div style={{fontSize:16,color:'#999'}} dangerouslySetInnerHTML={{__html:info.info_news}}></div>
           </div>
           )}
       </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return{
        infoData:state.infoData
    }
};
const mapDispatchToProps=(dispatch)=>{
    return{
        reqInfoData(info){
            const action=getInfoDataAction(userData,info);
            dispatch(action)
        }
    }
};
export default connect(mapStateToProps,mapDispatchToProps)(Info);