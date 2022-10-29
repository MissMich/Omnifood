import styled from "styled-components";

export const MealStyle = styled.div`
.section-meals {
    padding: 9.6rem 0;
  }
  
  .meal {
    box-shadow: 0 2.4rem 4.8rem rgba(0, 0, 0, 0.075);
    border-radius: 11px;
    overflow: hidden;
    transition: all 0.4s;
  }
  
  .meal:hover {
    transform: translateY(-1.2rem);
    box-shadow: 0 3.2rem 6.4rem rgba(0, 0, 0, 0.06);
  }
  
  .meal-content {
    padding: 3.2rem 4.8rem 4.8rem 4.8rem;
  }
  
  .meal-tags {
    margin-bottom: 1.2rem;
    display: flex;
    gap: 0.4rem;
  }
  
  .tag {
    display: inline-block;
    padding: 0.4rem 0.8rem;
    font-size: 1.2rem;
    text-transform: uppercase;
    color: #333;
    border-radius: 100px;
    font-weight: 600;
  }
  
  .tag--vegetarian {
    background-color: #51cf66;
  }
  .tag--vegan {
    background-color: #94d82d;
  }
  .tag--paleo {
    background-color: #ffd43b;
  }
  
  .meal-title {
    font-size: 2.4rem;
    color: #333;
    font-weight: 600;
    margin-bottom: 3.2rem;
  }
  
  .meal-attributes {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
  
  .meal-attribute {
    font-size: 1.8rem;
    display: flex;
    align-items: center;
    gap: 1.6rem;
  }
  
  .meal-icon {
    height: 2.4rem;
    width: 2.4rem;
    color: #e67e22;
  }
  
  .meal-img {
    width: 100%;
  }
  
  .all-recipes {
    text-align: center;
    font-size: 1.8rem;
  }
`