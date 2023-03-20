import styled from "styled-components";

export const ButtonStyled = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 14px 28px;
  min-width: 196px;
  cursor: pointer;
  font-family: inherit;
  font-size: ${({ theme }) => theme.fontSizes.s};
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  color: ${({ theme }) => theme.colors.mainText};
  border: 1px solid ${({ theme }) => theme.colors.accent};
  border-radius: 10.3108px;
  background-color: ${({ theme }) => theme.colors.accent};
  box-shadow: ${({ theme }) => theme.boxShadow.button};
  transition: background-color ${({ theme }) => theme.transitionTiming};

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.secondaryAccent};
  }
`;
