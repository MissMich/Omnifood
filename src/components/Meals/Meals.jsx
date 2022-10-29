import React from 'react'
import { MealStyle } from './Meals.styles';
import meal1 from '../../img/meals/meal-1.jpg'
import meal2 from '../../img/meals/meal-2.jpg'
import {AiOutlineCheck} from 'react-icons/ai'
import {VscFlame} from 'react-icons/vsc'
import {MdRestaurant} from 'react-icons/md'
import {BsStar} from 'react-icons/bs'

function Meals() {
  return (
    <MealStyle>
        <div>
            <section class="section-meals">
                <div class="container center-text">
                <span class="subheading" id="meals">Meals</span>
                <h2 class="heading-secondary">
                    Omnifood AI chooses from 5,000+ recipes
                </h2>
                </div>

                <div class="container grid grid--3-cols margin-bottom-md">
                <div class="meal">
                    <img
                    src={meal1}
                    class="meal-img"
                    alt="Japanese Gyozas"
                    />
                    <div class="meal-content">
                    <div class="meal-tags">
                        <span class="tag tag--vegetarian">Vegetarian</span>
                    </div>
                    <p class="meal-title">Japanese Gyozas</p>
                    <ul class="meal-attributes">
                        <li class="meal-attribute">
                        <VscFlame class="meal-icon"/>
                        <span><strong>650</strong> calories</span>
                        </li>
                        <li class="meal-attribute">
                        <MdRestaurant class="meal-icon"/>
                        <span>NutriScore &reg; <strong>74</strong></span>
                        </li>
                        <li class="meal-attribute">
                        <BsStar class="meal-icon"/>
                        <span><strong>4.9</strong> rating (537)</span>
                        </li>
                    </ul>
                    </div>
                </div>

                <div class="meal">
                    <img
                    src={meal2}
                    class="meal-img"
                    alt="Avocado Salad"
                    />
                    <div class="meal-content">
                    <div class="meal-tags">
                        <span class="tag tag--vegan">Vegan</span>
                        <span class="tag tag--paleo">Paleo</span>
                    </div>
                    <p class="meal-title">Avocado Salad</p>
                    <ul class="meal-attributes">
                        <li class="meal-attribute">
                        <VscFlame class="meal-icon"/>
                        <span><strong>400</strong> calories</span>
                        </li>
                        <li class="meal-attribute">
                        <MdRestaurant class="meal-icon"/>
                        <span>NutriScore &reg; <strong>92</strong></span>
                        </li>
                        <li class="meal-attribute">
                        <BsStar class="meal-icon"/>
                        <span><strong>4.8</strong> rating (441)</span>
                        </li>
                    </ul>
                    </div>
                </div>

                <div class="diets">
                    <h3 class="heading-tertiary">Works with any diet:</h3>
                    <ul class="list">
                    <li class="list-item">
                        <AiOutlineCheck class="list-icon"/>
                        <span>Vegetarian</span>
                    </li>
                    <li class="list-item">
                        <AiOutlineCheck class="list-icon"/>
                        <span>Vegan</span>
                    </li>
                    <li class="list-item">
                        <AiOutlineCheck class="list-icon"/>
                        <span>Pescatarian</span>
                    </li>
                    <li class="list-item">
                        <AiOutlineCheck class="list-icon"/>
                        <span>Gluten-free</span>
                    </li>
                    <li class="list-item">
                        <AiOutlineCheck class="list-icon"/>
                        <span>Lactose-free</span>
                    </li>
                    <li class="list-item">
                        <AiOutlineCheck class="list-icon"/>
                        <span>Keto</span>
                    </li>
                    <li class="list-item">
                        <AiOutlineCheck class="list-icon"/>
                        <span>Paleo</span>
                    </li>
                    <li class="list-item">
                        <AiOutlineCheck class="list-icon"/>
                        <span>Low FODMAP</span>
                    </li>
                    <li class="list-item">
                        <AiOutlineCheck class="list-icon"/>
                        <span>Kid-friendly</span>
                    </li>
                    </ul>
                </div>
                </div>

                <div class="container all-recipes">
                <a href="#" class="link">See all recipes &rarr;</a>
                </div>
            </section>
        </div>
    </MealStyle>
  )
}

export default Meals