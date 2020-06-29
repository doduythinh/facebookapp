import React, {Component} from "react";
import login from '../../../../sass/login.scss';
import thor from '../../../../asset/img/thor.jpg';
import { FaPlusSquare,FcGlobe } from "react-icons/all";
class body_left_one extends Component{
    render() {
        return(
            <div className="body_left_one">
                <div className="body_left_one-mot">
                    <img src={thor}  className="body_left_one-mot_img"/>
                    <p className="name_thor">Nguyễn Văn Thor</p>
                    <FcGlobe className="FcGlobe"  /><p className="name_BangTin">Bảng tin</p>
                    <p className="name_messenger">Messenger</p>
                    <p className="name_Watch">Watch</p>
                    <p className="name_Marketplace">Marketplace</p>
                    <p className="name_LoiTat">Lối Tắt</p>
                    <p className="name_KhamPha">Khám Phá</p>
                    <p className="name_SuKien">Sự Kiện</p>
                    <p className="name_Trang">Trang</p>
                    <p className="name_chiendich">Chiến dịch gây quỹ</p>
                    <p className="name_MessenNhi">Messenger Nhí</p>
                </div>
                {/*<div className="body_left_one-hai">*/}
                {/*    <p className="name_loitat">Lối Tắt</p>*/}
                {/*</div>*/}
                {/*<div className="body_left_one-ba">*/}
                {/*</div>*/}
            </div>
        )
    }

}
export default body_left_one;