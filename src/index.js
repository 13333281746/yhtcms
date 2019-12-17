 import React from 'react';  
import ReactDOM from 'react-dom' ;   
import {Provider} from 'react-redux'
import store from './store'
import App from './public/app'
import './css/index.css'
import 'font-awesome/css/font-awesome.css'
import 'nprogress/nprogress.css'
ReactDOM.render((
    <Provider store={store}>
        <App/>
    </Provider>
), document.getElementById('app'));