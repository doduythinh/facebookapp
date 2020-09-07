import { call,put,delay } from 'redux-saga/effects';
import *  as actions from '../action';
import axios from '../../axios-facebook';

export function* updateSiteSaga(action) {
    const PostSites = {
        content: action.content
    }
    // console.log("11111",PostSites);
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
export function* getSiteSaga(action)
{
    let url = '/posts/get/';
    let token = yield localStorage.getItem('tonken')
    const header = {headers: {"Authorization" : `Bearer ${token}`} }
    try{
        const response = yield axios.get(url,header)
        // yield put(actions.UpdatesNewsitesTrue(response))
        // const fetchSites = [];
        // for( let key in response.data)
        // {
        //     fetchSites.push({
        //         ...response.data[key],
        //         id: key
        //     })
        // }
        console.log("12345613979",response.data.data)
        yield put(actions.fetchSitesSuccess(response.data.data))
    }
    catch (error) {
        yield put(actions.UpdatesNewsitesFail(error.data.error))
    }
}