import { Stack, Typography } from "@mui/material";
import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const Result = ({ data }) => {
  const { principleData, loanData, interestData, term } = data;

  const interestPerMonth = interestData / 100 / 12;

  const monthlyPayment =
    (loanData * interestPerMonth * (1 + interestPerMonth) ** term) /
    ((1 + interestPerMonth) ** term - 1);

  const totalInterest = monthlyPayment * term - loanData;
  const totalAmount = principleData+totalInterest;

  const chartData = {
    labels: ["Principle", "Interest"],
    datasets: [
      {
        label: "₹",
        data: [principleData, totalInterest],
        backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <Stack gap={4}>
      <Typography textAlign="center" variant="h5">
        Total Amount: ₹ {totalAmount.toFixed(2)}
      </Typography>
      <Typography textAlign="center" variant="h5">
        Monthly Installment: ₹ {monthlyPayment.toFixed(2)}
      </Typography>
      <Stack direction="row" justifyContent="center">
        <div>
          <Pie data={chartData} />
        </div>
      </Stack>
    </Stack>
  );
};

export default Result;
