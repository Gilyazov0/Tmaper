import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css";
import Form from "react-bootstrap/Form";
import SurveyQuestion from "./SurveyQuestion";
import { UseFormContext } from "./FormContext";

function Survey() {
  const { connectedPerson, setConnectedPerson } = UseFormContext();
  const setFriends = (e) => {
    setConnectedPerson({ ...connectedPerson, [e.target.id]: e.target.value });
  };
  return (
    <div className="survey-form mx-auto my-5">
      <Form>
        <h3 className="border-bottom border-secondary pb-2">
          Please complete the below survey
        </h3>
        <Form.Group className="mb-3">
          <Form.Label>
            Identify at least 5 people at work to whom you feel connected
          </Form.Label>
          <Form.Control
            id="1"
            type="text"
            placeholder="Type a name here..."
            className="mb-2"
            onChange={setFriends}
          />
          <Form.Control
            id="2"
            type="text"
            placeholder="Type a name here..."
            className="mb-2"
            onChange={setFriends}
          />
          <Form.Control
            id="3"
            type="text"
            placeholder="Type a name here..."
            className="mb-2"
            onChange={setFriends}
          />
          <Form.Control
            id="4"
            type="text"
            placeholder="Type a name here..."
            className="mb-2"
            onChange={setFriends}
          />
          <Form.Control
            id="5"
            type="text"
            placeholder="Type a name here..."
            className="mb-2"
            onChange={setFriends}
          />
        </Form.Group>

        <h4 className="border-top pt-2">
          Please complete the following questions based on your self-assessment:
        </h4>
        <h6>
          0 being "not important to me", 10 being "extremely important to me"
        </h6>
        <SurveyQuestion />
      </Form>
    </div>
  );
}

export default Survey;
