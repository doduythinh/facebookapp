import React,{ Component }  from 'react';
import login from '../../../sass/login.scss';
import  { Redirect,Router,Switch,Link } from  'react-router-dom';
import login_new from "../../login_new/header/login_new";
import  { NavLink } from 'react-router-dom';
class Header extends Component{
    checkoutfacebookHandler = () =>{
        this.props.history.goBack();
    }
    checkoutfacebookcontinuehandler = () =>{
        this.props.history.replace('/login_new');
    }
    render() {
        let checkout = <Redirect />
        return (
            <div className="header">
                <div className="header__facebook">
                    <a href="#" className="header__facebook_name">facebook</a>
                </div>
                <div className="header_three">
                    <div className="header__Email">
                        <label className="header__Email-name">Email hoặc điện thoại</label><br />
                        <input type="text" name="email"  className="header__email-input"/>
                    </div>
                    <div className="header__MatKhau">
                        <label className="header__MatKhau-password">Mật Khẩu</label><br />
                        <input type="password"  name="password" className="header__MatKhau-password-input" />
                    </div>
                    <div className="header__forget">
                        <a href="#" className="header__forget-name">Quên tài khoản?</a>
                    </div>
                </div>
                    <div className="header__login-button">
                        <NavLink to="/login_new"><button href="#" className="header__login-button-lg">Đăng nhập
                        </button>
                        </NavLink>
                    </div>
            </div>
        );
    }
}
export default Header;