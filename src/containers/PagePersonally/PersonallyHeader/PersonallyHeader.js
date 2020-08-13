import React, {Component} from 'react';
import HeaderPersonally from '../../NewsSites/header/header';
import classes from '../../../'
class PersonallyHeader extends Component{
    render() {
        return (
            <div className="HeaderPersonally">
                <HeaderPersonally />
                <div className="HeaderAvatar">

                </div>
            </div>
        );
    }
}
export default PersonallyHeader;