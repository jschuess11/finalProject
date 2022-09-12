import React from "react";
import '../styles/home.css'
import downtownPic from "../assets/downTownPic.jpg"
import {FaChessQueen} from "react-icons/fa";
import Gallery from "react-photo-gallery-react17";
import { photos } from "./Photos";

const Home = () => {
  return (
    <div class="home container-fluid">
      <img className="homeimg" src={downtownPic} alt="Downtown Cincinnati" />
      <p class="landing-text"><FaChessQueen /> Cincinnati: Queen of the Midwest! <FaChessQueen /></p>
      <p class="paragraph-text">Cincinnati, Ohio was settled in 1788 and sits on the Ohio River in southwest Ohio and faces Kentucky across the river. Cincinnati is home to many interesting foods and a variety of entertainment for all.  There are multiple professional sports teams in Cincinnati and there are multiple universities and colleges. Cincinnati is a great place to visit in the Midwest.</p>
    <Gallery photos={photos} />
    </div>
    

  );
};

export default Home;