import React, {Component} from 'react';


const asyncComponent = (importComponent) => {
    return class extends Component {
        state = {
            component: null
        }
        componentDidMount() {
            importComponent()
                .then(cmp => {
                this.setState({component: cmp.default})
            })
        }
        render() {

            const c = this.props.component;

            return c ? <c {...this.props} /> : null;
        }
    }
}
export default asyncComponent;