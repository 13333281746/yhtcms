import React from 'react'
import {BrowserRouter as Router,Switch,Route,Redirect} from 'react-router-dom';
import Zhuye from './zhuye';
import Login from './login';
import Home from './../zujian/home'
import Banner from './../zujian/banner'
import News from './../zujian/news'
import Variety from './../zujian/variety'
import Staff from './../zujian/staff'
import Info from './../zujian/info'
class App extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        //取出本地用户数据
        const userData = JSON.parse(sessionStorage.getItem('userData'));
        //主面板
        let ZhuyeRouter=(
            <Zhuye>
                <Switch>
                    <Route path="/" exact  render={props=>( <Home{...props}/> )} />
                    <Route path="/banner" exact component={Banner}/>
                    <Route path="/news" exact component={News}/>
                    <Route path="/news/:infoid" exact component={Info}/>
                    <Route path="/variety" exact component={Variety} />
                    <Route path="/staff" exact component={Staff} />
                </Switch>
            </Zhuye>
        )
        return(
            <Router>
                <Switch>
                    <Route 
                    exact
                    path="/" 
                    render={
                       userData ? (props)=>ZhuyeRouter :
                       ()=><Redirect to='/login' push />
                    } /> 
                    <Route path="/login" exact  component={Login} />
                    <Route path="/" render={props=>ZhuyeRouter} /> 
                </Switch> 
            </Router>
        )
    }
}
export default App;