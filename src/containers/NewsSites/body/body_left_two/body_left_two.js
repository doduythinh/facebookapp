import React, {Component} from "react";
import login from '../../../../sass/main.scss';
import thanos from '../../../../asset/img/thor.jpg';
import thanos1 from '../../../../asset/img/thanos1.jpg';
import avenger from '../../../../asset/img/background.jpg';
import {FaGlobeAmericas,
    AiOutlineLike,
    FaRegCommentAlt,
    RiShareForwardLine,
    RiMoreLine,FcVideoCall,
    FcAddImage,
    FcPortraitMode
} from "react-icons/all";
// import body_left_two_newsites from './body_left_two_newsites/body_left_two_newsites';
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
                            <FcVideoCall className="FcVideoCall" /><span className="name_tao_phong">Tạo Phòng h...</span>
                        </a>
                        <a href="#" className="body_left_two_status__video">
                            <FcAddImage className="FcAddImage" /><span className="name_Video">Ảnh/Video</span>
                        </a>
                        <a href="#" className="body_left_two_status__friends">
                            <FcPortraitMode className="FcPortraitMode" /><span className="name_friends">Gắn thẻ bạn bè</span>
                        </a>
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
                    <div>
                        <img  src={thanos} className="body_left_two-story--img"/>
                        <p className="body_left_two-story--name-def">Thêm vào tin</p>
                    </div>
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
                        <AiOutlineLike  className="like" /><p className="body_left_two-newssites_like">Thích </p>
                        <FaRegCommentAlt className="comment" /><p className="body_left_two-newssites_comment">Bình Luận </p>
                        <RiShareForwardLine className="share" /><p className="body_left_two-newssites_share">Chia sẻ</p>
                    </div>
                </div>
            </div>
        )
    }

}
export default body_left_two;