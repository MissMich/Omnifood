import React from 'react'
import { TestimonialStyle } from './Testimonials.styles';
import dave from '../../img/customers/dave.jpg';
import ben from '../../img/customers/ben.jpg';
import steve from '../../img/customers/steve.jpg';
import hannah from '../../img/customers/hannah.jpg';

function Testimonials() {
  return (
    <TestimonialStyle>
        <div>
            <section class="section-testimonials">
                <div class="testimonials-container">
                <span class="subheading" id="testimonials">Testimonials</span>
                <h2 class="heading-secondary">Once you try it, you can't go back</h2>

                <div class="testimonials">
                    <figure class="testimonial">
                    <img
                        class="testimonial-img"
                        alt="Photo of customer Dave Bryson"
                        src={dave}
                    />
                    <blockquote class="testimonial-text">
                        Inexpensive, healthy and great-tasting meals, without even
                        having to order manually! It feels truly magical.
                    </blockquote>
                    <p class="testimonial-name">&mdash; Dave Bryson</p>
                    </figure>

                    <figure class="testimonial">
                    <img
                        class="testimonial-img"
                        alt="Photo of customer Ben Hadley"
                        src={ben}
                    />
                    <blockquote class="testimonial-text">
                        The AI algorithm is crazy good, it chooses the right meals for
                        me every time. It's amazing not to worry about food anymore!
                    </blockquote>
                    <p class="testimonial-name">&mdash; Ben Hadley</p>
                    </figure>

                    <figure class="testimonial">
                    <img
                        class="testimonial-img"
                        alt="Photo of customer Steve Miller"
                        src={steve}
                    />
                    <blockquote class="testimonial-text">
                        Omnifood is a life saver! I just started a company, so there's
                        no time for cooking. I couldn't live without my daily meals now!
                    </blockquote>
                    <p class="testimonial-name">&mdash; Steve Miller</p>
                    </figure>

                    <figure class="testimonial">
                    <img
                        class="testimonial-img"
                        alt="Photo of customer Hannah Smith"
                        src={hannah}
                    />
                    <blockquote class="testimonial-text">
                        I got Omnifood for the whole family, and it frees up so much
                        time! Plus, everything is organic and vegan and without plastic.
                    </blockquote>
                    <p class="testimonial-name">&mdash; Hannah Smith</p>
                    </figure>
                </div>
                </div>
            </section>
        </div>
    </TestimonialStyle>
  )
}

export default Testimonials