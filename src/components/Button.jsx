import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from '../styles/theme';

const ButtonBase = ({ href, useGatsbyLink, className, children, ...props }) => {
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

ButtonBase.propTypes = {
    href: PropTypes.string.isRequired,
    useGatsbyLink: PropTypes.bool,
};

const Button = styled(ButtonBase)`
    display: inline-block;
    background: transparent;
    padding: 0.8rem 3.6rem;
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
