/*最核心*/
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk' //实现 redux 异步的插件
import {composeWithDevTools} from 'redux-devtools-extension'
import reducer from './reducer'
export default createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))
