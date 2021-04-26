import { Component } from "react";
import './FormButton.scss';

class FormButton extends Component {
    render() {
        return (
            <button className="formButton">
                <i className="fa fa-arrow-right"></i>
            </button>
        )
    };
}

export default FormButton;