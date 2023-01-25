import React from "react";
import "../style/home.css";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import logo from "../media/connectionImage.jpg";

const HomePage = () => {
  return (
    <div>
      <div className="d-flex justify-content-center">
        <img src={logo} alt="" />
      </div>
      <div>
        Welcome to our website! We specialize in conducting surveys of
        employees' personal information and using the data to create a formal
        structure network. By analyzing the traits and positions of each
        employee, we are able to map out the relationships and connections
        within your organization. We also understand the different personality
        types within the organization, which allows us to have a better
        understanding of communication styles. This information is extremely
        valuable for businesses looking to optimize their team dynamics, improve
        overall performance and have an effective communication within the
        organization. Take advantage of our expertise and let us help you unlock
        the full potential of your workforce. Start your survey today and see
        the results for yourself.
      </div>
      <div>
        <Card>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This card has supporting text below as a natural lead-in to
              additional content.{" "}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
      </div>
    </div>
  );
};

export default HomePage;
