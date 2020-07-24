import { updateoBject } from "../../shared/utility";
import * as actionsTypes from "../../store/action/actionsTypes";

const initialState = {
    error:null,
    userId:null,
    token:null,
    loading:false,
    authRedirectPath: '/bangtin'
}

const authLogintrue = (state,action)=> {
    return updateoBject( state, {token:action.token,error: null,loading:true,authRedirectPath:'/bangtin'})
}
const authLoginfalse = (state,action)=> {
    return updateoBject( state, {error: action.error,loading:false})
}
const authUserStart  = (state,action) => {
    return updateoBject(state , {error:null,loading:true})
}
const checkAuTimeOut  = (state,action) => {
    return updateoBject(state , {error:null,loading:true})
}
const authUser  = (state,action) => {
    return updateoBject(state , {error:false,loading:true})
}
const authUserSignnup  = (state,action) => {
    return updateoBject(state , {error:false,loading:true})
}
const authLogout = (state,action) => {
    return updateoBject(state,{userId:null,token:null})
}
const setAuthRedirectPath = (state, action) => {
    return updateoBject(state, {authRedirectPath: action.path})
}
const reducer = (state = initialState,action) => {
    switch (action.type) {
        case actionsTypes.USER_LOGIN_TRUE: return authLogintrue(state,action);
        case actionsTypes.USER_LOGIN_FAIL: return authLoginfalse(state,action);
        case actionsTypes.USER_AUTH_START: return authUserStart(state,action);
        case actionsTypes.USER_CHECKTIMEOUT: return checkAuTimeOut(state,action);
        case actionsTypes.AUTH_USER: return authUser(state,action);
        case actionsTypes.AUTH_USERSIGNUP: return authUserSignnup(state,action);
        case actionsTypes.SET_AUTH_REDIRECT_PATH: return setAuthRedirectPath(state,action);
        case actionsTypes.AUTH_INITIATE_LOGOUT: return authLogout(state,action);
        default:
            return state;
    }
}
export default  reducer;