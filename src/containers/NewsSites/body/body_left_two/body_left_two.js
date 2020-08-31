import React, {Component} from "react";
import login from '../../../../sass/main.scss';
import thanos from '../../../../asset/img/thor.jpg';
import thanos1 from '../../../../asset/img/thanos1.jpg';
import avenger from '../../../../asset/img/background.jpg';

import Body_left_two_newsites from './body_left_two_newsites/body_left_two_newsites';
import Body_left_two_status from './body_left_two_status/body_left_two_status';
import {FaGlobeAmericas,
    AiOutlineLike,
    FaRegCommentAlt,
    RiShareForwardLine,
    RiMoreLine,FcVideoCall,
    FcAddImage,
    FcPortraitMode
} from "react-icons/all";
import { connect } from 'react-redux';
class body_left_two extends Component{
    render() {
        return(
            <div className="body_left_two">
                <Body_left_two_status />
                <div className="body_left_two-meeting">
                    <p className="body_left_two-meeting_name">Phòng họp mặt</p>
                    <a  href="#" className="body_left_two-meeting_namet">Tạo</a>
                    <img src={thanos} className="body_left_two-meeting-img"/>
                </div>
                <div className="body_left_two-story">
                    <p className="body_left_two-story--name">Tin</p>
                    <a href="#" className="body_left_two-story--se_All">Xem Tất Cả</a>
                    <div>
                        <img  src={thanos} className="body_left_two-story--img"/>
                        <p className="body_left_two-story--name-def">Thêm vào tin</p>
                    </div>
                </div>
                <Body_left_two_newsites />
            </div>
        )
    }

}
export default body_left_two;