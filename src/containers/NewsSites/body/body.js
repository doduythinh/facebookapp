import React, {Component} from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import Body_left_one from "./body_left_one/body_left_one";
import Body_left_two from "./body_left_two/body_left_two";
import Body_right_two from "./body_right_two/body_right_two";
import Body_right_one from "./body_right_one/body_right_one";
class body extends Component{
    render() {
        return(
            <div className="all">
                <Header />
                <Body_left_one />
                <Body_left_two />
                <Body_right_one />
                <Body_right_two />
                <Footer/>
            </div>
        )
    }
}
export default body;