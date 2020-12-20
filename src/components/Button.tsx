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
                className={`button ${className}`}
                type="submit"
                onClick={onClick}
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

const Button = styled(ButtonBase)`
    display: inline-block;
    background: transparent;
    padding: 0.66em 2em;
    border-color: ${theme.colors.tertiary};
    border-style: solid;
    border-width: 0.15rem;
    border-radius: 10rem;
    transition: all 0.2s ease;
    &:hover {
        color: ${theme.colors.white};
        background: ${theme.colors.primary};
        border-color: ${theme.colors.primary};
    }
`;

export default Button;
