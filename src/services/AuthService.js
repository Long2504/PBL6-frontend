import { actLogin } from "../actions/AuthAction"
import { ApiCaller } from "./ApiCaller"

export const loginApi=(dispatch,user)=>{
    return ApiCaller("POST",JSON.stringify(user),"login")
    .then(res=>dispatch(actLogin(res.data)))
    .catch(error=>{
        alert("ĐĂNG NHẬP THẤT BẠI")
        console.log(error)
    })
}

export const loginWithGoogle=(email)=>{
    return ApiCaller("POST",JSON.stringify(email),"provider")
    .catch(error=>{
        alert("ĐĂNG NHẬP THẤT BẠI")
        console.log(error)
    })
}