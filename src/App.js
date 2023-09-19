import Navbar from "./components/Navbar";
import Result from "./components/Result";
import SliderSelect from "./components/SliderSelect";
import TenureSelect from "./components/TenureSelect";
import { Container, Grid } from "@mui/material";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Container maxWidth="xl" sx={{ mt: 4 }}>
        <Grid container>
          <Grid item>
            <SliderSelect />
            <TenureSelect />
          </Grid>

          <Grid item>
            <Result />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
