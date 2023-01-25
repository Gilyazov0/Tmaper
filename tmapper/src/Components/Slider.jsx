import React,{useState} from "react";
import RangeSlider from "react-bootstrap-range-slider";


function Slider() {
    const [value, setValue] = useState(0);

  return (
    <div>
      <RangeSlider
        value={value}
        min={0}
        max={10}
        step={1}
        onChange={(changeEvent) => setValue(changeEvent.target.value)}
      />
    </div>
  );
}

export default Slider;
