import React, {Component} from "react";
import login from '../../../../sass/login.scss';
import thanos from '../../../../asset/img/thor.jpg';
import thanos1 from '../../../../asset/img/thanos1.jpg';
import avenger from '../../../../asset/img/background.jpg';
import {FaGlobeAmericas,
    AiOutlineLike,
    FaRegCommentAlt,
    RiShareForwardLine,
    RiMoreLine,FcVideoCall } from "react-icons/all";
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
                        {/*<a className="body_left_two_gachtren"><hr /></a>*/}
                        <a href="#" className="body_left_two_status__office">
                            <FcVideoCall className="FcVideoCall" /><span className="nam_tao_phong">Tạo Phòng h...</span>
                        </a>
                        <a href="#" className="body_left_two_status__video">Ảnh/Video</a>
                        <a href="#" className="body_left_two_status__friends">Gắn thẻ bạn bè</a>
                        <a href="#" className="body_left_two_status__bacham">...</a>
                    </div>
                </div>
                <div className="body_left_two-meeting">
                    <p className="body_left_two-meeting_name">Phòng họp mặt</p>
                    <a  href="#" className="body_left_two-meeting_namet">Tạo</a>
                    <img src={thanos} className="body_left_two-meeting-img"/>
                </div>
                <div className="body_left_two-story">
                    <p className="body_left_two-story--name">Tin</p>
                    <a href="#" className="body_left_two-story--se_All">Xem Tất Cả</a>
                    <img  src={thanos} className="body_left_two-story--img"/>
                    <p className="body_left_two-story--name-def">Nguyễn Văn Thor</p>
                </div>
                <div className="body_left_two-newssites">
                    <img  src={thanos1}  className="body_left_two-newssites-img"/>
                    <a href="#"  className="body_left_two-newssites-Name">Tha Văn Nốt Và Những Người Bạn</a>
                    <RiMoreLine className="RiMoreLine" />
                    <FaGlobeAmericas  className="body_left_two-newssites-Global"/>
                    <p className="body_left_two-newssites-status">Buồn Buồn móc diss hửi chơi ai ngờ diss thơm buồn ơi là buồn
                    </p>
                    <img src={avenger} className="body_left_two-newssites-img_dangtin"/>
                    <div className="like_share_comment">
                        <p className="body_left_two-newssites_like"><AiOutlineLike  className="like" />Thích </p>
                        <p className="body_left_two-newssites_comment"><FaRegCommentAlt className="comment" />Bình Luận </p>
                        <p className="body_left_two-newssites_share"><RiShareForwardLine className="share" />Chia sẻ</p>
                    </div>
                </div>
            </div>
        )
    }

}
export default body_left_two;