import React from "react";
import { Box } from "components/Box/Box";
import Card from "components/Card";
import { GlobalStyle } from "./App.styled";

const App = () => {
  return (
    <Box as="main" py="32px" px="16px">
      <Card />
      <GlobalStyle />
    </Box>
  );
};

export default App;
