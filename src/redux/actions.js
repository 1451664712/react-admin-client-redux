/*
* 包含n个用来创建action的工厂函数
* */
import {SET_HEAD_TITLE, RECEIVE_USER, SHOW_ERROR_MSG, RESET_USER} from "./action-types";
import {reqLogin} from "../api";
import storageUtils from "../utils/storageUtils";

export const setHeadTitle = (headTitle) => ({type: SET_HEAD_TITLE, data: headTitle})

export const receiveUser = (user) => ({type: RECEIVE_USER, data: user})

export const showErrorMsg = (errorMsg) => ({type: SHOW_ERROR_MSG, data: errorMsg})

//
export const logout = () => {
    // 先清除本地缓存
    storageUtils.removeUser()
    // 返回action对象
    return {type: RESET_USER}
}
// 登录一步action

export const login = (username, password) => {
    return async dispatch => {
        const result = await reqLogin(username, password)
        if (result.status === 0) {
            const user = result.data
            storageUtils.saveUser(user)
            dispatch(receiveUser(user))
        } else {
            const msg = result.msg
            dispatch(showErrorMsg(msg))
        }
    }
}

