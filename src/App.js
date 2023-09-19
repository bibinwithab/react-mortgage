import Navbar from "./components/Navbar";
import Result from "./components/Result";
import SliderSelect from "./components/SliderSelect";
import TenureSelect from "./components/TenureSelect";
import { Container, Grid } from "@mui/material";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Container maxWidth="xl" sx={{ mt: 8 }}>
        <Grid container spacing={10}>
          <Grid item md={8} xs={12}>
            <SliderSelect />
            <TenureSelect />
          </Grid>

          <Grid item md={4} xs={12}>
            <Result />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
