import * as actionTypes from '../action/actionsTypes';

export const  UpdatesNewsites = (token) => {
    return {
        type: actionTypes.AUTH_UPDATE_STATUS,
        token: token
    }
}
export const UpdatesNewsitesTrue = (content)=> {
    console.log("12345667",content);
    return {
        type: actionTypes.UPDATETRUESITES,
        content: content
    }
}
export const UpdatesNewsitesFail = (error) => {
    return {
        type: actionTypes.UPDATEFAILSITES,
        error: error
    }
}
export const getsites = () => {
    return{
        type: actionTypes.USER_GETSITES
    }
}