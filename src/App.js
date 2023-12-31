import Navbar from "./components/Navbar";
import Result from "./components/Result";
import SliderSelect from "./components/SliderSelect";
import TenureSelect from "./components/TenureSelect";
import { Container, Grid } from "@mui/material";
import { useState } from "react";

function App() {

  const [data, setData] = useState({
    principleData: 100000,
    downPaymentData: 100000 * 0.2,
    loanData: 100000 * 0.8,
    interestData:5,
    term:6,
  });

  return (
    <div className="App">
      <Navbar />
      <Container maxWidth="xl" sx={{ mt: 8 }}>
        <Grid container spacing={10} alignItems="center">
          <Grid item md={8} xs={12}>
            <SliderSelect data={data} setData={setData}/>
            <TenureSelect data={data} setData={setData}/>
          </Grid>

          <Grid item md={4} xs={12}>
            <Result data={data}/>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
