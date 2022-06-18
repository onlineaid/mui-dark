import React from "react";
import Box from "@mui/material/Box";
import Header from "./component/header/Header";
import Container from "@mui/material/Container";
import SingleCart from "./component/cart/SingleCart";
import Media from "./Media";
import NestedGrid from "./NestedGrid";
import CssBaseline from '@mui/material/CssBaseline';

function App() {
  return (
    <Box>
      <CssBaseline />
        <div className="App">
          <Container>
            <Header />
            <SingleCart />
            <Media />
            <NestedGrid />
          </Container>
        </div>
      {/* </GlobalStyles> */}
    </Box>
  );
}
export default App;
