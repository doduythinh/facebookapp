import React,{ Component }  from 'react';
import Header from "../header/header";
import Footer from "../footer/footer";
import Bodyright from "./bodyright/bodyright";
import Bodyleft from "./bodyleft/bodyleft";
import Body from './body.scss'
class body extends Component{
    state = {
        load:false
    }
    render() {
        return(
            <div>
            <Header />
                <div className="Background__image-SignIn">
                    <Bodyright />
                    <Bodyleft />
                </div>
            <Footer />
            </div>
        )
    }
}
export default body;