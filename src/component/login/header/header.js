import React,{ Component }  from 'react';
import login from '../../../sass/main.scss';
import { connect } from 'react-redux';
import * as actions from '../../../store/action/index';
import Spinner from "../../UI/Spinner/Spinner";
import { Redirect } from 'react-router-dom';
import Button from '../../UI/Button/Button';

class Header extends Component{
    state= {
            phone: "",
            password:"",
            isSignup:true,
            touched: false,
    }
    componentDidMount() {
        if(this.props.authRedirectPath !== '/bangtin')
        {
            this.props.onAuthRedirectPath();
        }
    }
    inputchangedHandler = (event) => {
        event.preventDefault();
        let value_phone= this.textInputone.value;
        let value_password= this.textInputtwo.value;
        console.log(value_phone,value_password);
        this.setState( { phone:value_phone,password:value_password,tauched:true,valid:true} );
    }
    submitHandler = (event) => {
        event.preventDefault();
            this.props.onAuth(this.state.phone,this.state.password,this.state.isSignup)
    }
    render() {
        let Authredirect = null;
        if(this.props.isAuthenticated)
        {
            Authredirect =  <Redirect  to={this.props.auRedirect} />
        }
        return (
            <div className="header">
                <div>{Authredirect}</div>
                <div className="header__facebook">
                   <a href="#" className="header__facebook_name">facebook</a>
                </div>
                <div className="header_three">
                    <div className="header__Email">
                        <label className="header__Email-name">Email hoặc điện thoại</label><br />
                        <input
                            ref={(input) => this.textInputone = input}
                            onChange={this.inputchangedHandler}
                            type="text" name="phone"
                            className="header__email-input"
                        />
                    </div>
                    <div className="header__MatKhau">
                        <label className="header__MatKhau-password">Mật Khẩu</label><br />
                        <input
                            ref={(input) => this.textInputtwo = input}
                            onChange={this.inputchangedHandler}
                            type="password"  name="password"
                            className="header__MatKhau-password-input"
                        />
                    </div>
                    <div className="header__forget">
                        <a href="#" className="header__forget-name">Quên tài khoản?</a>
                    </div>
                </div>
                    <div className="header__login-button">
                       <button onClick={this.submitHandler}  href="#" className="button_login">
                           Đăng nhập
                       </button>
                    </div>
            </div>
        );
    }
}
const mapStateProps = state => {
    return{
        loading:state.auth.loading,
        error: state.auth.error,
        isAuthenticated: state.auth.token !== null,
        auRedirect:state.auth.authRedirectPath
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onAuth:(phone,password,isSignup) => dispatch(actions.AuthUserSignIn(phone,password,isSignup)),
        onAuthRedirectPath: () => dispatch(actions.setAuthRedirectPath('/bangtin'))
    }
}
export default connect(mapStateProps,mapDispatchToProps)(Header);