import React, {Component} from "react";
import thanos1 from '../../../../../asset/img/thanos1.jpg';
import avenger from '../../../../../asset/img/background.jpg';
import {FaGlobeAmericas,
    AiOutlineLike,
    FaRegCommentAlt,
    RiShareForwardLine,
    RiMoreLine,
} from "react-icons/all";
import login from '../../../../../sass/main.scss';
import { connect } from 'react-redux';
import * as actions from '../../../../../store/action/index';
class body_left_two_newsites extends Component{

    constructor(props) {
        super(props);
        this.state = {
            startIndex: 0,
            endIndex: 5
        }
    }

    render() {
        const getSiteMap = null;

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
const getStatetoProp = state => {
    return{
        loading: state.NewSites.loading
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onGetSite:()=>dispatch(actions.getsites())
    }
}
export default connect(getStatetoProp,mapDispatchToProps)(body_left_two_newsites);