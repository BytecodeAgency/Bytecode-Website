import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import theme from '../styles/theme';
import { ButtonProps } from './Button.types';

const ButtonBase: React.FC<ButtonProps> = ({
    href,
    useGatsbyLink = false,
    className = '',
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
                <Link
                    to={href}
                    className={`button ${className}`}
                    rel={rel}
                    target={target}
                    onClick={onClick}
                >
                    {children}
                </Link>
            );
        }
    }
    if (submit) {
        return (
            <button
                type="button"
                className={`button ${className}`}
                onClick={onClick}
                disabled={disabled}
            >
                {children}
            </button>
        );
    }
    return (
        <a
            href={href}
            className={`button ${className}`}
            rel={rel}
            target={target}
            onClick={onClick}
        >
            {children}
        </a>
    );
};
const Button =
    styled(ButtonBase) <
    ButtonProps >
    `
    display: inline-block;
    background: transparent;
    padding: 0.66em 2em;
    border-color: ${theme.colors.tertiary};
    border-style: solid;
    border-width: 0.15rem;
    border-radius: 10rem;
    transition: all 0.2s ease;
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

export default Button;
