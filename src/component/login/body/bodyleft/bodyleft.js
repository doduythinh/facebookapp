import React,{ Component }  from 'react';
import anhfacebook from "../../../../asset/img/anhfacebook.png";
import Bodyright from '../../../../sass/main.scss';
class bodyleft extends Component{
    render() {
        return(
            <div className="bodyright">
                <label className="bodyright__label">Facebook giúp bạn kết nối và chia sẻ với mọi <br /><span>
                    người trong cuộc sống của bạn.
                </span>
                </label>
                <img src={anhfacebook}  className="bodyright__image" />
            </div>
        )
    }
}
export default bodyleft;