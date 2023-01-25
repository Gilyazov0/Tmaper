import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Slider from "./Slider";
import "../style/form.css";
import { UseFormContext } from "./FormContext";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function SurveyQuestion() {
  const { answer, setAnswer } = UseFormContext();
  const [currentTab, setCurrentTab] = useState(0);
  let id = 1;
  const showTab = (currentTab) => {
    console.log("called func", currentTab);
  };
  useEffect(() => {
    console.log("called", currentTab);
    if (Number.isInteger(currentTab)) {
      showTab(currentTab);
    } else {
    }
  }, [currentTab]);

  const page1 = [
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
  ];
  const page2 = [
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
  ];
  const page3 = [
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
  ];
  const page4 = [
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
  ];
  const page5 = [
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

  const handleSubmit = () => {
    toast.success("Submitted!")
  }

  const handleNextPage = (e) => {
    e.preventDefault();
    if(currentTab === 4){
        handleSubmit()
    }
    else{
        setCurrentTab(currentTab + 1);
    }
  };
  const handlePrevPage = (e) => {
    e.preventDefault();
    setCurrentTab(currentTab - 1);
  };

  return (
    <div>
      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <span className={currentTab === 0 ? "active step" : "step"}></span>
        <span className={currentTab === 1 ? "active step" : "step"}></span>
        <span className={currentTab === 2 ? "active step" : "step"}></span>
        <span className={currentTab === 3 ? "active step" : "step"}></span>
        <span className={currentTab === 4 ? "active step" : "step"}></span>
      </div>
      <div hidden={!(currentTab === 0)} className="tab">
        {page1.map((question) => {
          return (
            <Form.Group className="mb-3">
              <Form.Label>{question}</Form.Label>
              <Slider question={question} />
            </Form.Group>
          );
        })}
      </div>
      <div hidden={!(currentTab === 1)} className="tab">
        {page2.map((question) => {
          return (
            <Form.Group className="mb-3">
              <Form.Label>{question}</Form.Label>
              <Slider question={question} />
            </Form.Group>
          );
        })}
      </div>
      <div hidden={!(currentTab === 2)} className="tab">
        {page3.map((question) => {
          return (
            <Form.Group className="mb-3">
              <Form.Label>{question}</Form.Label>
              <Slider question={question} />
            </Form.Group>
          );
        })}
      </div>
      <div hidden={!(currentTab === 3)} className="tab">
        {page4.map((question) => {
          return (
            <Form.Group className="mb-3">
              <Form.Label>{question}</Form.Label>
              <Slider question={question} />
            </Form.Group>
          );
        })}
      </div>
      <div hidden={!(currentTab === 4)} className="tab">
        {page5.map((question) => {
          return (
            <Form.Group className="mb-3">
              <Form.Label>{question}</Form.Label>
              <Slider question={question} />
            </Form.Group>
          );
        })}
      </div>
      <button onClick={handlePrevPage} disabled={currentTab === 0} className="btn btn-primary" >
        Prev
      </button>
      <button onClick={handleNextPage} className={currentTab === 4 ? "btn btn-success ms-3" :"btn btn-primary ms-3"}>
        {currentTab === 4 ? "Submit":"Next"}
      </button>
    </div>
  );
}

export default SurveyQuestion;
// {
/* <Questions questions={questions} />

<Button variant="primary" type="submit" onClick={handleNextPage}>
  Next page
</Button> */
// }
