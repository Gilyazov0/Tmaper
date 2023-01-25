import React, { useState } from "react";
import RangeSlider from "react-bootstrap-range-slider";
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css";
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';

function Survey() {
  const [value, setValue] = useState({});
  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <RangeSlider
            value={value}
            onChange={(changeEvent) =>
              setValue(...value, changeEvent.target.value)
            }
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Survey;
