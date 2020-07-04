import React, {Component} from "react";
import login from '../../../../sass/login.scss';
import imagethor from '../../../../asset/img/thor.jpg';
import { BsSearch,
    AiTwotoneSetting,
    BsPencilSquare
    ,MdGroup,
    RiLiveLine
} from "react-icons/all";


class body_right_two extends Component{

    render() {
        let  emailIcon = <BsSearch  size={4}  />;
        return(
            <div className="bodyright_two">
                <div className="bodyright_two-page">
                    <p className="bodyright_two_name">TRANG CỦA BẠN </p>
                </div>
                <div className="bodyright_two-contact">
                    <p className="bodyright_two_contact_name">DANH BẠ </p>
                </div>
                <div className="bodyright_two-imgcycle">
                    <figure className="bodyright_figure">
                        <img  src={imagethor} className="image__chat"/>
                    </figure>
                </div>
                <div className="bodyright_two_name_messenger">
                    <p className="name_messenger">Nguyễn văn Thor</p>
                </div>

                <div className="bodyright_two-story">
                    <p className="bodyright_two_contact_name">CUỘC TRÒ CHUYỆN NHÓM </p>
                </div>
                <div>
                    <AiTwotoneSetting className="AiTwotoneSetting" />
                    <BsPencilSquare />
                    <MdGroup />
                    <RiLiveLine />
                    <input className="bodyright_two-input" placeholder={emailIcon} type="text" placeholder="Tìm kiếm" />
                </div>
            </div>
        )
    }
}
export default body_right_two;