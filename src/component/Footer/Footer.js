import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <div className="row footerSection">
            <div className="col-md-6  m-5 footerText">
                <ul className="page-Route">
                    <li>
                        <a href="http://">About Us</a>
                    </li>
                    <li>
                     <a href="http://">Terms of Service</a>
                    </li>
                    <li>
                        <a href="http://">Privacy Policy</a>
                        </li>
                    <li>
                        <a href="http://">Discount</a>
                        </li>
                    <li>
                        <a href="http://">Contact Us</a>
                        </li>
                    <li>
                        <a href="http://">FAQ</a>
                        </li>
                </ul>
                <p>Copyright @2022 Cinemax All rights reserved</p>
            </div>
            <div className="col-md-4 m-5">
                <h4>Workinng</h4>
            </div>


        </div>
        </div>
    );
};

export default Footer;