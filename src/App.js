import React from 'react';
import './App.css';
import Body from '../src/component/login/body/body';
import {Route, Switch ,BrowserRouter} from 'react-router-dom';
import Login_news from "./component/login_new/login_news";
import NewTinTuc from '../src/containers/NewsSites/body/body';
import  loginsms from '../src/component/sms/body/body';

function App() {
    return (
        <div className="App">
                <Switch>
                    <Route exact path="/login" component={Body}/>
                    <Route path="/login_new" component={Login_news}/>
                    <Route path="/bangtin" component={NewTinTuc}/>
                    <Route path="/sms" component={loginsms} />
                </Switch>
        </div>
    )
}

export default App;
