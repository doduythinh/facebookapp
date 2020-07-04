
import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class Logout extends Component{

    componentDidMount() {
    }
    render() {
        return <Redirect to="/" />
    }

}
const mapDispatchToProps = dispatch => {

}
export default  connect(null,mapDispatchToProps)(Logout);
