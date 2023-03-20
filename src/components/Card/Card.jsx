import Button from "components/UI-Kit/Button";
import React from "react";
import { CardStyled } from "./Card.styled";

const Card = () => {
  const handleClick = () => {
    console.log("click button");
  };

  return (
    <CardStyled>
      Card
      <Button onClick={handleClick}>Follow</Button>
    </CardStyled>
  );
};

export default Card;
