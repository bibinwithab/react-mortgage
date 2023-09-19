import React from "react";
import SliderComponent from "./common/SliderComponent";

const SliderSelect = () => {
  return (
    <>
      <SliderComponent
        label="Down Payment"
        min={30000}
        max={200000}
        steps={1000}
        defaultValue={2500}
        onChange={(e, value) => {
          console.log(value);
        }}
        amount={3000}
        unit="₹"
      />

      <br></br>
      <SliderComponent
        label="Rate Of Interest"
        min={4}
        max={19}
        steps={0.1}
        defaultValue={5}
        onChange={(e, value) => {
          console.log(value);
        }}
        amount={12}
        unit="%"
      />
    </>
  );
};

export default SliderSelect;
