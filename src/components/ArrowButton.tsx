/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';

import styled from 'styled-components';
import { Link } from 'gatsby';
import theme from '../styles/theme';

type OwnProps = {
    href: string,
    useGatsbyLink?: boolean,
    className?: string,
    children: React.ReactNode,
};

// @ts-expect-error ts-migrate(2456) FIXME: Type alias 'Props' circularly references itself.
type Props = OwnProps & typeof ButtonBase.defaultProps;

// @ts-expect-error ts-migrate(7022) FIXME: 'ButtonBase' implicitly has type 'any' because it ... Remove this comment to see the full error message
const ButtonBase = ({
    href,
    useGatsbyLink,
    className,
    children,
    ...props
}: Props) => {
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

ButtonBase.defaultProps = {
    useGatsbyLink: false,
    className: '',
};

const ArrowButton = styled(ButtonBase)`
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

export default ArrowButton;
