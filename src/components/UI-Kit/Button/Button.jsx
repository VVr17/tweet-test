import React from "react";
import PropTypes from "prop-types";
import { ButtonStyled } from "./Button.styled";

const Button = ({ children, onClick, name }) => {
  return (
    <ButtonStyled onClick={onClick} name={name}>
      {children}
    </ButtonStyled>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func.isRequired,
  name: PropTypes.string,
};

export default Button;
