import React,{Component} from "react";
import login from '../../../sass/login.scss';
import body from '../body/body';
class login_new extends Component{

    render() {
        return(
            <div className="header">
                <div className="header__login__new">
                    <a href="#" className="header__login__new--name">facebook</a>
                </div>
                <div className="header__login__new__account">
                    <button href="#" className="header__login__new__account--name">Tạo tài khoản mới</button>
                </div>
            </div>

        )
    }
}

export default login_new;