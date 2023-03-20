import styled from "styled-components";
import background from "assets/images/background.png";

export const CardStyled = styled.div`
  position: relative;
  margin: 0 auto;
  width: 380px;
  padding: 28px 36px 36px 36px;
  text-align: center;
  text-transform: uppercase;
  background: ${({ theme }) => theme.colors.cardBackground};
  box-shadow: ${({ theme }) => theme.boxShadow.card};
  border-radius: 20px;
`;

export const LogoStyled = styled.img`
  position: absolute;
  top: 20px;
  left: 20px;
  width: 76px;
  height: 22px;
`;

export const UpperContainer = styled.div`
  height: 168px;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: contain;
`;

export const Text = styled.p`
  line-height: 1.2;
  text-transform: uppercase;

  :not(:last-of-type) {
    margin-bottom: 16px;
  }

  :last-of-type {
    margin-bottom: 26px;
  }
`;
