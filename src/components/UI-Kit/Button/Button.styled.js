import styled from "styled-components";

export const ButtonStyled = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding: 14px 28px;
  min-width: 196px;
  cursor: pointer;
  font-family: inherit;
  font-size: ${({ theme }) => theme.fontSizes.s};
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.mainText};
  border: 1px solid
    ${({ theme, name }) =>
      name === "Follow" ? theme.colors.accent : theme.colors.secondaryAccent};
  border-radius: 10.3108px;
  background-color: ${({ theme, name }) =>
    name === "Follow" ? theme.colors.accent : theme.colors.secondaryAccent};
  box-shadow: ${({ theme }) => theme.boxShadow.button};
`;
