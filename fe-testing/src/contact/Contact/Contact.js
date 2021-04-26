import React, { Component } from "react";
import ContactForm from './ContactForm/ContactForm';
import Header from '../../Header/Header'
import Footer from '../../Footer/Footer'
import './Contact.scss';

class Contact extends Component{
    render(){
        return(
            <React.Fragment>
                <Header></Header>
                <section>
                    <ContactForm></ContactForm>
                </section>
                <Footer></Footer>
            </React.Fragment>
        )
    }
}

export default Contact;