import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import theme from '../styles/theme';

interface ButtonProps {
    href: string;
    useGatsbyLink?: boolean;
    className?: string;
    children: React.ReactNode;
    props: any;
}

const ButtonBase: React.FC<ButtonProps> = ({
    href,
    useGatsbyLink = false,
    className = '',
    children,
    ...props
}) => {
    if (useGatsbyLink) {
        return (
            <Link to={href} className={`button ${className}`} {...props}>
                {children}
            </Link>
        );
    }
    return (
        <a href={href} className={`button ${className}`} {...props}>
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
