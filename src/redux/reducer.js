// reducer函数模块： 根据旧的state 和 指定的action返回新的state
import {INCREMENT, DECREMENT} from "./action-types";
import {combineReducers} from 'redux'
function count(state = 0, action) {
    console.log('count()', state, action);
    switch (action.type) {
        case INCREMENT:
            return state + action.data
        case DECREMENT:
            return state - action.data
        default:
            return state
    }
}
const initUser = {}
function user(state = initUser, action) {

}
export default combineReducers({
    count,
    user
})
