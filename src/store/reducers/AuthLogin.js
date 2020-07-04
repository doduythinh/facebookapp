import { updateoBject } from "../../shared/utility";
import * as actionsTypes from "../../store/action/actionsTypes";

const initialState = {
    token:null,
    userId:null,
    error:null,
    loading:false,
    authRedirectPath: '/'
}

const Authlogintrue = (state,action)=> {
    return updateoBject( state, {token:action.idToken,userId:action.userId,error:null,loading:false})
}
const Authloginfalse = (state,action)=> {
    return updateoBject( state, {error: action.error,loading:true})
}
const AuthuserStart  = (state,action) => {
    return updateoBject(state , {error:null,loading:true})
}
const checkAuTimeOut  = (state,action) => {
    return updateoBject(state , {error:null,loading:true})
}
const AuthUser  = (state,action) => {
    return updateoBject(state , {error:false,loading:true})
}
const AuthUserSignnup  = (state,action) => {
    return updateoBject(state , {error:false,loading:true})
}
const reducer = (state = initialState,action) => {
    switch (action.type) {
        case actionsTypes.USER_LOGIN_TRUE: return Authlogintrue(state,action);
        case actionsTypes.USER_LOGIN_FAIL: return Authloginfalse(state,action);
        case actionsTypes.USER_AUTH_START: return AuthuserStart(state,action);
        case actionsTypes.USER_CHECKTIMEOUT: return checkAuTimeOut(state,action);
        case actionsTypes.AUTH_USER: return AuthUser(state,action);
        case actionsTypes.AUTH_USERSIGNUP: return AuthUserSignnup(state,action);
        default:
            return state;
    }
}
export default  reducer;