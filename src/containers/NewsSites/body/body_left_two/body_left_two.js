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
import  { connect } from 'react-redux';
import * as actions from '../../../../store/action/index';
class body_left_two extends Component{
    componentDidMount()
    {
        // this.setState({content: this.props.content})
        this.props.onGetSite(this.props.token)
    }
    render() {
        // console.log("10111213",this.props.content)
        const getdataComponent = this.props.content && this.props.content.map(content => (
            <Body_left_two_newsites
             id={content.id}
             content={content.content}
            />
        ))
        const contentSide = [];
        for(let contentStatus in this.props.content)
        {
            contentSide.push(
                {
                    id:contentStatus,
                    content: this.props.content[contentStatus]
                }
            )
        }

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
                {getdataComponent}
            </div>
        )
    }
}
const mapStatetoProp = state => {
    return{
        loading: state.newSites.loading,
        token: state.newSites.token,
        content: state.newSites.content
    }
}
const mapDispatchToProps = dispatch => {
    // console.log("397929",dispatch(actions.stateSite()))
    return {
        onGetSite:()=>dispatch(actions.stateSite())
    }
}
export default  connect(mapStatetoProp,mapDispatchToProps)(body_left_two);