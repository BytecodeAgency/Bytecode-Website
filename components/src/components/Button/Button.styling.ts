import { theme } from "../../theme";
import styled from "styled-components";
import { ButtonStylingProps } from "../../types/Button.types";

export const ButtonStyled = styled.div<ButtonStylingProps>`
    padding: 0 1em;
    background-color: ${props => props.color};
    font-size: ${theme.typography.button.sizes.text}em;
    background-color: ${(props) => props.background};
    color: ${(props) => props.color};
    font-family: ${theme.typography.button.font};
    font-weight: ${theme.typography.button.weight};
    cursor: pointer;
    width: ${props => props.icon && !props.text ? "58px" : "254px"};
    height: 58px;
    line-height: 17px;
    display: grid;
    grid-template-columns: 1fr 44px;
    align-items: center;
    border: none;
    border-radius: 58px;
    transition: 0.3s;
  
    &:hover {
      background-color: ${(props) => props.hoverBackground };
      color: ${(props) => props.hoverColor};
      box-shadow: 5px 5px ${(props) => props.background};
    }
`;
