import React, {Component} from "react";
import thanos1 from '../../../../../asset/img/thanos1.jpg';
import avenger from '../../../../../asset/img/background.jpg';
import {FaGlobeAmericas,
    AiOutlineLike,
    FaRegCommentAlt,
    RiShareForwardLine,
    RiMoreLine,
} from "react-icons/all";
import login from '../../../../../sass/login.scss';
class body_left_two_newsites extends Component{
    render() {
        return(
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
        )
    }
}
export default body_left_two_newsites;