import React, { Component } from "react";
import axios from "axios";
import "../styles/contact.css";
import cinCinCity from "../assets/cinCinCity.jpg";

export default class contact extends Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeQuestion = this.onChangeQuestion.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      name: " ",
      email: " ",
      comment: " ",
    };
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value,
    });
  }
  onChangeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }
  onChangeQuestion(e) {
    this.setState({
      comment: e.target.value,
    });
  }
  onSubmit(e) {
    e.preventDefault();
    const contact = {
      name: this.state.name,
      email: this.state.email,
      comment: this.state.comment,
    };
    console.log(contact);
    axios.post("/contact/add", contact).then((res) => console.log(res.data));
    // window.location="/"
    this.props.history.push("/");

    this.setState({
      name: "",
      email: "",
      comment: "",
    });
    window.alert("Your message has been recieved, Thank you!");
    console.log(contact);
  }
  render() {
    return (
      <div className="contactPage">
        <div className="jumbotron jumbotron-fluid contacthover">
          <div className="contactcontainer">
            <h1>Contact Us</h1>
          </div>
        </div>
        <div className="containerContact">
          <img
            src={cinCinCity}
            className="contactImg"
            alt="picture of Cincinnati"
          />
          <div className="contentContact">
            <form className="contact-form" onSubmit={this.onSubmit}>
              <div className="form-group">
                <label className="contact-label">Name: </label>
                <input
                  type="text"
                  required
                  className="form-control"
                  value={this.state.name}
                  onChange={this.onChangeName}
                ></input>
              </div>
              <div className="form-group">
                <label className="contact-label">Email:</label>
                <input
                  type="email"
                  required
                  className="form-control"
                  value={this.state.email}
                  onChange={this.onChangeEmail}
                ></input>
              </div>
              <div className="form-group">
                <label className="contact-label">Questions and Comments:</label>
                <textarea
                  type="text"
                  className="form-control"
                  value={this.state.comment}
                  onChange={this.onChangeQuestion}
                  rows="6"
                ></textarea>
              </div>
              <div className="form-group">
                <input type="submit" value="Send" className="btn btn-contact" />
              </div>
            </form>
          </div>
          <div className="content"></div>
        </div>
        <div className="centered">
          <h3 className="message">How can we help?</h3>
          <p className="paragraph">
            Didn't see your favorite spot? Found a place we missed or think
            should be added? Went on a wild tour that we didn't mention? Fill
            out the comment form above and we will get back with you!{" "}
          </p>
        </div>
      </div>
    );
  }
}
