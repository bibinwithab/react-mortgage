import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Container maxWidth="sm">
          <Typography
            variant="h4"
            component="div"
            sx={{ flexGrow: 2, textAlign: "center", m: 4 }}
          >
            Calculate Mortgage
          </Typography>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
