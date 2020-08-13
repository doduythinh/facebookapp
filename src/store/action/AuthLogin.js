import * as actionsTypes from './actionsTypes';

export const logintrue  = (token,userId) => {
    return {
        type:actionsTypes.USER_LOGIN_TRUE,
        idToken:token,
    }
}
export const loginfalse  = (error) => {
    return {
        type:actionsTypes.USER_LOGIN_FAIL,
        authData:error
    }
}
export const loginAuthstart = () => {
    return {
        type:actionsTypes.USER_AUTH_START
    }
}
export const checkAuTimeOut = (expirationTime) => {
    return {
        type:actionsTypes.USER_CHECKTIMEOUT,
        expiration:expirationTime
    }
}
export const AuthUserSignIn = (phone,password,isSignup) => {
    return {
        type:actionsTypes.AUTH_USER,
        phone:phone,
        password:password,
        isSignup: isSignup
    }
}
export const AuthUserSignnUp = (first_name,last_name,phone,password,
                                bird_date,gender) => {
    return {
        type:actionsTypes.AUTH_USERSIGNUP,
        first_name:first_name,
        last_name:last_name,
        phone:phone,
        password:password,
        bird_date:bird_date,
        gender:gender
    }
}
export const setAuthRedirectPath = (path) => {
    return {
        type: actionsTypes.SET_AUTH_REDIRECT_PATH,
        path:path
    }
}
export  const logoutSuccess = () => {
    return {
        type: actionsTypes.AUTH_LOGOUT,
    }
}

export  const checkState = () => {
    return {
        type: actionsTypes.AUTH_CHECK_STATE,
    }
}
export  const logout = () => {
    return {
        type: actionsTypes.AUTH_INITIATE_LOGOUT,
    }
}