import React,{ Component }  from 'react';
import Bodyleft from '../../../../sass/login.scss';
import Input from '../../../UI/input/Input';

class bodyleft extends Component{
    state = {
        orderForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Name'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            street: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Street'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false

            },
            zipCode: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'ZIP Code'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 5,
                    maxLength: 5
                },
                valid: false,
                touched: false
            },
            country: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Country'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Your E-Mail'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            deliveryMethod: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        {value: 'fastest', displayValue: 'Fastest'},
                        {value: 'cheapest', displayValue: 'Cheapest'}
                    ]
                },
                value: 'fastest',
                validation:{},
                valid:true
            }
        },
        formIsValid: false,
    }



    render() {
        return(
            <div className="bodyleft">
                <h2 className="bodyleft__label">Đăng ký </h2>
                <p className="bodyleft_free">Nhanh chóng và dễ dàng</p>
                <div className="bodyleft__account">
                    <form className="bodyleft__account-form">
                        <input className="bodyleft__surname" text="text" name="surname" placeholder="Họ" />
                        <input className="bodyleft__firstname" text="text" name="first-name" placeholder="Tên" /><br />
                        <input className="bodyleft__phone" text="text" name="mobile" placeholder="Số di động hoặc email" /><br/>
                        <input className="bodyleft__password-new" text="text" name="mobile" placeholder="Mật khẩu mới" />
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
                        <input  className="bodyleft__female" type="radio"/><span className="Female">Nữ</span>
                        <input  className="bodyleft__Male" type="radio" value="female"/><span className="Male">Nam</span>
                        <input   className="bodyleft__Option" type="radio"  value="male" /><span className="Option" >Tùy Chỉnh</span>
                    </div>
                </div>
                <div className="bodyleft__button">
                    <button className="Button_SignIn">Đăng Ký</button>
                </div>
            </div>
        )
    }
}
export default bodyleft;