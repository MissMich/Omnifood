import React from 'react';
import { NavbarStyle } from './Navbar.styles';
import omnifood from '../../img/omnifood-logo.png'

function Navbar() {
  return (
    <NavbarStyle>
        <div>
            <header class="header">
                <a href="#">
                    <img class="logo" alt="Omnifood logo" src={omnifood} />
                </a>
                <nav class="main-nav">
                    <ul class="main-nav-list">
                        <li><a class="main-nav-link" href="#how">How it works</a></li>
                        <li><a class="main-nav-link" href="#meals">Meals</a></li>
                        <li><a class="main-nav-link" href="#testimonials">Testimonials</a></li>
                        <li><a class="main-nav-link" href="#pricing">Pricing</a></li>
                        <li><a class="main-nav-link nav-cta" href="#try">Try for free</a></li>
                    </ul>
                </nav>
            </header>
        </div>
    </NavbarStyle>
  )
}

export default Navbar