import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import SurveyQuestion from "./SurveyQuestion";

function Survey() {

  return (
    <div className="m-5">
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>
            Identify at least 5 people at work to whom you feel connected
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="Type a name here..."
            className="mb-2"
          />
          <Form.Control
            type="text"
            placeholder="Type a name here..."
            className="mb-2"
          />
          <Form.Control
            type="text"
            placeholder="Type a name here..."
            className="mb-2"
          />
          <Form.Control
            type="text"
            placeholder="Type a name here..."
            className="mb-2"
          />
          <Form.Control
            type="text"
            placeholder="Type a name here..."
            className="mb-2"
          />
        </Form.Group>

        <h4>
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
