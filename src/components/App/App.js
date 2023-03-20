import React from "react";
import { Box } from "components/Box/Box";
import CardList from "components/CardList";
import { GlobalStyle } from "./App.styled";

const App = () => {
  return (
    <>
      <Box as="main" py="32px" px="16px">
        <CardList />
      </Box>
      <GlobalStyle />
    </>
  );
};

export default App;
