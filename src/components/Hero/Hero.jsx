import React from 'react'
import '../../App.css'
import { HeroStyle } from './Hero.styles'
import heroImage from '../../img/hero.png'
import customer1 from '../../img/customers/customer-1.jpg'
import customer2 from '../../img/customers/customer-2.jpg'
import customer3 from '../../img/customers/customer-4.jpg'
import customer4 from '../../img/customers/customer-4.jpg'
import customer5 from '../../img/customers/customer-5.jpg'
import customer6 from '../../img/customers/customer-6.jpg'

function Hero() {
  return (
    <HeroStyle>
        <div>
            <section class="section-hero">
                <div class="hero">
                <div class="hero-text-box">
                    <h1 class="heading-primary">
                    A healthy meal delivered to your door, every single day
                    </h1>
                    <p class="hero-description">
                    The smart 365-days-per-year food subscription that will make you
                    eat healthy again. Tailored to your personal tastes and
                    nutritional needs.
                    </p>
                    <a href="#" class="btn btn--full margin-right-sm"
                    >Start eating well</a
                    >
                    <a href="#" class="btn btn--outline">Learn more &darr;</a>
                    <div class="delivered-meals">
                    <div class="delivered-imgs">
                        <img src={customer1} alt="Customer photo" />
                        <img src={customer2} alt="Customer photo" />
                        <img src={customer3} alt="Customer photo" />
                        <img src={customer4} alt="Customer photo" />
                        <img src={customer5} alt="Customer photo" />
                        <img src={customer6} alt="Customer photo" />
                    </div>
                    <p class="delivered-text">
                        <span>250,000+</span> meals delivered last year!
                    </p>
                    </div>
                </div>
                <div class="hero-img-box">
                    <img
                    src={heroImage}
                    class="hero-img"
                    alt="Woman enjoying food, meals in storage container, and food bowls on a table"
                    />
                </div>
                </div>
            </section>
        </div>
    </HeroStyle>
  )
}

export default Hero