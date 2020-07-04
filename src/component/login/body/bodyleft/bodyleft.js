import React,{ Component }  from 'react';
import Bodyleft from '../../../../sass/login.scss';
import  { connect } from 'react-redux';
import * as actions from '../../../../store/action/index';

const emailRegex = RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const formValid  = (formatError,...rest) => {
    let valid = true;
    Object.values(formatError).forEach(val => {
        val.length > 0 && (valid = false)
    })
    Object.values(rest).forEach(value => {
        value==null && (valid = false)
    })
    return valid;
}

class bodyleft extends Component{

    state = {
        first_name: "",
        last_name: "",
        phone: "",
        password: "",
        female: "",
        male:"",
        bird_date: "",
        gender: "",
        formErrors: {
            first_name:"",
            last_name: "",
            phone: "",
            password: ""
        }
    }

    handerSubmitValidation = e => {
        e.preventDefault();
        if(formValid(this.state.formErrors))
        {
            console.log(`
            sur name: ${this.state.last_name}
            first name: ${this.state.first_name}
            user name: ${this.state.user_name}
            password: ${this.state.password}
            `)
        }
        else{
            console.error("FORM INVALID  - DISPLAY ERROR MESSAGE")
        }

    }
    handlersubmitSignUp = (event, key) => {
        event.preventDefault();
        let  last_name = this.textInputOne.value;
        let  first_name = this.textInpuTwo.value;
        let  user_name = this.textInpuThree.value;
        let  password = this.textInputFour.value;
        let  birhdate = this.textInputFive.value;
        // let  gender = this.textInputSix.value;
        // let  gende1 = this.textInputSeven.value;
        // let  gender2 = this.textInputEight.value;
        console.log("asdasdasdasd", event.target.value, key);
        // console.log(last_name,first_name,user_name,password,birhdate,gender2);
        this.setState( {first_name:first_name,
            last_name:last_name
            ,phone:user_name,
            password:password,
            bird_date:birhdate,
            gender:event.target.value
            } );
    }
    submitSignUp  = (event) => {
        event.preventDefault();
        this.props.onAuthSinup(this.state.first_name,this.state.last_name,
            this.state.phone,this.state.password,
            this.state.bird_date,this.state.gender
        );
    }
    handleChangeValidation  = e => {
        e.preventDefault();
        const { name ,value } = e.target
        let formErrors = this.state.formErrors;
        switch (name) {
            case 'last_name':
                formErrors.last_name = value.length <= 3 && value.length > 0 ? "minimum 3 characters  surname required" : "";
                break;
            case 'first_name':
                    formErrors.first_name = value.length <= 3 && value.length > 0 ? "minimum 3 characters firstname required" : "";
                break;
            case 'user_name':
                formErrors.phone = emailRegex.test(value)? '' : 'invalid email address';
                break;
            case 'password':
                formErrors.password = value.length <= 6 && value.length > 0 ? "minimum 6 characters required" : "";
                break;
        }
        // handlersubmitSignUp();
        this.setState({formErrors, [name]: value}, () => console.log(this.state));

    }
    render() {
        const { formErrors } =this.state;
        return(
            <div className="bodyleft">
                <h2 className="bodyleft__label">Đăng ký </h2>
                <p className="bodyleft_free">Nhanh chóng và dễ dàng</p>
                <div className="bodyleft__account">
                    <form className="bodyleft__account-form" onSubmit={this.handerSubmitValidation}>
                        <input
                            ref={(input) =>this.textInputOne = input}
                               className="bodyleft__surname"
                               type="text" name="last_name"
                               placeholder="Họ"
                               onChange={this.handlersubmitSignUp}
                            />
                        {formErrors.last_name.length>0 && (<span className="errorMessagesurname">{formErrors.last_name}</span>)}
                        <input
                            ref={(input) => this.textInpuTwo = input}
                               className="bodyleft__firstname"
                               type="text" name="first_name"
                               placeholder="Tên"
                               onChange={this.handlersubmitSignUp}
                       />
                        {formErrors.first_name.length>0 && (<span className="errorMessage">{formErrors.first_name}</span>)}
                        <br />
                        <input
                            ref={(input) =>this.textInpuThree = input}
                               className="bodyleft__phone"
                               type="email" name="user_name"
                               placeholder="Số di động hoặc email"
                               onChange={this.handlersubmitSignUp}
                             />
                        {formErrors.phone.length>0 && (<span className="errorMessage">{formErrors.phone}</span>)}
                        <br/>
                        <input
                            ref={(input) =>this.textInputFour = input}
                               className="bodyleft__password-new"
                               type="password" name="password"
                               placeholder="Mật khẩu mới"
                               onChange={this.handlersubmitSignUp}
                        />
                        {formErrors.password.length>0 && (<span className="errorMessage">{formErrors.password}</span>)}
                    </form>
                </div>
                <div className="birhdate">
                    <label className="bodyleft__Birthdate-name">Ngày Sinh</label>
                    <input
                        ref={(input) =>this.textInputFive = input}
                           type="date"
                           className="bodyleft__Birthdate-option_date"
                            onChange={this.handlersubmitSignUp}
                             />
                            {/*<select className="bodyleft__day" >*/}
                            {/*    <option>Danh sách 01</option>*/}
                            {/*</select>*/}
                            {/*<select className="bodyleft__Month" >*/}
                            {/*    <option>Danh sách 01</option>*/}
                            {/*</select>*/}
                            {/*<select className="bodyleft__Year" >*/}
                            {/*    <option>Danh sách 01</option>*/}
                            {/*</select>*/}
                </div>
                <div className="bodyleft__sex">
                    <h2 className="sex-name">Giới Tính</h2>
                    <div className="sex">
                        <input
                            onChange={(event) => this.handlersubmitSignUp(event, "radio-sex" )}
                            ref={(input) => this.textInputSix = input }
                            className="bodyleft__Option"
                            type="radio"  value="2"
                            name="nu"
                            />
                            <span className="Option" >
                                Tùy Chỉnh
                            </span>
                        <input
                            onChange={this.handlersubmitSignUp}
                            ref={(input) => this.textInputSeven = input }
                            className="bodyleft__female"
                            type="radio" value="0"
                            name="nu"
                        />
                            <span className="Female">
                                Nữ
                            </span>
                        <input
                            onChange={this.handlersubmitSignUp}
                            ref={(input) => this.textInputEight = input }
                            className="bodyleft__Male"
                            type="radio"
                            value="1"
                            name="nu"
                        />
                            <span className="Male">
                                Nam
                            </span>
                    </div>
                </div>
                <div className="bodyleft__button">
                    <button  type="submit" className="Button_SignIn"  onClick={this.submitSignUp}>Đăng Ký</button>
                </div>
            </div>
        )
    }
}
const mapSignup = state => {
   return{
       loading:state.auth.loading,
       error:state.auth.error
   }
}
const mapInitSignup = dispatch =>{
    return {
        onAuthSinup:(first_name,
                     last_name,
                     phone,
                     password,
                     bird_date,
                     gender,
                     isSignup) => dispatch
            (actions.AuthUserSignnUp(first_name,last_name,phone,password,
                bird_date,gender,
                isSignup)),
    }
}
export default connect(mapSignup,mapInitSignup)(bodyleft);