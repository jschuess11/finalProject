import React from "react";
import '../styles/brewsBars.css';
import rhinegeistPic from "../assets/rhinegeistPic.jpg";
import madTreePic from "../assets/madTreePic.jpeg";
import ghostBabyPic from "../assets/ghostBabyPic.jpg";
import wiseguyPic from "../assets/wiseguyPic.jpg";
import braxtonBrewPic from "../assets/braxtonBrewPic.jpeg";

export const Brewsbars = () => {
    return (
        <div>
            <div className="home">
                <div className="brew-banner">
                    <div className="aboutContainer">
                        <h1>Breweries and Bars</h1>
                    </div>
                </div>
            <div className="brewHeader">
                <h1>Check out some of the top Breweries and Bars in Cincinnati!</h1>
            </div>

            <div className="brewCards">
                <div className="container-card">
                    <h5 className="card-title">Rhinegeist</h5>
                    <img src={rhinegeistPic} className="card-img-top" alt="Rhinegeist Brewery" />
                </div>
                <div className="card-body">
                    <p className="card-text">This large brewery and event space in historic Over-the-Rhine (housed in an old Moerlein bottling plant) produces hoppy and sessionable ales and Cidergeist, its line of crushable ciders. The seasonal deck is an excellent addition to the city’s rooftop bar scene. The first half of Rhinegeist’s name hails from its location in Cincinnati. The second half, “Geist,” is a German word that translates to “ghost” and a nod to the city’s German heritage.</p>
                </div>
                    <div class="card-body">
                    <a href="https://rhinegeist.com/" target="_blank" rel="noreferrer" class="card-link">Website</a>
                    </div>
            </div>

            <div className="brewCards">
                <div className="container-card">
                    <h5 className="card-title">Mad Tree</h5>
                    <img src={madTreePic} className="card-img-top" alt="Mad Tree Brewery" />
                </div>
                <div className="card-body">
                    <p className="card-text">At MadTree Brewing, you can support the environment one beer at a time. This brewery is dedicated to more than providing local, craveable beer: MadTree donates 1% of its proceeds to nonprofits that strive toward environmental sustainability. Founded in 2013, MadTree’s main attraction is the big-ass beer garden, with 32 MadTree-exclusive taps, ambient lighting and an industrial brick facade leftover from the building’s factory days. There’s more than enough space to accommodate all the beer-drinking, cornhole-playing, dog-loving humans that hang at the brewery on the regular.</p>
                </div>
                    <div class="card-body">
                    <a href="https://www.madtreebrewing.com/" target="_blank" rel="noreferrer" class="card-link">Website</a>
                    </div>
            </div>

            <div className="brewCards">
                <div className="container-card">
                    <h5 className="card-title">Ghost Baby</h5>
                    <img src={ghostBabyPic} className="card-img-top" alt="Ghost Baby" />
                </div>
                <div className="card-body">
                    <p className="card-text">Check out this subterranean nightclub/music venue beneath the streets of Over-the-Rhine. The venue holds 160 guests and is located several stories below Vine Street in a 170-year-old lagering tunnel formerly used by Champion Brewing (beer was aged and cooled in lagering tunnels before the advent of refrigeration). The historic, dimly-lit space, which has been vacant since the 1850s, features soaring ceilings with stone archways and decor that is adorned with "crushed velvet and unpredictability," according to a release. Guests can expect an immersive experience with art, design, cocktails and live music.</p>
                </div>
                    <div class="card-body">
                    <a href="https://www.ghost-baby.com/" target="_blank" rel="noreferrer" class="card-link">Website</a>
                    </div>
            </div>

            <div className="brewCards">
                <div className="container-card">
                    <h5 className="card-title">Wiseguy Lounge</h5>
                    <img src={wiseguyPic} className="card-img-top" alt="Wiseguy Lounge" />
                </div>
                <div className="card-body">
                    <p className="card-text">While inspired by Prohibition and its associated speakeasies, this lounge nestled above Pleasant Ridge's Goodfellas Pizzeria doesn’t require a secret password. Instead, just walk up the stairs and order one of the more than 250 bourbons, hand-crafted cocktails or wide variety of beers from your knowledgeable bartender. Don't forget to grab a slice from downstairs on your way out. This is the third Greater Cincinnati location for the pizza/bourbon bar combo.</p>
                </div>
                    <div class="card-body">
                    <a href="https://www.goodfellaspizzeria.com/wiseguy-lounge/" target="_blank" rel="noreferrer" class="card-link">Website</a>
                    </div>
            </div>

            <div className="brewCards">
                <div className="container-card">
                    <h5 className="card-title">Braxton Brewing Company</h5>
                    <img src={braxtonBrewPic} className="card-img-top" alt="Braxton Brewery" />
                </div>
                <div className="card-body">
                    <p className="card-text">Rooted in the ethos and innovation forged in a Midwestern garage, founder Evan Rouse started homebrewing when he was just 16 — before he could even taste his creations. Now, with locations in Covington, Over-the-Rhine, Ft. Mitchell and Newport, Braxton Brewing Co. has puts its stamp on the Cincinnati area. The flagship Covington taproom, boasting a 5,000-square-foot rooftop patio, serves 30 plus Braxton creations and house brand VIVE hard seltzers.</p>
                </div>
                    <div class="card-body">
                    <a href="https://braxtonbrewing.com/" target="_blank" rel="noreferrer" class="card-link">Website</a>
                    </div>
            </div>
        </div>
        </div>
    )
}

export default Brewsbars
