import Link from 'next/link';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from '../styles/theme';

const ButtonBase = ({ className, children, ...props }) => {
    const { href, usenextlink } = props;
    if (usenextlink) {
        return (
            <Link href={href}>
                <a className={`button ${className}`} {...props}>
                    {children}
                </a>
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
    usenextlink: PropTypes.bool,
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
