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
            firt_name: {
                className:'inputFirt_name',
                inputType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: ' Họ '
                },
            },
            last_name: {
                className:'inputLast_name',
                inputType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: ' Tên',
                },
            },
            phone: {
                className:'inputPhone',
                inputType: 'input',
                elementConfig: {
                    type:'text',
                    placeholder: ' Số điện thoại hoặc email'
                },
                phoneError: '',
                touched: false

            },
            password: {
                className:'inputPassword',
                inputType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: ' Mật khẩu'
                },
                error: "",
                value: "",
            },
            birth_date: {
                className:'inputDate',
                inputType: 'input',
                elementConfig: {
                    type: 'date',
                    placeholder: 'date',
                },
                birth_dateError: "",
            },
            sex_female: {
                className:'inputFemale',
                inputType: 'input',
                type:'radio',
                elementConfig: {
                    name: 'sex',
                },
                value: '0',
            },
            sex_male: {
                className:'inputMale',
                inputType: 'input',
                type: 'radio',
                elementConfig: {
                    name: 'sex',
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
    inputchangerHandler = (event, controlName) => {
        let updatedControls = updateoBject( this.state.controls, {
            [controlName]: updateoBject(this.state.controls[controlName],{
             value: event.target.value,
            })
        })
        console.log(event.target.value);
        // console.log(event.target.value)
        // console.log(this.state.controls[controlName])
        // if(this.state.controls.phone.value < 6)
        // {
        //     this.state.controls.phoneError = 'username needs to be atleast 5 characters long'
        // }
        // if(this.state.controls.password.value < 6)
        // {
        //     this.state.controls.phoneError = 'password needs to be atleast 5 characters long'
        // }
        console.log('123123123123123123',this.state.controls[controlName].value);
        let sexSelected = 0;
        if (event.target.name == 'sex') {
            sexSelected = event.target.value;
        }
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
    //         birth_dateError:""
    //     };
    //     console.log(errors)
    //
    //     if(this.state.controls.phone.value.length < 6)
    //     {
    //         isError = true;
    //         errors.phoneError = ' usernam needs to be atleast 5 characters long'
    //         console.log(errors.phoneError)
    //     }
    //     if(this.state.controls.password.value.length < 6)
    //     {
    //         isError = true;
    //         errors.passwordError = ' password needs to be atleast 5 characters long';
    //     }
    //     if(this.state.controls.firt_name.value.length < 3)
    //     {
    //         isError = true;
    //         errors.first_nameError = ' firt_name needs to be atleast 5 characters long'
    //     }
    //     if(this.state.controls.last_name.value.length < 3)
    //     {
    //         isError = true;
    //         errors.last_nameError = ' last_name needs to be atleast 5 characters long'
    //     }
    //     if(this.state.controls.birth_date.value.length < 3)
    //     {
    //         isError = true;
    //         errors.birth_dateError = ' last_name needs to be atleast 5 characters long'
    //     }
    //         this.setState({
    //             ...this.state,
    //             ...errors
    //         })
    //     console.log(isError);
    //     return isError;
    // }
    handlerValidation =  (e) => {
        const err = this.validation();
        if(!err)
        {
            this.setState({
                // phone: "",
                phoneError: "",
                // password: "",
                passwordError: "",
                // first_name:"",
                first_nameError: "",
                // last_name:"",
                last_nameError: "",
            })
        }
        console.log(err)
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
                type={formElement.config.type}
                className={formElement.config.className}
                 changed={(event) => this.inputchangerHandler(event,formElement.id)}
                // changed = {(event) =>this.validation(event,formElement.id)}
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
        // console.log(label);
        // else if(this.props.error){
        //     errorMessenge = (
        //             <p>{this.props.error.Messenger}</p>
        //         )
        // }
        // let errorMessenge = null;
        if(this.props.loading)
        {
            form = <Spinner className="center" />
        }
        return(
            <div className="">
                <p className="bodyleft_Signup">Đăng Ký</p>
                {/*<p className="bodyleft_speed">Nhanh chóng và dễ dàng</p>*/}
                <form onSubmit={e =>this.handlerValidation(e)}>
                    {form}
                    {label}
                    {console.log(label)}
                    <Button clicked={this.submitSignIn}>Đăng Ký</Button>
                </form>
                {/*<p className="bodyleft_Date">Ngày Sinh</p>*/}
                {/*<p className="bodyleft_male">Nam </p>*/}
                {/*<p className="bodyleft_female">Nữ</p>*/}
                {/*<p className="bodyleft_Option">Tùy Chỉnh</p>*/}
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