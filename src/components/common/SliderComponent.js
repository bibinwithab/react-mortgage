import React from "react";
import Slider from "@mui/material/Slider";
import { Stack, Typography } from "@mui/material";

const SliderComponent = ({
  defaultValue,
  min,
  max,
  steps,
  onChange,
  value,
  label,
  unit,
  amount,
}) => {
  return (
    <Stack my={2}>
      <Stack spacing={2}>
        <Typography variant="h5">{label}</Typography>
        <Typography variant="h5">{unit} {amount}</Typography>
      </Stack>
      <Slider
        defaultValue={defaultValue}
        step={steps}
        marks
        min={min}
        max={max}
        aria-label="Default"
        valueLabelDisplay="auto"
        onChange={onChange}
        value={value}
      />
      <Stack direction="row" justifyContent="space-between" spacing={2}>
        <Typography variant="caption" color="text.secondary">
          {unit} {min}
        </Typography>
        <Typography variant="caption" color="text.secondary">
          {unit} {max}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default SliderComponent;
