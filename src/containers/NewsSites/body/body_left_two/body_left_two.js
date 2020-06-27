import React, {Component} from "react";
import login from '../../../../sass/login.scss';
import thanos from '../../../../asset/img/thor.jpg';
class body_left_two extends Component{
    render() {
        return(
            <div className="body_left_two">
                <div className="body_left_two-status">
                    <div className="body_left_two_sites">
                        <p className="body_left_two__name__sites">Tạo Bài Viết</p>
                    </div>
                    <div className="body_left_two_stattus__writes">
                        <img src={thanos}  className="body_left_two_stattus__img" />
                        <p className="body_left_two_stattus__think">Thor ơi, bạn đang nghĩ gì?</p>
                    </div>
                    <div className="body_left_two_stattus__space">
                        <a className="body_left_two_status__office">Tạo Phòng h...</a>
                        <a className="body_left_two_status__video">Ảnh/Video</a>
                        <a className="body_left_two_status__friends">Gắn thẻ bạn bè</a>
                    </div>
                </div>
                <div className="body_left_two-meeting">
                </div>
                <div className="body_left_two-story">
                </div>
                <div className="body_left_two-newssites">
                </div>
            </div>
        )
    }

}
export default body_left_two;