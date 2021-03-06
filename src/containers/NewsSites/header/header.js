import React, {Component} from "react";
import logofacebook from '../../../asset/img/facebook-logo.png';
import avartar from '../../../asset/img/thor.jpg';
import login from '../../../sass/main.scss';
import { BsSearch,AiFillCaretDown,BsFillBellFill,
    FaUserFriends,FaFacebookMessenger,
    BsFillQuestionCircleFill,GrFacebook } from "react-icons/all";

class header extends Component{
    render() {
        return(
            <div className="header__bangtin" >
                <div className="header__image">
                    <GrFacebook  className="header__image--logo"  color="white" />
                </div>
                <div className="header__input">
                   <input type="text" className="header__input-search" placeholder="Tìm kiếm" />
                </div>
                <div className="header__button">
                    <button className="header__button-search"> <BsSearch  /></button>
                </div>
                <div className="testtimonial__shape">
                        <figure  className="testtimonial__shape" >
                            <img  src={avartar}  className="testtimonial__img"/>
                            <figure className="testimonial__caption">
                                Thanos
                            </figure>
                        </figure>
                </div>
                <div>
                    <figure className="testimonial__caption-tc">
                        Trang Chủ
                    </figure>
                </div>
                <div>
                    <figure className="testimonial__caption-t">
                        Tạo
                    </figure>
                </div>
                <div>
                    <figure className="testimonial__caption-icon">
                       <AiFillCaretDown className="icon_logout"/>
                    </figure>
                </div>
                <div className="testimonial__icon_notification">
                    <p className="">
                        <BsFillBellFill class="icon_notification" />
                    </p>
                </div>
                <div className="testimonial__icon_userradd">
                    <p className="">
                        <FaUserFriends class="icon_user" />
                    </p>
                </div>
                <div className="testimonial__icon_messenger">
                    <p className="">
                        <FaFacebookMessenger class="icon_messenger" />
                    </p>
                </div>
                <div className="testimonial__icon_question">
                    <p className="">
                        <BsFillQuestionCircleFill class="icon_question" />
                    </p>
                </div>
            </div>
        )
    }
}
export default header;