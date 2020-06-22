import React,{ Component }  from 'react';
import Bodyleft from '../../../../sass/login.scss';

const emailRegex = RegExp(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)

const formValid  = formatError => {
    let valid = true;
    Object.values(formatError).forEach(val => {
        val.length > 0 && (valid = false)
    })
    return valid;
}

class bodyleft extends Component{

    state = {
        surname:null,
        firstname:null,
        username:null,
        password:null,

        formErrors: {
            surname:"",
            firstname: "",
            username: "",
            password: ""
        }
    }

    handerSubmit = e => {
        e.preventDefault();
        if(formValid(this.state.formErrors))
        {
            console.log(`
            sur name: ${this.state.surname}
            first name: ${this.state.firstname}
            user name: ${this.state.username}
            password: ${this.state.password}
            `)
        }
        else{
            console.error("FORM INVALID  - DISPLAY ERROR MESSAGE")
        }
    }

    handleChange  = e => {
        e.preventDefault();
        const { name ,value} = e.target

        let formErrors = this.state.formErrors;
        switch (name) {
            case 'surname':
                formErrors.surname = value.length < 3 && value.length > 0 ? "minimum 3 characters  surname required" : "";
                break;
            case 'firstname':
                    formErrors.firstname = value.length < 3 && value.length > 0 ? "minimum 3 characters firstname required" : "";
                break;
            case 'username':
                formErrors.username = emailRegex.test(value)< 3 && value.length > 0 ? '' : 'invalid email address';
                break;
            case 'password':
                formErrors.password = value.length < 3 && value.length > 0 ? "minimum 6 characters required" : "";
                break;

        }
        this.setState({formErrors, [name]: value}, () => console.log(this.state));

    }
    render() {
        const { formErrors } =this.state;
        return(
            <div className="bodyleft">
                <h2 className="bodyleft__label">Đăng ký </h2>
                <p className="bodyleft_free">Nhanh chóng và dễ dàng</p>
                <div className="bodyleft__account">
                    <form className="bodyleft__account-form" onSubmit={this.handerSubmit}>
                        <input className="bodyleft__surname" type="text" name="surname" placeholder="Họ"
                               onChange={this.handleChange}
                            />
                        {formErrors.surname.length>0 && (<span className="errorMessage">{formErrors.surname}</span>)}
                        <input className="bodyleft__firstname" type="text" name="firstname" placeholder="Tên"
                               onChange={this.handleChange}
                       />
                        {formErrors.firstname.length>0 && (<span className="errorMessage">{formErrors.firstname}</span>)}
                        <br />
                        <input className="bodyleft__phone" type="email" name="username" placeholder="Số di động hoặc email"
                               onChange={this.handleChange}
                             />
                        {formErrors.username.length>0 && (<span className="errorMessage">{formErrors.username}</span>)}
                        <br/>
                        <input className="bodyleft__password-new" type="password" name="password" placeholder="Mật khẩu mới"
                               onChange={this.handleChange}
                        />
                        {formErrors.password.length>0 && (<span className="errorMessage">{formErrors.password}</span>)}
                       {/* {form}*/}
                    </form>
                </div>
                <div className="birhdate">
                    <label className="bodyleft__Birthdate-name">Ngày Sinh</label>
                    {/*<input type="date"  className="bodyleft__Birthdate-option_date" />*/}
                    <select className="bodyleft__day">
                        <option>Danh sách 01</option>
                    </select>
                    <select className="bodyleft__Month" >
                        <option>Danh sách 01</option>
                    </select>
                    <select className="bodyleft__Year" >
                        <option>Danh sách 01</option>
                    </select>
                </div>
                <div className="bodyleft__sex">
                    <h2 className="sex-name">Giới Tính</h2>
                    <div className="sex">
                        <input   className="bodyleft__Option" type="radio"  value="male" /><span className="Option" >Tùy Chỉnh</span>
                        <input  className="bodyleft__female" type="radio"/><span className="Female">Nữ</span>
                        <input  className="bodyleft__Male" type="radio" value="female"/><span className="Male">Nam</span></div>
                </div>
                <div className="bodyleft__button">
                    <button  type="submit" className="Button_SignIn">Đăng Ký</button>
                </div>
            </div>
        )
    }
}
export default bodyleft;