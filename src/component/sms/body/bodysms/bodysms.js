import React, {Component} from "react";

class bodysms extends Component{
    render() {
        return (
            <div className="body_form_login">
                <div className="login_sms">
                    <p className="login_name">Nhập mã từ SMS</p>
                    <div className="login_contain">
                        <p>Để đảm bảo đây là số di động của bạn,hãy nhập đoạn mã mà
                            chúng tôi đã gửi qua tin nhắn SMS theo số 0392349083 (Việt Nam)
                        </p>
                        <input placeholder="FB-"  className="input-sms"/>
                        <a href="#" className="login_messenger_sms">Gửi lại SMS</a>
                    </div>
                    <div className="login_update">
                        <button className="login_update-button">Cập nhật thông tin liên hệ</button>
                        <button className="login_update-again">Tiếp tục</button>
                    </div>
                </div>
            </div>
        );
    }
}
export default bodysms;