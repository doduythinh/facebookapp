import React, {Component} from "react";
import login from '../../../../sass/login.scss';
import { RiMoreLine,FaGlobeAmericas,
    GoCommentDiscussion,BsPencilSquare,
    TiCameraOutline,
    RiLiveLine,
    TiUserAdd
} from "react-icons/all";
import login_mot from '../../../../asset/img/thanos1.jpg';
class body_right_one extends Component{
    render() {
        return(
            <div className="bodyright_one">
                <div className="bodyright_one_page">
                    <div className="bodyright_one_page-boderbottom">
                        <p className="bodyright_one_page-name">Trang Của Bạn</p>
                        <RiMoreLine  className="bodyright_one_page-chitiet"/>
                    </div>
                    <div className="bodyright_one_page-boderbottom_one">
                        <img  src={login_mot} className="bodyright_one_page-boderbottom_oneimg" />
                        <a href="#" className="bodyright_one_page-boderbottom_name">I ròn man</a>
                        <FaGlobeAmericas  className="global" /><p className="bodyright_one_page-boderbottom_name_messenger">Tin Nhắn</p>
                        <GoCommentDiscussion className="Comment" /><p className="bodyright_one_page-boderbottom_name_notification">Thông Báo</p>
                    </div>
                    <div className="bodyright_one_page-boderbottom-Dang">
                        <BsPencilSquare className="bodyright_one_page_boderbottom_Dang_icon" />
                        <a href="#" className="bodyright_one_page-boderbottom_name-Dang">Đăng</a>
                        <TiCameraOutline className="bodyright_one_page_boderbottom_Dang_Icon_camera" />
                        <a href="#" className="bodyright_one_page-boderbottom_name_Image">Hình ảnh</a>
                        <RiLiveLine className="bodyright_one_page_boderbottom_Dang_Icon_direct" />
                        <a href="#" className="bodyright_one_page-boderbottom_name_direct">Trực tiếp</a>
                        <TiUserAdd className="bodyright_one_page_boderbottom_Dang_Icon_invite" />
                        <a href="#" className="bodyright_one_page-boderbottom_name_Moi">Mời</a>
                    </div>
                    <div className="bodyright_one_page-boderbottom-interact">
                        <button className="bodyright_one_page-boderbottom-interact_like" >Số lượt thích</button>
                        <button className="bodyright_one_page-boderbottom-interact_view">Số lượt xem</button>
                        <button className="bodyright_one_page-boderbottom-interact_view">Bài viết</button>
                    </div>
                    <div className="bodyright_one_page-boderbottom-promote">
                        <button className="bodyright_one_page-boderbottom_create-promote">Tạo Quảng Cáo</button>
                    </div>
                </div>
                <div className="bodyright_one_stream">
                    <p className="bodyright_one_stream-name" >Video chơi game</p>
                </div>
                <div className="bodyright_one_promote">
                    <p className="bodyright_one_stream-founder" >Được tài trợ</p>
                    <a href="#" className="bodyright_one_stream-nampromote">Tạo quảng cáo</a>
                </div>
                <div className="bodyright_one_language">
                </div>
            </div>
        )
    }
}
export default body_right_one;