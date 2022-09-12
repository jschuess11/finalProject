import React from "react";
import "../styles/food.css";
import findlaymarket from "../assets/findlaymarket.jpeg";
import catchfire from "../assets/catchfire.png"
import CampWashington from "../assets/CampWashington.jpg"
import Skyline from "../assets/Skyline.png"
import Graeters from "../assets/Graeters.svg.png"
import Precinct from "../assets/Precinct.jpg"

export const Food = () => {
  return (
    <div>
      <div className="home">
        <div className="food-banner">
          <div className="foodContainer">
            <h1>Food</h1>
          </div>
        </div>
        <div className="foodHeader">
          <h1>Check out some of the local food in Cincinnati!</h1>
        </div>

        <div className="foodCards">
          <div className="container-card">
            <h5 className="card-title">Findlay Market</h5>
            <img src={findlaymarket} className="card-img-top" alt="Findlay Market" />
          </div>
          <div className="card-body">
            <p className="card-text">Findlay Market is Ohio's oldest continuously operated public market and one of Cincinnati's most cherished institutions, welcoming more than one million visitors each year.  Located just blocks from downtown in Over-the-Rhine, a dense historic neighborhood rich in 19th century architecture, Findlay Market remains the bustling center of farm fresh, locally sourced, artisanal and specialty foods. Open Tuesday through Sunday year round, Findlay Market is home to more than 50 full-time merchants selling meat, fish, poultry, produce, flowers, cheese, deli, ethnic foods and more.</p>
          </div>
          <div class="card-body">
            <a
              href="https://www.findlaymarket.org/"
              target="_blank"
              rel="noreferrer"
              class="card-link"
            >
              Website
            </a>
          </div>
        </div>
        <div className="foodCards">
          <div className="container-card">
            <h5 className="card-title">Catch-a-Fire Pizza</h5>
            <img src={catchfire} className="card-img-top" alt="Pizza place" />
          </div>
          <div className="card-body">
            <p className="card-text">
              Catch-a-Fire Pizza started as a food truck, set up shop inside
              Oakley’s MadTree Brewing, and eventually turned into a standalone
              brick-and-mortar pizzeria in the Cincinnati suburb of Blue Ash in
              2020.
            </p>
          </div>
          <div class="card-body">
            <a
              href="https://www.catchafirepizza.com"
              target="_blank"
              rel="noreferrer"
              class="card-link"
            >
              Website
            </a>
          </div>
        </div>
        <div className="foodCards">
          <div className="container-card">
            <h5 className="card-title">Camp Washington Chili</h5>
            <img src={CampWashington} className="card-img-top" alt="Chili restaurant" />
          </div>
          <div className="card-body">
            <p className="card-text">
            Since 1940, Camp Washington Chili has been proudly serving ”chili-heads” from Cincinnati and all over the world from the corner of Hopple and Colerain Streets, in the heart of Cincinnati’s Camp Washington neighborhood.
            </p>
          </div>
          <div class="card-body">
            <a
              href="https://campwashingtonchili.com"
              target="_blank"
              rel="noreferrer"
              class="card-link"
            >
              Website
            </a>
          </div>
        </div>
        <div className="foodCards">
          <div className="container-card">
            <h5 className="card-title">
              Skyline Chili - also checkout Goldstar Chili!
            </h5>
            <img src={Skyline} className="card-img-top" alt="Cincinnati chili chain restaurant logo" />
          </div>
          <div className="card-body">
            <p className="card-text">Skyline Chili is a chain of Cincinnati-style chili restaurants based in Cincinnati, Ohio. Founded in 1949 by Greek immigrant Nicholas Lambrinides, Skyline Chili is named for the view of Cincinnati's skyline that Lambrinides could see from his first restaurant, opened in the section of town now known as Price Hill.</p>
          </div>
          <div class="card-body">
            <a
              href="https://www.skylinechili.com"
              target="_blank"
              rel="noreferrer"
              class="card-link"
            >
              Website
            </a>
          </div>
        </div>
        <div className="foodCards">
          <div className="container-card">
            <h5 className="card-title">Graeter's Ice Cream</h5>
            <img src={Graeters} className="card-img-top" alt="Local cincinnati ice cream company logo" />
          </div>
          <div className="card-body">
            <p className="card-text">Graeter's is a regional ice cream chain based in Cincinnati, Ohio. Founded in 1870 by Louis C. Graeter, the company has since expanded to 50 retail locations selling ice cream, candy and baked goods in the Midwestern United States.</p>
          </div>
          <div class="card-body">
            <a
              href="https://www.graeters.com"
              target="_blank"
              rel="noreferrer"
              class="card-link"
            >
              Website
            </a>
          </div>
        </div>
        <div className="foodCards">
          <div className="container-card">
            <h5 className="card-title">Jeff Ruby's Precinct</h5>
            <img src={Precinct} className="card-img-top" alt="Jeff Ruby's Precinct restaurant" />
          </div>
          <div className="card-body">
            <p className="card-text">
            Stylish, upscale steakhouse offering handcrafted steaks & seafood fare, plus cocktails, wine & beer. Recently named one of America's Top 10 Steakhouses by USA Today and Gayot.com, The Precinct is frequently recognized as having Cincinnati’s best steaks, seafood and service. 
            </p>
          </div>
          <div class="card-body">
            <a
              href="https://www.jeffruby.com/precinct"
              target="_blank"
              rel="noreferrer"
              class="card-link"
            >
              Website
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Food;
