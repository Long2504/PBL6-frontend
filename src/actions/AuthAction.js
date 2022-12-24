import { type } from '@testing-library/user-event/dist/type'
import * as Type from '../contants/ActionType'
import { loginApi } from '../services/AuthService'

export const actLogin = (user)=>{
    return(
        {
            type: Type.LOGIN,
            user,
        }
    )
}

export const actLoginRequest = (user) =>{
    return dispatch =>{
        return loginApi(dispatch,user)
    }
}

export const logoutAction = ()=>{
    return ({
        type: Type.LOGOUT
    })
}