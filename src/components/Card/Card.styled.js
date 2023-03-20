import styled from "styled-components";

export const CardStyled = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 380px;
  padding: 28px 36px 36px 36px;
  background: ${({ theme }) => theme.colors.cardBackground};
  box-shadow: ${({ theme }) => theme.boxShadow.card};
  border-radius: 20px;
`;
