import { updateObject } from "../../shared/utility";
import * as actionTypes from '../action/actionsTypes';

const initialState = {
    // token: false,
    loading: false,
    content: [],
}
const updateSite = (state,action) => {
    return updateObject(state,{token:true,loading: true})
}
// const getcontent = (state,action) => {
//     console.log("123123456456",action.content)
//     return updateObject(state,{loading: true,content:action.content})
// }
const fetchSuccessContent = (state,action) => {
    return updateObject(state,{loading: true,content:action.content})
}
const reducer = (state = initialState,action) => {
    switch (action.type) {
        case actionTypes.UPDATETRUESITES: return updateSite(state,action);
        // case actionTypes.STATE_CONTENT: return getcontent(state,action);
        case actionTypes.FETCH_SITES_SUCCESS: return fetchSuccessContent(state,action);
        default:
            return state;
    }
}

export default reducer;