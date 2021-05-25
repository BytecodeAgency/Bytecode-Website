import styled, { css } from 'styled-components';
import { Link } from 'gatsby';
import theme from '../../styles/theme';

const { size, height, spacing, font, weight, color } = theme.typography.button;

const buttonStyle = css<{ disabled?: boolean }>`
    display: inline-block;
    background: transparent;
    padding: 0.66em 2em;
    border-color: ${theme.colors.tertiary};
    border-style: solid;
    border-width: 0.1rem;
    border-radius: 10rem;
    transition: all 0.2s ease;
    font-size: ${size};
    line-height: ${height};
    letter-spacing: ${spacing};
    font-family: ${font};
    font-weight: ${weight};
    color: ${color};
    text-decoration: none;
    &:hover {
        color: ${(props) =>
            props.disabled ? theme.colors.tertiary : theme.colors.white};
        background: ${(props) =>
            props.disabled ? 'transparant' : theme.colors.primary};
        border-color: ${(props) =>
            props.disabled ? theme.colors.tertiary : theme.colors.primary};
        cursor: pointer;
    }
`;

export const StyledGatsbyButton = styled(Link)<{ disabled?: boolean }>`
    ${buttonStyle}
`;
export const StyledButton = styled.button<{ disabled?: boolean }>`
    ${buttonStyle}
`;
export const StyledAnchor = styled.a<{ disabled?: boolean }>`
    ${buttonStyle}
`;
