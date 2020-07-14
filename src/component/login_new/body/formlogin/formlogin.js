import React, {Component} from "react";
import login from '../../../../sass/main.scss';
class formlogin extends Component{
    render() {
        return(
            <div className="Background__image-SignIn-login">
                <div className="login">
                        <div className="login__name-dn">
                             <span className="login-name">
                                 Đăng nhập Facebook
                            </span>
                        </div>
                    <div className="login__input-email">
                        <input  className="login__input__mk_mot"  type="text" placeholder="Email hoặc số điện thoại"/>
                    </div>
                    <div className="login__input-mk">
                        <input className="login__input__mk_hai" type="password" placeholder=" Mật khẩu"/>
                    </div>
                    <div className="login__button">
                        <button className="login-button-dn">Đăng nhập</button>
                    </div>
                    <div className="login__button">
                        <a href="#" className="login__forget--password">Quên mật khẩu?</a>
                    </div>
                </div>
            </div>
        )
    }
}
export default formlogin;