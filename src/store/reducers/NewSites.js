import { updateoBject } from "../../shared/utility";
import * as actionTypes from '../action/actionsTypes';

const initialState = {
    token: null,
    loading: false,
}
const updateSite = (state,action) => {
    return updateoBject(state,{token:true,loading: true})
}


const reducer = (state = initialState,action) => {
    switch (action.type) {
        case actionTypes.UPDATETRUESITES: return updateSite(state,action);
        default:
            return state;
    }
}

export default reducer;