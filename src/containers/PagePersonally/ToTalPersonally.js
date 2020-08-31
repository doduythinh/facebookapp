import React, {Component} from 'react';
import BodyrightTwo from '../NewsSites/body/body_right_two/body_right_two';
import HeaderPersonally from '../PagePersonally/PersonallyHeader/PersonallyHeader';
import PersonallyLeft from '../PagePersonally/PersonallyLeft/PersonallyLeft';
import PersonallyRight from "../PagePersonally/PersonallyRight/PersonallyRight";

class ToTalPersonally extends Component {
    render() {
        return(
            <div className="all1">
                <HeaderPersonally />
                <PersonallyLeft />
                <PersonallyRight />
                {/*<BodyrightTwo  className="BodyrightTwo" />*/}
            </div>
        )
    }
}
export default ToTalPersonally;