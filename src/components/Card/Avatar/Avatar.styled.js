import styled from "styled-components";

export const WrapperStyled = styled.div`
  position: relative;
  z-index: 100;
  margin-top: -18px;
  margin-bottom: 26px;

  ::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: block;
    width: 380px;
    height: 8px;
    background: ${({ theme }) => theme.colors.accent};
    box-shadow: ${({ theme }) => theme.boxShadow.avatarLine};
  }
`;

export const AvatarBorderStyled = styled.div`
  position: relative;
  z-index: 100;
  width: 80px;
  height: 80px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 86px;
  background: ${({ theme }) => theme.colors.accent};
  box-shadow: ${({ theme }) => theme.boxShadow.avatar};
`;

export const AvatarWrapperStyled = styled.div`
  width: 62px;
  height: 62px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 86px;
  background: ${({ theme }) => theme.colors.cardBackground};
`;
