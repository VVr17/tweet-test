import React from "react";
import PropTypes from "prop-types";
import {
  AvatarBorderStyled,
  AvatarWrapperStyled,
  WrapperStyled,
} from "./Avatar.styled";

const Avatar = ({ name, avatarUrl }) => {
  return (
    <WrapperStyled>
      <AvatarBorderStyled>
        <AvatarWrapperStyled>
          <img src={avatarUrl} alt={name} width="62px" height="62px" />
        </AvatarWrapperStyled>
      </AvatarBorderStyled>
    </WrapperStyled>
  );
};

Avatar.propTypes = {
  name: PropTypes.string.isRequired,
  avatarUrl: PropTypes.string.isRequired,
};

export default Avatar;
