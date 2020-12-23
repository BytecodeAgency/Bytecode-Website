import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'gatsby';
import theme from '../../styles/theme';
import { ButtonProps } from './Button.types';

const { size, height, spacing, font, weight, color } = theme.typography.button;

const buttonStyle = css<{ disabled?: boolean }>`
    display: inline-block;
    background: transparent;
    padding: 0.66em 2em;
    border-color: ${theme.colors.tertiary};
    border-style: solid;
    border-width: 0.15rem;
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

const StyledGatsbyButton = styled(Link)<{ disabled?: boolean }>`
    ${buttonStyle}
`;
const StyledButton = styled.button<{ disabled?: boolean }>`
    ${buttonStyle}
`;
const StyledAnchor = styled.a<{ disabled?: boolean }>`
    ${buttonStyle}
`;

const Button: React.FC<ButtonProps> = ({
    href,
    useGatsbyLink = false,
    rel,
    submit,
    target,
    onClick,
    disabled,
    children,
}) => {
    if (useGatsbyLink) {
        if (href) {
            return (
                <StyledGatsbyButton
                    to={href}
                    rel={rel}
                    target={target}
                    onClick={onClick}
                >
                    {children}
                </StyledGatsbyButton>
            );
        }
    }
    if (submit) {
        return (
            <StyledButton type="button" onClick={onClick} disabled={disabled}>
                {children}
            </StyledButton>
        );
    }
    return (
        <StyledAnchor href={href} rel={rel} target={target} onClick={onClick}>
            {children}
        </StyledAnchor>
    );
};

export default Button;
