import React, {Component} from "react";
import {Button, Modal} from "react-bootstrap";

class body_left_two_status_popup extends Component
{
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <Modal
                {...this.props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Modal heading
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div  className="container">
                        To add Form fields for department
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger"  onClick={this.props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}
export default  body_left_two_status_popup;