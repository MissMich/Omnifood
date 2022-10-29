import React from 'react'
import { PriceStyles } from './Pricing.styles';
import {IoIosInfinite} from 'react-icons/io';
import {CiApple} from 'react-icons/ci';
import {RiLeafLine} from 'react-icons/ri';
import {AiOutlinePause, AiOutlineCheck, AiOutlineClose} from 'react-icons/ai';

function Pricing() {
  return (
    <PriceStyles>
        <div>
            <section class="section-pricing">
                <div class="container">
                <span class="subheading" id="pricing">Pricing</span>
                <h2 class="heading-secondary">
                    Eating well without breaking the bank
                </h2>
                </div>

                <div class="container grid grid--2-cols margin-bottom-md">
                <div class="princing-plan princing-plan--starter">
                    <header class="plan-header">
                    <p class="plan-name">Starter</p>
                    <p class="plan-price"><span>$</span>399</p>
                    <p class="plan-text">per month. That's just $13 per meal!</p>
                    </header>
                    <ul class="list">
                    <li class="list-item">
                        <AiOutlineCheck class="list-icon"/>
                        <span>1 meal per day</span>
                    </li>
                    <li class="list-item">
                        <AiOutlineCheck class="list-icon"/>
                        <span>Order from 11am to 9pm</span>
                    </li>
                    <li class="list-item">
                        <AiOutlineCheck class="list-icon"/>
                        <span>Delivery is free</span>
                    </li>
                    <li class="list-item">
                        <AiOutlineClose class="list-icon"/>
                    </li>
                    </ul>
                    <div class="plan-sing-up">
                    <a href="#" class="btn btn--full">Start eating well</a>
                    </div>
                </div>

                <div class="princing-plan princing-plan--complete">
                    <header class="plan-header">
                    <p class="plan-name">Complete</p>
                    <p class="plan-price"><span>$</span>649</p>
                    <p class="plan-text">per month. That's just $11 per meal!</p>
                    </header>
                    <ul class="list">
                    <li class="list-item">
                        <AiOutlineCheck class="list-icon"/>
                        <span><strong>2 meals</strong> per day</span>
                    </li>
                    <li class="list-item">
                        <AiOutlineCheck class="list-icon"/>
                        <span>Order <strong>24/7</strong></span>
                    </li>
                    <li class="list-item">
                        <AiOutlineCheck class="list-icon"/>
                        <span>Delivery is free</span>
                    </li>
                    <li class="list-item">
                        <AiOutlineCheck class="list-icon"/>
                        <span>Get access to latest recipes</span>
                    </li>
                    </ul>
                    <div class="plan-sing-up">
                    <a href="#" class="btn btn--full">Start eating well</a>
                    </div>
                </div>
                </div>

                <div class="container grid">
                <aside class="plan-details">
                    Prices include all applicable taxes. You can cancel at any time.
                    Both plans include the following:
                </aside>
                </div>

                <div class="container grid grid--4-cols">
                <div class="feature">
                    <IoIosInfinite class="feature-icon"/>
                    <p class="feature-title">Never cook again!</p>
                    <p class="feature-text">
                    Our subscriptions cover 365 days per year, even including major
                    holidays.
                    </p>
                </div>
                <div class="feature">
                    <CiApple class="feature-icon"/>
                    <p class="feature-title">Local and organic</p>
                    <p class="feature-text">
                    Our cooks only use local, fresh, and organic products to prepare
                    your meals.
                    </p>
                </div>
                <div class="feature">
                    <RiLeafLine class="feature-icon"/>
                    <p class="feature-title">No waste</p>
                    <p class="feature-text">
                    All our partners only use reusable containers to package all your
                    meals.
                    </p>
                </div>
                <div class="feature">
                    <AiOutlinePause class="feature-icon"/>
                    <p class="feature-title">Pause anytime</p>
                    <p class="feature-text">
                    Going on vacation? Just pause your subscription, and we refund
                    unused days.
                    </p>
                </div>
                </div>
            </section>
        </div>
    </PriceStyles>
  )
}

export default Pricing