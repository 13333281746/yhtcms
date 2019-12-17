import React from 'react';
import {connect} from 'react-redux';
import {getNewsDataAction} from './../store/actionCreators'
import {NavLink} from 'react-router-dom'
import { Table, Input} from 'antd';
const { Search } = Input;
const userData = JSON.parse(sessionStorage.getItem('userData'));
class News extends React.Component{
    constructor(props){
        super(props)
        this.state = { news: []}
    }
    componentDidMount(){
        this.props.reqNewsData();
        this.timerID = setTimeout(() => {this.chaxun()
        }, 1000);
    }
      componentWillUnmount() {
        clearInterval(this.timerID);
      }
    chaxun(value){
        let news=[]
        for (let j in this.props.newsData){
        if(this.props.newsData[j].title_news.search(value)!==-1){
            news.push(this.props.newsData[j])
        }
        }
        this.setState({news:news})
    }

    render(){
        const columns = [
            {
              title: '标题',
              dataIndex: 'title_news',
              key: 'title_news',
            },
            {
              title: '日期',
              dataIndex: 'time_news',
              key: 'time_news',
            },
            {
              title: '详情',
              dataIndex: 'id_news',
              key: 'id_news',
              render: rowkey => <NavLink to={"/news/"+rowkey} activeClassName="newNav" >详情</NavLink>
            },
          ];
          
        return(
       <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
           {/* {newsData.map((news,i)=><div className="col-sm-6" key={i}>
                <h2>{news.title_news}<NavLink to={"/news/"+news.id_news} activeClassName="newNav" >详情</NavLink>{news.time_news}</h2>
            </div>)} */}
            <Search placeholder="请输入查找内容"  onSearch={value=>this.chaxun(value)} enterButton />
            <Table columns={columns} 
                dataSource={this.state.news} 
                rowKey={newsData=>newsData.id_news} 
                pagination={{pageSize: 4,}}
            />
       </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return{
        newsData:state.newsData
    }
};
const mapDispatchToProps=(dispatch)=>{
    return{
        reqNewsData(){
            const action=getNewsDataAction(userData);
            dispatch(action)
        }
    }
};
export default connect(mapStateToProps,mapDispatchToProps)(News);