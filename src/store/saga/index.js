import { takeEvery,all,takeLatest } from "redux-saga/effects";
import * as actiontypes from '../action/actionsTypes';

import  { logoutSaga,checkloginSaga,userSignin,userSignup } from './AuthLogin';

export function* watchAuthLogin() {
 yield all([
     takeEvery(actiontypes.USER_CHECKTIMEOUT, checkloginSaga),
     takeEvery(actiontypes.USER_LOGIN_TRUE, logoutSaga),
     takeEvery(actiontypes.AUTH_USER, userSignin),
     takeEvery(actiontypes.AUTH_USERSIGNUP,userSignup)
 ])
}