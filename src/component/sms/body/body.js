import React, {Component} from "react";
import Header from '../header/header';
import Dangkysms from '../../sms/body/bodysms/bodysms';

class body extends Component{
    render() {
        return (
            <div>
                <Header />
                <Dangkysms />
            </div>
        )
    }
}


export default body;