import React,{ Component }  from 'react';
import Bodyleft from '../../../../sass/login.scss';
import  { connect } from 'react-redux';
import * as actions from '../../../../store/action/index';
import Input from '../../../UI/input/Input';
import Spinner from '../../../UI/Spinner/Spinner';
import Button from '../../../UI/Button/Button';
import Button_SignIn from '../../../UI/Button/Button.scss';
import {updateoBject,checkValidity} from "../../../../shared/utility";
import { RadioButton, RadioGroup } from 'react-radio-group-context';
import Label from '../../../UI/label/label';

class bodyright extends Component{
    state = {
        controls: {
            firt_name: {
                className:'inputFirt_name',
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: ' Họ '
                },
                firt_nameError: "",
            },
            last_name: {
                className:'inputLast_name',
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: ' Tên',
                },
                last_nameError: "",
            },
            phone: {
                className:'inputPhone',
                elementType: 'input',
                elementConfig: {
                    type:'text',
                    placeholder: ' Số điện thoại hoặc email'
                },
                phoneError: "",
            },
            password: {
                className:'inputPassword',
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: ' Mật khẩu'
                },
                passwordError: "",
            },
            birth_date: {
                className:'inputDate',
                elementType: 'input',
                elementConfig: {
                    type: 'date',
                    placeholder: 'date',
                },
                birth_dateError: "",
            },
            sex_female: {
                className:'inputFemale',
                elementType: 'input',
                elementConfig: {
                    type: 'radio',
                    name: 'sex',
                },
                value: '0',
                sex_femaleError: "",
            },
            sex_male: {
                className:'inputMale',
                elementType: 'input',
                elementConfig: {
                    type: 'radio',
                    name: 'sex',
                },
                value: '1',
                sex_maleError: "",
            },
            sex_option: {
                className:'inputOption',
                elementType: 'input',
                elementConfig: {
                    type: 'radio',
                    name: 'sex',
                },
                value: '2',
                sex_optionError: "",
            },
        },
        sex_state: '',
        name_Label: {
            labelspeed:{
                name: 'Nhanh chóng và dễ dàng',
                className:'labelfirtName',
                elementType: 'label',
            },
            labelLastName:{
                name: 'Ngày Sinh',
                className:'labelfirtName',
                elementType: 'label',
            },
            labelDate:{
                name: 'Giới Tính',
                className:'labelfirtName',
                elementType: 'label',
            },
            labelSexFemale:{
                name: 'Nam',
                className:'labelfirtName',
                elementType: 'label',
            },
            labelSexMale:{
                name: 'Nữ',
                className:'labelfirtName',
                elementType: 'label',
            },
            labelOption:{
                name: 'Tùy Chỉnh',
                className:'labelfirtName',
                elementType: 'label',
            }

        }
    }
    inputchangerHandler = (event, controlName) => {
        let updatedControls = updateoBject( this.state.controls, {
            [controlName]: updateoBject(this.state.controls[controlName],{
                value:event.target.value
            })
        })
        let sexSelected = 0;
        if (event.target.name == 'sex') {
            sexSelected = event.target.value;
        }
        console.log(event.target.value);
        this.setState({controls: updatedControls, sex_state: sexSelected})
    }
    submitSignIn = (event) => {
        event.preventDefault()
        // let vali = this.handlerValidation();
        this.props.onAuthSinup(this.state.controls.firt_name.value,this.state.controls.last_name.value,
            this.state.controls.phone.value,this.state.controls.password.value,
            this.state.controls.birth_date.value,this.state.sex_state)
    }
    // validation  = () => {
    //     let isError = false;
    //     const errors = {
    //         phoneError: "",
    //         passwordError: "",
    //         first_nameError: "",
    //         last_nameError: "",
    //     };
    //     console.log(errors)
    //
    //     if(this.state.controls.phone.length < 6)
    //     {
    //         isError = true;
    //         errors.phoneError = ' usernam needs to be atleast 5 characters long'
    //     }
    //     if(this.state.controls.password.length < 6)
    //     {
    //         isError = true;
    //         errors.passwordError = ' password needs to be atleast 5 characters long'
    //     }
    //     if(this.state.controls.firt_name.length < 3)
    //     {
    //         isError = true;
    //         errors.passwordError = ' firt_name needs to be atleast 5 characters long'
    //     }
    //     if(this.state.controls.last_name.length < 3)
    //     {
    //         isError = true;
    //         errors.passwordError = ' last_name needs to be atleast 5 characters long'
    //     }
    //         this.setState({
    //             ...this.state,
    //             ...errors
    //         })
    //     return isError;
    //     console.log(isError);
    // }
    // handlerValidation =  (e) => {
    //     e.preventDefault();
    //     const err = this.validation();
    //     if(!err)
    //     {
    //         this.setState({
    //             phone: "",
    //             phoneError: "",
    //             password: "",
    //             passwordError: "",
    //             first_name:"",
    //             first_nameError: "",
    //             last_name:"",
    //             last_nameError: "",
    //         })
    //         this.props.onChange({
    //             phone: "",
    //             password: "",
    //             first_name:"",
    //             last_name:"",
    //         })
    //     }
    // }
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
                elementType={formElement.config.elementType}
                elementConfig={formElement.config.elementConfig}
                value={formElement.config.value}
                name={formElement.config.name}
                className={formElement.config.className}
                // changed={event => this.validation(event)}
                changed={(event) => this.inputchangerHandler(event,formElement.id)}
            />
            )
        )
        for(let label in this.state.name_Label)
        {
            labelElementArray.push({
                id:label,
                config: this.state.name_Label[label]
            })
        }
        let label = labelElementArray.map(labelElement => (
            <Label   key={labelElement.id}
                     elementType={labelElement.config.elementType}
                     className={labelElement.config.className}
                     name={labelElement.config.name}
            />
        ))
        // console.log(label);
        // if(this.props.loading)
        // {
        //     form = <Spinner />
        // }
        // let errorMessenge = null;
        //
        // if(this.props.error)
        // {
        //     errorMessenge = (
        //         <p>{this.props.error.Messenger}</p>
        //     )
        // }
        return(
            <div className="bodyleft">
                {/*{errorMessenge}*/}
                <p className="bodyleft_Signup">Đăng Ký</p>
                {label}
                <form>
                    {form}
                    <Button clicked={this.submitSignIn}>Đăng Ký</Button>
                </form>
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