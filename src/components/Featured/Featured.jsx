import React from 'react'
import { FeaturedStyle } from './Featured.styled';
import techcrunch from '../../img/logos/techcrunch.png';
import businessInsider from '../../img/logos/business-insider.png';
import newyork from '../../img/logos/the-new-york-times.png';
import forbes from '../../img/logos/forbes.png';
import usa from '../../img/logos/usa-today.png';

function Featured() {
  return (
    <FeaturedStyle>
        <div>
            <section class="section-featured">
                <div class="container">
                <h2 class="heading-featured-in">As featured in</h2>
                <div class="logos">
                    <img src={techcrunch} alt="Techcrunch logo" />
                    <img
                    src={businessInsider}
                    alt="Business Insider logo"
                    />
                    <img
                    src={newyork}
                    alt="The New York Times logo"
                    />
                    <img src={forbes} alt="Forbes logo" />
                    <img src={usa} alt="USA Today logo" />
                </div>
                </div>
            </section>
        </div>
    </FeaturedStyle>
  )
}

export default Featured