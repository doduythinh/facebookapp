import * as actionsTypes from './actionsTypes';

export const logintrue  = (token,userId) => {
    return {
        type:actionsTypes.USER_LOGIN_TRUE,
        idToken:token,
        userId:userId
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
export const AuthUserSignnUp = (first_name,phone,last_name,
                                password,bird_date,gender,isSignup) => {
    return {
        type:actionsTypes.AUTH_USERSIGNUP,
        phone:phone,
        first_name:first_name,
        last_name:last_name,
        password:password,
        isSignup:isSignup,
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