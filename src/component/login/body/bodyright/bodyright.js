import body from '../../../../sass/main.scss';
import React,{ Component }  from 'react';
import  { connect } from 'react-redux';
import * as actions from '../../../../store/action/index';
import  Input from '../../../UI/input/Input';
import Spinner from '../../../UI/Spinner/Spinner';
import Button from '../../../UI/Button/Button';
import Button_SignIn from '../../../UI/Button/Button.scss';
import {updateoBject,checkValidity} from "../../../../shared/utility";
// import { RadioButton, RadioGroup } from 'react-radio-group-context';
import Label from '../../../UI/label/label';

class bodyright extends Component{
    state = {
        controls: {
            first_name: {
                className:'inputFirt_name',
                inputType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: ' Họ '
                },
                value:'',
                // name:'first_name'
            },
            last_name: {
                className:'inputLast_name',
                inputType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: ' Tên',
                },
                value:'',
                // name:'last_name'
            },
            phone: {
                className:'inputPhone',
                inputType: 'input',
                elementConfig: {
                    type:'text',
                    placeholder: ' Số điện thoại hoặc email'
                },
                phoneError: '',
                touched: false,
                value:'',
                // name:'phone'
            },
            password: {
                className:'inputPassword',
                inputType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: ' Mật khẩu'
                },
                error: "",
                value:'',
                // name: 'password'
            },
            birth_date: {
                className:'inputDate',
                inputType: 'input',
                elementConfig: {
                    type:'date',
                    placeholder: 'date',
                },
                birth_dateError: "",
                value:'',
                // name: 'birth_date'
            },
            sex_female: {
                className:'inputFemale',
                inputType: 'input',
                elementConfig: {
                    name: 'sex',
                    type:'radio',
                },
                value: '0',
            },
            sex_male: {
                className:'inputMale',
                inputType: 'input',
                elementConfig: {
                    name: 'sex',
                    type: 'radio',
                },
                value: '1',
            },
            sex_option: {
                className:'inputOption',
                inputType: 'input',
                type: 'radio',
                elementConfig: {
                    type: 'radio',
                    name: 'sex',
                },
                value: '2',
            },
        },
        label: {
            labelspeed:{
                labelType:'label',
                className:'speed',
                labelConfig:{
                    name:'Nhanh chóng và dễ dàng',
                },
            },
            labelDate:{
                labelType:'label',
                className:'Date',
                labelConfig: {
                    name: 'Ngày Sinh',
                }
            },
            labelMale:{
                labelType:'label',
                className:'Male',
                labelConfig: {
                    name: 'Nam',
                }
            },
            labelFemale:{
                labelType:'label',
                className:'Female',
                labelConfig: {
                    name: 'Nữ',
                }
            },
            labelOption:{
                labelType:'label',
                className:'Option',
                labelConfig: {
                    name: 'Tùy Chỉnh',
                }
            },
        },
        sex_state: '',
    }
    inputchangerHandler = async (val, controlName) => {
        // val.preventDefault();
        let updatedControls = updateoBject( this.state.controls, {
            [controlName]: updateoBject(this.state.controls[controlName],{
                value: val.target.value,
            })
        })
        let isError = false;
            let errors = {
                phoneError: "",
                passwordError: "",
                first_nameError: "",
                last_nameError: "",
                birth_dateError:""
            };
        // let { formcontrols1 } = this.state.controls
        if(this.state.controls.phone.value.length < 10 && this.state.controls.phone.value.length > 0)
        {
            isError = true;
            errors.phoneError = 'phone needs to be atleast 10 characters long';
            console.log(errors.phoneError)
        }
        if(this.state.controls.password.value.length < 10 && this.state.controls.password.value.length > 0)
        {
            isError = true;
            errors.passwordError = 'number needs to be atleast 10 characters long';
            console.log(errors.passwordError)
        }
        if(this.state.controls.first_name.value.length < 6 && this.state.controls.first_name.value.length > 0)
        {
            isError = true;
            errors.first_nameError = 'firt_name needs to be atleast 6 characters long';
            console.log(errors.first_nameError)
        }
        if(this.state.controls.last_name.value.length < 6 && this.state.controls.last_name.value.length > 0)
        {
            isError = true;
            errors.last_nameError = 'lastname needs to be atleast 6 characters long';
            console.log(errors.last_nameError)
        }
        if(this.state.controls.birth_date.value.length < 1 && this.state.controls.birth_date.value.length > 0)
        {
            isError = true;
            errors.birth_dateError = 'lastname needs to be atleast 1 characters long';
            console.log(errors.birth_dateError)
        }
        let sexSelected = 0;
        if (val.target.name == 'sex') {
            sexSelected = val.target.value;
        }
        await this.setState({controls: updatedControls, sex_state: sexSelected})
        console.log('123123123123123123', this.state.controls[controlName].value)
        return isError;
    }
    submitSignIn = (event) => {
        event.preventDefault()
        // let vali = this.handlerValidation();
        this.props.onAuthSinup(this.state.controls.first_name.value,this.state.controls.last_name.value,
            this.state.controls.phone.value,this.state.controls.password.value,
            this.state.controls.birth_date.value,this.state.sex_state)
    }
    render() {
        const formElementArray = [];
        const labelElementArray = [];
        for(let key in this.state.controls)
        {
            formElementArray.push({
                id: key,
                config: this.state.controls[key]
            })
        }
        let form = formElementArray.map(formElement =>(
            <Input
                key={formElement.id}
                inputType={formElement.config.inputType}
                elementConfig={formElement.config.elementConfig}
                value={formElement.config.value}
                name={formElement.config.name}
                className={formElement.config.className}
                 changed={(event) => this.inputchangerHandler(event,formElement.id)}
            />
            )
        )
        for(let key in this.state.label)
        {
            labelElementArray.push({
                id: key,
                config: this.state.label[key]
            })
        }
        let label = labelElementArray.map(formElement =>(
                <Label
                    key={formElement.id}
                    name={formElement.config.name}
                    className={formElement.config.className}
                    labelType={formElement.config.labelType}
                    labelConfig={formElement.config.labelConfig}
                />
            )
        )
        if(this.props.loading)
        {
            form = <Spinner className="center" />
        }
        return(
            <div className="">
                <p className="bodyleft_Signup">Đăng Ký</p>
                <p className="bodyleft_speed">Nhanh chóng và dễ dàng</p>
                <form>
                    {/*{formErrors.first_name.length > 0 && (<span className="errorMessagesurname">{formErrors.first_name}</span>)}*/}
                    {form}
                    {label}
                    {/*{console.log(label)}*/}
                    <Button clicked={this.submitSignIn}>Đăng Ký</Button>
                </form>
                <p className="bodyleft_Date">Ngày Sinh</p>
                <p className="bodyleft_male">Nam </p>
                <p className="bodyleft_female">Nữ</p>
                <p className="bodyleft_Option">Tùy Chỉnh</p>
            </div>
        )
    }
}
const mapStateToProps = state => {
   return{
       loading:state.auth.loading,
       error:state.auth.error,
       isAuthenticated: state.auth.token !==null,
   }
}
const mapDispatchToProps = dispatch =>{
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
export default connect(mapStateToProps,mapDispatchToProps)(bodyright);