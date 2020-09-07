import * as actionTypes from '../action/actionsTypes';

export const  UpdatesNewsites = (token) => {
    return {
        type: actionTypes.AUTH_UPDATE_STATUS,
        token: token
    }
}
export const UpdatesNewsitesTrue = (content)=> {
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
// export const getsites = () => {
//     return{
//         type: actionTypes.USER_GETSITES,
//     }
// }
export const stateSite = () => {
    return{
        type: actionTypes.STATE_CONTENT,
        // token:token
    }
}
export const fetchSitesSuccess = (content) => {
    return {
        type: actionTypes.FETCH_SITES_SUCCESS,
        content:content
    }
}
