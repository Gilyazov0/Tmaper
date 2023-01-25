import React from "react";
import "./Home.css";
import Card from "react-bootstrap/Card";

export default function Home() {
  return (
    <div className="homeColor">
      <h1>T-Mapper</h1>
      <div class="container">
        <div class="row">
          <div class="col">
            <Card className="bg-dark item">
              <Card.Img src="./images/connectionImage.jpg" alt="Card image" />
            </Card>
          </div>
          <br /> <br />
          <div class="col">
            <div>
              Welcome to our website! We specialize in conducting surveys of
              employees' personal information and using the data to create a
              formal structure network. By analyzing the traits and positions of
              each employee, we are able to map out the relationships and
              connections within your organization. We also understand the
              different personality types within the organization, which allows
              us to have a better understanding of communication styles. This
              information is extremely valuable for businesses looking to
              optimize their team dynamics, improve overall performance and have
              an effective communication within the organization. Take advantage
              of our expertise and let us help you unlock the full potential of
              your workforce. Start your survey today and see the results for
              yourself.
            </div>
          </div>
          <div class="col">Column</div>
        </div>
      </div>
      <div>
        <br></br>
        <h1 className="text-justify">Contact</h1>
        <br></br>
      </div>
    </div>
  );
}
