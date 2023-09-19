import { Stack, Typography } from "@mui/material";
import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const Result = ({ data }) => {
  const { principleData, downPaymentData, loanData, interestData, term } = data;

  const interestPerMonth = interestData / 100 / 12;

  const monthlyPayment =
    (loanData * interestPerMonth * (1 + interestPerMonth) ** term) /
    ((1 + interestPerMonth) ** term - 1);

  const totalInterest = monthlyPayment * term - loanData;

  const chartData = {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <Stack>
      <Typography textAlign="center" variant="h5">
        Monthly Installment: ₹ {monthlyPayment.toFixed(2)}
        <Doughnut data={chartData} />
      </Typography>
    </Stack>
  );
};

export default Result;
