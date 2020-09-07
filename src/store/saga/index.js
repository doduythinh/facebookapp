import { takeEvery,all,takeLatest } from "redux-saga/effects";
import * as actiontypes from '../action/actionsTypes';

import  { logoutSaga,checkloginSaga,userSignin,userSignup,authcheckstateSaga } from './AuthLogin';
import  { updateSiteSaga,getSiteSaga } from './NewSites';
export function* watchAuthLogin() {
 yield all([
     takeEvery(actiontypes.USER_CHECKTIMEOUT, checkloginSaga),
     takeEvery(actiontypes.USER_LOGIN_TRUE, logoutSaga),
     takeEvery(actiontypes.AUTH_USER, userSignin),
     takeEvery(actiontypes.AUTH_USERSIGNUP,userSignup),
     takeEvery(actiontypes.AUTH_CHECK_STATE,authcheckstateSaga)
 ])
}
export function* watchNewsites() {
    yield  all([
        takeEvery(actiontypes.UPDATETRUESITES,updateSiteSaga),
        takeEvery(actiontypes.STATE_CONTENT,getSiteSaga)
    ])
}