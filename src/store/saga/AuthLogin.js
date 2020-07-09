import { put, call } from 'redux-saga/effects';
import { delay } from "redux-saga/effects/";
import * as actions from '../action';
import axios from '../../axios-facebook';
// import  axios from 'axios';

export function* logoutSaga(action) {
    yield call([localStorage,'removeItem'], 'token');
    yield call([localStorage,'removeItem'], 'expirationTime');
    yield call([localStorage,'removeItem'],'userId');
    yield put(actions.logintrue());
}
export function* checkloginSaga(action) {
    yield delay(action.expirationTime * 1000);
    yield put(actions.loginfalse());
}
export function* userSignin(action) {
    yield put(actions.loginAuthstart())
    const authData = {
        phone: action.phone.toString(),
        password: action.password.toString()
    }
    console.log(authData);
    let url = 'users/signin';
    try{
        let response = yield axios.post(url,authData);
        console.log(response);
    } catch (error) {
        yield put(actions.loginfalse(error.response.data.error));
    }

}
export  function* userSignup(action) {
    console.log('action', action);
    yield put(actions.loginAuthstart())
    const authData = {
        first_name:action.first_name.toString(),
        last_name:action.last_name.toString(),
        phone: action.phone.toString(),
        password: action.password.toString(),
        bird_date: new Date(action.bird_date).getTime(),
        gender: parseInt(action.gender)
    }
    let url = 'users/signup';
    try {
        let response = yield  axios.post(url,authData);
        console.log(response);
    }catch (error) {
        yield put(actions.loginfalse(error.response.data.error));
    }

}
export function* authcheckstateSaga(action) {
    const token = yield localStorage.getItem('token');
    if(!token)
    {
        yield  put(actions.loginfalse());
    }
    else {
        const expirationDate = yield new Date(localStorage.getItem('expirationDate'));
        if(expirationDate <= new Date())
        {
            yield put(actions.loginfalse())
        }
        else {
            const userId = localStorage.getItem('userId');
            yield put(actions.logintrue(token,userId));
            yield put(actions.checkAuTimeOut(expirationDate.getSeconds() - new Date().getSeconds() / 1000))
        }
    }
}