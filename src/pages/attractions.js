import React, { Component } from "react";
import axios from "axios";
import "../styles/attractions.css";

const Attraction = (props) => {
  return (
    <div className="allAttractions">
      <div className="attractionsCard">
        <div className="cardImage">
          <img
            className="attractionImage"
            src={props.attraction.imageURL}
            alt="attraction picture"
          />
        </div>
        <div>
          <div className="text-name">{props.attraction.title}</div>
          <div className="category">
            <p className="link-site">{props.attraction.category}</p>
          </div>
          <div className="location">
            <p className="link-site">{props.attraction.location}</p>
          </div>

          <div className="website">
            <a
              className="link"
              href={props.attraction.website}
              target="_blank"
              rel="noreferrer"
            >
              Website
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default class Attractions extends Component {
  constructor(props) {
    super(props);

    this.state = { attractions: [] };
  }
  componentDidMount() {
    axios
      .get("/attractions")
      .then((response) => {
        this.setState({ attractions: response.data });
        console.log("it might be working if you see this");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  attractionsList() {
    return this.state.attractions.map((currentAttraction) => {
      return (
        <Attraction
          attraction={currentAttraction}
          key={currentAttraction._id}
        />
      );
    });
  }
  render() {
    return (
      <div>
        <div className="row">
          <div className="attractionsContainer">
            <h2 className="attractionsHeader">Cincinnati Attractions</h2>
            <div className="attractionsInnerContainer">
              {this.attractionsList()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
