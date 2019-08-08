/*
* 包含n个用来创建action的工厂函数
* */
import {INCREMENT, DECREMENT} from "./action-types";

export const increment = (number) => ({type: INCREMENT, data: number})

export const decrement = (number) => ({type: DECREMENT, data: number})
// 增加的异步action： 返回的是函数
export const incrementAsync = (number) => {
    return dispatch => {
        setTimeout(() => {
            // 分发同步action
            dispatch(increment(number))
        }, 1000)
    }
}

