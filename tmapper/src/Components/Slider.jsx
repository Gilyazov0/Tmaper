import React, { useState } from "react";
import RangeSlider from "react-bootstrap-range-slider";
import { UseFormContext } from "./FormContext";

function Slider({ question }) {
  const { answer, setAnswer } = UseFormContext();
  const [value, setValue] = useState(0);

  const handleChange = (changeEvent) => {
    setValue(changeEvent.target.value);
  };
  const lockValue = () => {
    setAnswer({ ...answer, [question]: value });
  };

  return (
    <div>
      <RangeSlider
        value={value}
        min={0}
        max={10}
        step={1}
        onChange={handleChange}
        onAfterChange={lockValue}
      />
    </div>
  );
}

export default Slider;
