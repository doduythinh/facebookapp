import React, {Component} from "react";
import { GrFacebook,AiFillCaretDown } from "react-icons/all";
import login from '../../../sass/main.scss';
class header extends Component{

    render() {
        return(
            <div className="header_sms">
                <div className="header__icon">
                    <GrFacebook  className="header__logo"  color="white" />
                </div>
                <div className="header__logout">
                    <AiFillCaretDown  className="header__logo_logout"  color="black" />
                </div>
            </div>
        )
    }
}
export default header;