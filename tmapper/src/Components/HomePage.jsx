import React from "react";
import "../style/home.css";
import Card from "react-bootstrap/Card";
import logo from "../media/connectionImage.jpg";
import card3 from "../media/group.png";
import card2 from "../media/network.png";
import card1 from "../media/smartphone.png";
import homeLogo from "../media/logo1.jpg";

const HomePage = () => {
  return (
    <div className="home-page background-home">
      <div className="header background-home">
        <img className="homeLogo" src={homeLogo} alt="" />
        <div className="background-home display-5">
          Welcome to the : Tmapper website
        </div>
      </div>

      <div className="d-flex justify-content-center">
        <img className="classe" src={logo} alt="" />
      </div>
      <div className="textWrapper">
        <div className="textPresentation">
          We specialize in conducting surveys of employees' personal information
          and using the data to create a formal structure network. By analyzing
          the traits and positions of each employee, we are able to map out the
          relationships and connections within your organization. We also
          understand the different personality types within the organization,
          which allows us to have a better understanding of communication
          styles. This information is extremely valuable for businesses looking
          to optimize their team dynamics, improve overall performance and have
          an effective communication within the organization. Take advantage of
          our expertise and let us help you unlock the full potential of your
          workforce. Start your survey today and see the results for yourself.
        </div>

        <div className="textPresentation">
          Don't know your colleagues well? Ask us! We work in leading reviews of
          representatives' very own data and utilizing the corporate culture
          information to make a proper organizational design. By examining the
          qualities and traits of every worker, we can outline the connections
          and associations inside your team. We likewise comprehend the
          different character types inside the organization, which permits us to
          have a superior comprehension of communication styles. This data is
          very important for organizations hoping to enhance change management,
          work on generally execution and include a viable communication inside
          the team. Exploit our skill and let us assist you with opening the
          maximum capacity of your teammates. Begin your study today and see the
          outcomes for yourself!
        </div>
      </div>
      <div className="cardWrapper">
        <Card className="background-home w-25">
          <Card.Img variant="top" className="card1" src={card1} alt="" />

          <Card.Body>
            <Card.Title className="cardTitle">Survey</Card.Title>
            <Card.Text className="cardText">
              Gatherings of information presented by the team, through the
              neutral questionnaire describing their personality types at best:
              this strategy includes gathering information on representatives'
              traits, moods and other personality data for further studies to
              make a proper analysis of team design.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="background-home w-25">
          <Card.Img variant="top" className="card2" src={card2} alt="" />

          <Card.Body>
            <Card.Title className="cardTitle">Relationship</Card.Title>
            <Card.Text className="cardText">
              Examining data gathered through the survey, including dissecting
              the attributes and occupations of every representative to grasp
              the connections and associations inside the team.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="background-home w-25">
          <Card.Img variant="top" className="card3" src={card3} alt="" />

          <Card.Body>
            <Card.Title className="cardTitle">Employee</Card.Title>
            <Card.Text className="cardText">
              Understanding different characters' types inside the team to
              further develop communication and managements styles. Splitting
              the population into cultural groups, similar in their behavior,
              where the number of groups is upon on your choice.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
    // </div>
  );
};

export default HomePage;
