// reducer函数模块： 根据旧的state 和 指定的action返回新的state
import {combineReducers} from 'redux'
import storageUtils from "../utils/storageUtils";
import {SET_HEAD_TITLE, RECEIVE_USER, SHOW_ERROR_MSG, RESET_USER} from "./action-types";

const initialValue = '首页'
function headTitle(state = initialValue, action) {
    switch (action.type) {
        case SET_HEAD_TITLE:
            return action.data
        default:
            return state
    }
}
const initUser = storageUtils.getUser()
function user(state = initUser, action) {
    switch (action.type) {
        case RECEIVE_USER:
            return action.data
        case SHOW_ERROR_MSG:
            const errorMsg = action.data
            return {...state, errorMsg}
        case RESET_USER:
            return {}
        default:
            return state
    }
}
export default combineReducers({
    headTitle,
    user
})
