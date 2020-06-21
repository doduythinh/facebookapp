import React from 'react';
import './App.css';
import Body from '../src/component/login/body/body';
import {Route, Switch} from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <Switch>
                <Route path="/" component={Body}/>
            </Switch>
        </div>
    )
}

export default App;
