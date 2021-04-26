import { Component } from 'react';
import logo from './../../../resource/images/logo.webp';
import './Header.scss';

class Header extends Component {
    render() {
        return(
            <div className="myHeader">
                <img src={logo} id="img-logo"></img>
                <i className="fas fa-bars" id="menu"></i>
            </div>
        )
    }

}

export default Header;
