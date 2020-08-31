import React, {Component} from 'react';
import './App.css';
import Body from '../src/component/login/body/body';
import {Route, Switch ,BrowserRouter,withRouter,Redirect} from 'react-router-dom';
import Login_news from "./component/login_new/login_news";
import NewTinTuc from '../src/containers/NewsSites/body/body';
import  loginsms from '../src/component/sms/body/body';
import PersonallyTotal from '../src/containers/PagePersonally/ToTalPersonally';
import {connect} from 'react-redux';
import * as actions from './store/action/index';
import asyncComponent from "./hoc/asyncComponent/asyncComponent";

const asyncNewTinTuc = asyncComponent(() => {
    return import('../src/containers/NewsSites/body/body')
})
const asyncloginsms = asyncComponent(() => {
    return import('../src/component/sms/body/body')
})
// const asyncPerson = asyncComponent(() => {
//     return import('../src/containers/PagePersonally/ToTalPersonally')
// })
class App extends Component
{
    componentDidMount() {
        this.props.onTryAutoSignup();
    }
    render() {
        let routes = (
            <Switch>
                {/*<Route path="/login_new" component={Login_news}/>*/}
                {/*<Route path="/bangtin" component={asyncNewsite}/>*/}
                <Route path="/bangtin" component={NewTinTuc}/>
                <Route path="/login" component={Body}/>
                <Redirect  to="/login" />
            </Switch>
        )
        if(this.props.isAuthenticated)
        {
            routes = (
                <Switch>
                    <Route path="/login_new" component={Login_news}/>
                    <Route path="/pagePersonally" component={PersonallyTotal} />
                    <Route path="/sms" component={asyncloginsms} />
                    <Route path="/bangtin" component={NewTinTuc}/>
                    <Route exact path="/login" component={Body} />
                    <Redirect  to="/login" />
                </Switch>
            )
        }
        return (
            <div className="App">
                {routes}
            </div>
        )
    }
}
const  mapsStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    }
}
const mapDispatchToProps = dispatch => {
    return{
        onTryAutoSignup: () => dispatch(actions.checkState())
    }
}
export default withRouter(connect(mapsStateToProps,mapDispatchToProps)(App));
