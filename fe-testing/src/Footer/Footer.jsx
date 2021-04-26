import { Component } from 'react';
import './Footer.scss';

class Footer extends Component {
    render() {
        return (
            <div className="foot-container">
                <hr></hr>
                <div className="myFooter">
                    <div className="content">
                        <p>&#169; 2019 Technologies Inc. All Rights Reserved
                        <br /> Term of use   |   Local Notices   |   Privacy & Security
                    </p>
                    </div>
                    <div className="social-icon">
                        <a href=" " className="fa fa-facebook"></a>
                        <a href=" " className="fa fa-linkedin"></a>
                        <a href=" " className="fa fa-youtube"></a>
                    </div>
                </div>
            </div>
        )
    }

}

export default Footer;
