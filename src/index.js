/*
* 入口js
* */
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'


// import storageUtils from './utils/storageUtils'
// import memoryUtils from './utils/memoryUtils'
import {Provider} from 'react-redux'
import store from './redux/store'
// 读取local中的user保存到内存中
// const user = storageUtils.getUser();
// memoryUtils.user = user

ReactDOM.render((
    <Provider store={store}>
        <App/>
    </Provider>
), document.getElementById('root'));
