import React from 'react'
import { FooterStyle } from './Footer.styles';
import omnifood from '../../img/omnifood-logo.png';
import {BsInstagram, BsFacebook, BsTwitter} from 'react-icons/bs'


function Footer() {
  return (
    <FooterStyle>
        <div class="footer">
            <div class="container grid grid--footer">
            <div class="logo-col">
            <a href="#" class="footer-logo">
                <img class="logo" alt="Omnifood logo" src={omnifood} />
            </a>

            <ul class="social-links">
                <li>
                <a class="footer-link" href="#">
                    <BsInstagram class="social-icon"/>
                </a>
                </li>
                <li>
                <a class="footer-link" href="#">
                    <BsFacebook class="social-icon"/>
                </a>
                </li>
                <li>
                <a class="footer-link" href="#">
                    <BsTwitter class="social-icon"/>
                </a>
                </li>
            </ul>

            <p class="copyright">
                Copyright &copy; 2027 by Omnifood, Inc. All rights reserved.
            </p>
            </div>
            <div class="address-col">
            <p class="footer-heading">Contact us</p>
            <address class="contacts">
                <p class="address">
                623 Harrison St., 2nd Floor, San Francisco, CA 94107
                </p>
                <p>
                <a class="footer-link" href="tel:415-201-6370">415-201-6370</a
                ><br />
                <a class="footer-link" href="mailto:hello@omnifood.com"
                    >hello@omnifood.com</a
                >
                </p>
            </address>
            </div>
            <nav class="nav-col">
            <p class="footer-heading">Account</p>
            <ul class="footer-nav">
                <li><a class="footer-link" href="#">Create account</a></li>
                <li><a class="footer-link" href="#">Sign in</a></li>
                <li><a class="footer-link" href="#">iOS app</a></li>
                <li><a class="footer-link" href="#">Android app</a></li>
            </ul>
            </nav>

            <nav class="nav-col">
            <p class="footer-heading">Company</p>
            <ul class="footer-nav">
                <li><a class="footer-link" href="#">About Omnifood</a></li>
                <li><a class="footer-link" href="#">For Business</a></li>
                <li><a class="footer-link" href="#">Cooking partners</a></li>
                <li><a class="footer-link" href="#">Careers</a></li>
            </ul>
            </nav>

            <nav class="nav-col">
            <p class="footer-heading">Resources</p>
            <ul class="footer-nav">
                <li><a class="footer-link" href="#">Recipe directory </a></li>
                <li><a class="footer-link" href="#">Help center</a></li>
                <li><a class="footer-link" href="#">Privacy & terms</a></li>
            </ul>
            </nav>
            </div>
        </div>
    </FooterStyle>
  )
}

export default Footer