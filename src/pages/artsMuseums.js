import React from "react";
import freedomCenterPic from '../assets/freedomCenterPic.jpg'
import cinArtPic from '../assets/cinArtPic.jpg'
import cinFirePic from '../assets/cinFirePic.jpg'
import mnhsPic from '../assets/mnhsPic.jpg'
import aronoffCenterPic from '../assets/aronoffCenterPic.jpg'

import '../styles/artsMuseums.css';

export const Arts = () => {
    return (
        <div>
            <div className="home">
                <div className="arts-banner">
                    <div className="aboutContainer">
                        <h1>Arts and Musuems</h1>
                    </div>
                </div>
            <div className="artsHeader">
                <h1>Drop by our Art and Museum exhibits!</h1>
            </div>

            <div className="artsCards">
                <div className="container-card">
                    <h5 className="card-title">National Underground Railroad Freedom Center</h5>
                    <img src={freedomCenterPic} className="card-img-top" alt="Freedom Center" />
                </div>
                <div className="card-body">
                    <p className="card-text">The National Underground Railroad Freedom Center stands as a monument to freedom bringing to life the importance - and relevance - of struggles for freedom around the world, throughout history and today. The structure, specifically situated for the location's historical significance, is made up of three buildings that symbolize the cornerstones of freedom - courage, cooperation and perseverance, and the Freedom Center's curving architecture reflects the winding river and the often-changing path to freedom. Through its exhibits and programming, the Freedom Center offers an educational and inspiring experience for children and adults alike.</p>
                </div>
                    <div class="card-body">
                    <a href="https://freedomcenter.org/" target="_blank" rel="noreferrer" class="card-link">Website</a>
                    </div>
            </div>

            <div className="artsCards">
                <div className="container-card">
                    <h5 className="card-title">Cincinnati Art Museum</h5>
                    <img src={cinArtPic} className="card-img-top" alt="Cincinnati Art Museum" />
                </div>
                <div className="card-body">
                    <p className="card-text">The Cincinnati Art Museum is an art museum in the Eden Park neighborhood of Cincinnati, Ohio. Founded in 1881, it was the first purpose-built art museum west of the Alleghenies, and is one of the oldest in the United States. Its collection of over 67,000 works spanning 6,000 years of human history make it one of the most comprehensive collections in the Midwest. The museum features paintings by Picasso, Botticelli, Rubens, Renoir, Monet, and van der Neer with a permanent Cincinnati Wing. Admission to the Cincinnati Art Museum is always free with free parking.</p>
                </div>
                    <div class="card-body">
                    <a href="https://www.cincinnatiartmuseum.org/" target="_blank" rel="noreferrer" class="card-link">Website</a>
                    </div>
            </div>

            <div className="artsCards">
                <div className="container-card">
                    <h5 className="card-title">Cincinnati Fire Museum</h5>
                    <img src={cinFirePic} className="card-img-top" alt="Cincinnati Fire Museum" />
                </div>
                <div className="card-body">
                    <p className="card-text">Did you know the Cincinnati Fire Department was America’s first professional, paid fire department? At the Cincinnati Fire Museum, you can learn about Cincinnati’s firefighting history with in-depth exhibits and artifacts going back 200 years. The museum is one of the best things to do in Cincinnati with kids thanks to its popular Safe House exhibit: a world-class fire safety program that teaches families how to prevent and escape fires in a real-world scenario. The museum even hosts birthday parties for kids!</p>
                </div>
                    <div class="card-body">
                    <a href="https://www.cincyfiremuseum.com/" target="_blank" rel="noreferrer" class="card-link">Website</a>
                    </div>
            </div>

            <div className="artsCards">
                <div className="container-card">
                    <h5 className="card-title">Museum of Natural History & Science</h5>
                    <img src={mnhsPic} className="card-img-top" alt="Museum of Natural History & Science" />
                </div>
                <div className="card-body">
                    <p className="card-text">The Museum of Natural History & Science has an amazing history going back to 1818 when scientist and physician Daniel Drake, who founded Cincinnati’s first medical school, created the Western Museum and hired John James Audobon as the first employee. The Western Academy of Natural Sciences was formed 17 years later and eventually became the Cincinnati Society of Natural History, today the Museum of Natural History & Science. Located in Union Terminal at the Cincinnati Museum Center, the history and science museum features a 7,000-square-foot Dinosaur Hall with six large specimens from the Jurassic to Cretaceous Periods. The museum is also home to an interactive STEM experience in the Science Interactives Gallery.</p>
                </div>
                    <div class="card-body">
                    <a href="https://www.cincymuseum.org/sciencemuseum/" target="_blank" rel="noreferrer" class="card-link">Website</a>
                    </div>
            </div>

            <div className="artsCards">
                <div className="container-card">
                    <h5 className="card-title">Aronoff Center for the Arts</h5>
                    <img src={aronoffCenterPic} className="card-img-top" alt="Aronoff Center" />
                </div>
                <div className="card-body">
                    <p className="card-text">Designed by internationally renowned architect Cesar Pelli, the dramatic glass, stainless steel, and brick facades are a vibrant modern counterpoint to its surrounding buildings. Fronting three streets in the heart of downtown (Walnut, Seventh, and Main), the Aronoff Center is just a block away from Fountain Square and many of the City’s finest restaurants and hotels. The Aronoff is best known as the home of Fifth Third Bank Broadway in Cincinnati, presented by TriHealth, which presents the very best Broadway tours each season in the state-of-the-art Procter & Gamble Hall, from Disney's The Lion King and Hamilton to Wicked and Les Miserables.</p>
                </div>
                    <div class="card-body">
                    <a href="https://www.cincinnatiarts.org/aronoff-center-home" target="_blank" rel="noreferrer" class="card-link">Website</a>
                    </div>
            </div>

     
        </div>
        </div>
    )
}

export default Arts