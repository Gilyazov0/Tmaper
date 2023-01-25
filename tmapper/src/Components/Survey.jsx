import React, { useState } from "react";
import RangeSlider from "react-bootstrap-range-slider";
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Survey() {
  const [value, setValue] = useState(0);
  const questions = [
    "Flexibile",
    "Adaptabile",
    "Stable",
    "Predictabile",
    "Innovative",
    "Quickly responds to opportunities",
    "Willingness to experiment",
    "Risk taking",
    "Careful",
    "Autonomous",
    "Rule orientated",
    "Analytical",
    "Attention to detail",
    "Precision",
    "Team orientated",
    "Willingness to share information",
    "Emphasizes single culture throughout",
    "Fairness",
    "Respect for individual rights",
    "Tolerance",
    "Informality",
    "People-orientated",
    "Easy-going",
    "Calm",
    "Supportive",
    "Aggressive",
    "Decisive",
    "Action-orientated",
    "Taking initiative",
    "Being reflective",
    "Achievement orientated",
    "Demainding",
    "Taking individual responsibility",
    "High expectations for performance",
    "Opportunities for personal growth",
    "High pay for good performance",
    "Security of employement",
    "Praises of good work",
    "Low level of conflict",
    "Confronting conflict directly",
    "Friendships at work",
    "Fitting in",
    "Working with others",
    "Enthusiasm for the job",
    "Working long hours",
    "Not being constrained by many rules",
    "Emphasis on quality",
    "Being destinct from others",
    "Reputation",
    "Social responsibility",
    "Results-orientated",
    "Clear guiing philosophy",
    "Being competitive",
    "Being highly organised",
  ];
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
        <div>
          {questions.map((question) => {
            return (
              <Form.Group className="mb-3">
                <Form.Label>{question}</Form.Label>
                <RangeSlider
                  value={value}
                  min={0}
                  max={10}
                  step={1}
                  onChange={(changeEvent) => setValue(changeEvent.target.value)}
                />
              </Form.Group>
            );
          })}
        </div>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Survey;
