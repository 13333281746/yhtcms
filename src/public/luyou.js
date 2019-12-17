import React from 'react';
import {Switch,Route} from 'react-router-dom';
import routes from './../Router/index'
export default class Luyou extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <Switch>
                {/* <Route path="/" exact  render={props=>( <Home{...props}/> )} />
                <Route path="/banner" exact component={Banner}/>
                <Route path="/news" exact component={News}/>
                <Route path="/variety" exact component={Variety} />
                <Route path="/staff" exact component={Staff} /> */}
                {routes.map((route,key)=>{
                    if(route.exact){
                        return(
                            <Route
                            key={key}
                            exact
                            path={route.path}
                            render={props=>(
                                <route.component{...props}/>
                            )}
                            />
                        )
                    }else{
                        return(
                            <Route
                            key={key}
                            path={route.path}
                            render={props=>{
                                <route.component{...props}/>
                            }}
                            />
                        )
                    }
                })}
            </Switch>
    )}
}
