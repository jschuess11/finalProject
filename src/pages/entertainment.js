import React from "react";
import kingsIsland from "../assets/kingsIsland.jpg"
import coneyIslandPic from "../assets/coneyIslandPic.jpg"
import cinZooPic from "../assets/cinZooPic.jpg"
import hardRockPic from "../assets/hardRockPic.jpeg"
import linderTennisPic from "../assets/linderTennisPic.jpg"
import madCapPic from "../assets/madCapPic.png"
import krohnConPic from "../assets/krohnConPic.jpg"
import '../styles/entertainment.css';

export const Entertainment = () => {
    return (
        <div>
            <div className="home">
                <div className="entertainment-banner">
                    <div className="aboutContainer">
                        <h1>Entertainment</h1>
                    </div>
                </div>
            <div className="entertainmentHeader">
                <h1>Looking for Fun? Check out these Entertaining Hotspots!</h1>
            </div>

            <div className="entertainmentCards">
                <div className="container-card">
                    <h5 className="card-title">King's Island</h5>
                    <img src={kingsIsland} className="card-img-top" alt="King's Island" />
                </div>
                <div className="card-body">
                    <p className="card-text">Home to more than 100 incredible rides and attractions, Kings Island boasts the perfect combination of world-class thrills and family-friendly fun! Experience some of the wildest roller coasters in the world, including a brand new record breaker in Orion and longstanding legends like The Beast, then explore an award-winning kids' area, enormous accompanying waterpark, and so much more!</p>
                </div>
                    <div class="card-body">
                    <a href="https://www.visitkingsisland.com/" target="_blank" rel="noreferrer" class="card-link">Website</a>
                    </div>
            </div>

            <div className="entertainmentCards">
                <div className="container-card">
                    <h5 className="card-title">Coney Island Park</h5>
                    <img src={coneyIslandPic} className="card-img-top" alt="Coney Island Park" />
                </div>
                <div className="card-body">
                    <p className="card-text">Escape the summer heat with Cincinnati's Coney Island. You can swim in North America’s largest recirculating pool, race down more than ¼ of a mile of water slides, and create mammoth splashes in Cannonball Cove. Looking to really get drenched? You can play with Typhoon Tower’s 70 interactive spray-stations or get soaked by the world’s largest erupting hydro storm as it releases 1,300 gallons of cascading water from a 33-foot tower! On the weekends, if you’re looking for a change of pace, you can play a round of mini golf or enjoy tranquil Lake Como on a Storybook Paddleboat on Lake Como.</p>
                </div>
                    <div class="card-body">
                    <a href="https://coneyislandpark.com/" target="_blank" rel="noreferrer" class="card-link">Website</a>
                    </div>
            </div>

            <div className="entertainmentCards">
                <div className="container-card">
                    <h5 className="card-title">Linder Tennis Center</h5>
                    <img src={linderTennisPic} className="card-img-top" alt="Linder Tennis Center" />
                </div>
                <div className="card-body">
                    <p className="card-text">The Lindner Family Tennis Center at Lunken Playfield (LTC), a Cincinnati Recreation Commission facility, provides many tennis activities to match your needs, interest and skill level. Recognized by Cincinnati Magazine in their “Best Of The City” December 2015 publication and by the USTA as the 2003 National Public Facility of the Year. LTC, a 16 court facility with 8 hard courts and 8 Har-Tru clay courts, is home to a city wide web based adult ladder league with four skill levels, 12 USTA Adult and Junior Tournaments including The Cincinnati Adult Championship (The Met), weekly social events, Junior Fun Camps and instruction led by USPTA Professionals and many other enriching tennis activities for the entire family. The LTC is the only public facility in the greater Cincinnati metro-plex that offers Har-Tru clay court play.</p>
                </div>
                    <div class="card-body">
                    <a href="https://lindner.tenniscores.com/" target="_blank" rel="noreferrer" class="card-link">Website</a>
                    </div>
            </div>

            <div className="entertainmentCards">
                <div className="container-card">
                    <h5 className="card-title">Cincinnati Zoo</h5>
                    <img src={cinZooPic} className="card-img-top" alt="Cincinnati Zoo" />
                </div>
                <div className="card-body">
                    <p className="card-text">Have a love for animals and nature? Stop by the Cincinnati Zoo! The Cincinnati Zoo & Botanical Garden is the sixth oldest zoo in the United States, founded in 1873 and officially opening in 1875. It is located in the Avondale neighborhood of Cincinnati, Ohio. It originally began with 64.5 acres (26.1 ha) in the middle of the city, but has spread into the neighboring blocks and several reserves in Cincinnati's outer suburbs. It was appointed as a National Historic Landmark in 1987. In 2019, the Cincinnati Zoo was rated as one of the best zoos in North America. Come drop in and see why.</p>
                </div>
                    <div class="card-body">
                    <a href="https://cincinnatizoo.org/" target="_blank" rel="noreferrer" class="card-link">Website</a>
                    </div>
            </div>

            <div className="entertainmentCards">
                <div className="container-card">
                    <h5 className="card-title">Hard Rock Casino</h5>
                    <img src={hardRockPic} className="card-img-top" alt="Hard Rock Casino" />
                </div>
                <div className="card-body">
                    <p className="card-text">Gaming, Dining, Live Shows, and Events all in one stop! The Hard Rock Casino is open 24/7 for ages 21+ and offers a wide variety of games. With over 1600 slots and 100+ table games, the Hard Rock is consistantly voted the top Casino in town. They also feature live poker action with promotions and tournaments, a smoking patio where guests can continue their gaming, as well as an electronic table games area where you can enjoy your own personal gaming terminal with access to USB charging ports and large-screen TVs to follow all of the betting action. <span className="info">Please game responsibly.</span> </p>
                </div>
                    <div class="card-body">
                    <a href="https://www.hardrockcasinocincinnati.com/casino" target="_blank" rel="noreferrer" class="card-link">Website</a>
                    </div>
            </div>

            <div className="entertainmentCards">
                <div className="container-card">
                    <h5 className="card-title">Madcap Puppets</h5>
                    <img src={madCapPic} className="card-img-top" alt="Madcap Puppets" />
                </div>
                <div className="card-body">
                    <p className="card-text">Based in Cincinnati, Ohio, Madcap is nationally recognized for engaging and original children’s theatre productions, as well as in-school educational programs that include performances, workshops and residencies. Madcap explores a changing landscape of artistic forms and social concerns, combining puppetry, music, acting, and the fine arts to engage diverse audiences with images that challenge and delight, educate and celebrate. Guests can explore the Madcap Education Center where they will find numerous activities for the whole family to include workshop events and live shows within their 133 seat theatre. Virtual Options are also available on their website.</p>
                </div>
                    <div class="card-body">
                    <a href="https://madcappuppets.com/" target="_blank" rel="noreferrer" class="card-link">Website</a>
                    </div>
            </div>

            <div className="entertainmentCards">
                <div className="container-card">
                    <h5 className="card-title">Krohn Conservatory</h5>
                    <img src={krohnConPic} className="card-img-top" alt="Krohn Conservatory" />
                </div>
                <div className="card-body">
                    <p className="card-text">Built in 1933 at the height of the Art Deco era, Krohn Conservatory showcases more than 3,500 plant species from around the world. The conservatory changes throughout the year with special exhibits and programs, including the ever-popular Butterfly Show where thousands of butterflies are free to fly throughout the Krohn Conservatory showroom in a specially-themed garden. Permanent exhibits include the rainforest waterfall and exotic plants in the Palm, Tropical, Desert and Orchid houses as well.</p>
                </div>
                    <div class="card-body">
                    <a href="https://www.cincinnati-oh.gov/cincyparks/visit-a-park/find-a-parkfacility/krohn-conservatory/" target="_blank" rel="noreferrer" class="card-link">Website</a>
                    </div>
            </div>
        </div>
        </div>
    )
}

export default Entertainment