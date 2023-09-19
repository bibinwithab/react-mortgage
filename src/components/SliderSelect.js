import React from "react";
import SliderComponent from "./common/SliderComponent";

const SliderSelect = ({data, setData}) => {
  return (
    <>
      <SliderComponent
        label="Principle"
        min={30000}
        max={200000}
        steps={1000}
        defaultValue={data.principleData}
        value={data.principleData}
        onChange={(e, value) => {
          setData({
            ...data,
            downPaymentData: value * 0.2,
            loanData: value * 0.8,
            principleData: value
          });
        }}
        amount={data.principleData}
        unit="₹"
      />
      <SliderComponent
        label="Down Payment"
        min={6000}
        max={200000}
        steps={1000}
        defaultValue={data.downPaymentData}
        value={data.downPaymentData}
        onChange={(e, value) => {
          setData({
            ...data,
            loanData: (data.principleData - value),
            downPaymentData: value
          });
        }}
        amount={data.downPaymentData}
        unit="₹"
      />
      <SliderComponent
        label="Loan Amount"
        min={24000}
        max={200000}
        steps={1000}
        defaultValue={data.loanData}
        value={data.loanData}
        onChange={(e, value) => {
          setData({
            ...data,
            downPaymentData: (data.principleData - value),
            loanData: value
          });
        }}
        amount={data.loanData}
        unit="₹"
      />

      <SliderComponent
        label="Rate Of Interest"
        min={4}
        max={19}
        steps={0.1}
        defaultValue={data.interestData}
        value={data.interestData}
        onChange={(e, value) => {
          setData({
            ...data,
            interestData: value
          });
        }}
        amount={data.interestData}
        unit="%"
      />
    </>
  );
};

export default SliderSelect;
