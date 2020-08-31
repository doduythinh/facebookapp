import { call,put,delay } from 'redux-saga/effects';
import *  as actions from '../action';
import axios from '../../axios-facebook';

export function* updateSite(action) {
    const PostSites = {
        content: action.content
    }
    console.log("11111",PostSites);
    let url = '/posts/create/';
    let token = yield localStorage.getItem('tonken')
    // console.log("123123123",token);
    const header = {headers: {"Authorization" : `Bearer ${token}`} }
    try {
        yield axios.post(url,PostSites,header)
    }
    catch (error) {
        yield put(actions.UpdatesNewsitesFail(error.data.error))
    }
}
export function* getsite(action)
{
    let url = '/posts/get/';
    try{
        yield axios.get(url)
    }
    catch (error) {
        yield put(actions.UpdatesNewsitesFail(error.data.error))
    }
}