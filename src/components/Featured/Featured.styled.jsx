import styled from 'styled-components';

export const FeaturedStyle = styled.div`
.section-featured {
    padding: 4.8rem 0 3.2rem 0;
  }
  
  .heading-featured-in {
    font-size: 1.4rem;
    text-transform: uppercase;
    letter-spacing: 0.75px;
    font-weight: 500;
    text-align: center;
    margin-bottom: 2.4rem;
    color: #888;
  }
  
  .logos {
    display: flex;
    justify-content: space-around;
  }
  
  .logos img {
    height: 3.2rem;
    filter: brightness(0);
    opacity: 50%;
  }
`