import React, {Component} from 'react';
import thanos from "../../../../../asset/img/thor.jpg";
import {FcAddImage, FcPortraitMode, FcVideoCall} from "react-icons/all";
import login from '../../../../../sass/main.scss';
import { connect } from 'react-redux';
import * as actions from '../../../../../store/action/index';
class BodyLeftTwoStatus extends Component
{
    constructor(props) {
        super(props);
        this.state = {content: ""};
    }
    onChangeSite = (event) => {
        event.preventDefault();
        console.log("113",event.target.value);
        this.setState({content:event.target.value})
    }
    onPostSite = (event) => {
        event.preventDefault();
        this.props.onPostSites(this.state.content)
    }
    render() {
        return (
            <div className="body_left_two-status">
                <div className="body_left_two_sites">
                    <p className="body_left_two__name__sites">Tạo Bài Viết</p>
                </div>
                <div className="body_left_two_stattus__writes">
                    <img src={thanos}  className="body_left_two_stattus__img" />
                    <input
                        // ref={(input) => this.textcontent = input}
                        onChange={this.onChangeSite}  />
                    <button onClick={this.onPostSite} >Đăng</button>
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
        );
    }

}
const stateToProp = state =>{
    return {
        token: state.newSites.token
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onPostSites:(content)=>dispatch(actions.UpdatesNewsitesTrue(content))
    }
}
export default connect(stateToProp,mapDispatchToProps)(BodyLeftTwoStatus);