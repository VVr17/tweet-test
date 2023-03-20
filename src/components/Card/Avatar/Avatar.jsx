import React from "react";
import {
  AvatarBorderStyled,
  AvatarWrapperStyled,
  WrapperStyled,
} from "./Avatar.styled";
import User from "assets/icons/users/Hansel.svg";

const Avatar = () => {
  return (
    <WrapperStyled>
      <AvatarBorderStyled>
        <AvatarWrapperStyled>
          <img src={User} alt="Hansel" width="62px" height="62px" />
        </AvatarWrapperStyled>
      </AvatarBorderStyled>
    </WrapperStyled>
  );
};

export default Avatar;
