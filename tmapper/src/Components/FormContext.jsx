import React, { createContext, useContext, useEffect, useState } from "react";

export const FormContext = createContext();

export const UseFormContext = () => useContext(FormContext);

export default function FormContextProvider({ children }) {
  const [connectedPerson, setConnectedPerson] = useState({});
  const [answer, setAnswer] = useState({
    Flexibile: "0",
    Adaptabile: "0",
    Stable: "0",
    Predictabile:"0",
    Innovative: "0",
    "Quickly responds to opportunities": "0",
    "Willingness to experiment": "0",
    "Risk taking": "0",
    Careful: "0",
    Autonomous: "0",
    "Rule orientated":"0",
    "Analytical":"0",
    "Attention to detail":"0",
    "Precision":"0",
    "Team orientated":"0",
    "Willingness to share information":"0",
    "Emphasizes single culture throughout":"0",
    "Fairness":"0",
    "Respect for individual rights":"0",
    "Tolerance":"0","Informality":"0",
    "People-orientated":"0",
    "Easy-going":"0",
    "Calm":"0",
    "Supportive":"0",
    "Aggressive":"0",
    "Decisive":"0",
    "Action-orientated":"0",
    "Taking initiative":"0",
    "Being reflective":"0","Achievement orientated":"0",
    "Demainding":"0",
    "Taking individual responsibility":"0",
    "High expectations for performance":"0",
    "Opportunities for personal growth":"0",
    "High pay for good performance":"0",
    "Security of employement":"0",
    "Praises of good work":"0",
    "Low level of conflict":"0",
    "Confronting conflict directly":"0","Friendships at work":"0",
    "Fitting in":"0",
    "Working with others":"0",
    "Enthusiasm for the job":"0",
    "Working long hours":"0",
    "Not being constrained by many rules":"0",
    "Emphasis on quality":"0",
    "Being destinct from others":"0",
    "Reputation":"0",
    "Social responsibility":"0",
    "Results-orientated":"0",
    "Clear guiing philosophy":"0",
    "Being competitive":"0",
    "Being highly organised":"0",
  });
  useEffect(() => {
    console.log(answer);
  }, [answer]);

  useEffect(() => {
    console.log(connectedPerson);
  }, [connectedPerson]);
  return (
    <FormContext.Provider
      value={{ answer, setAnswer, connectedPerson, setConnectedPerson }}
    >
      {children}
    </FormContext.Provider>
  );
}
