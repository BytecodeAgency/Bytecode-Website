import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { transparentize } from 'polished'; // TODO: Remove dependency
import { Link } from 'gatsby';
import theme from '../../styles/theme';

const { mediaQueryMin, colors } = theme;

const NavBarLi = styled.li`
    margin: 1em 0;
`;

export const NavbarContainer = styled.nav`
    position: fixed;
    width: 100%;
    z-index: 10000;
    padding: 0 3rem;
    background: ${props =>
        props.atScrollTop ? 'transparent' : colors.background};
    @media (max-width: ${theme.breakpointMobileMenu}) {
        width: 100vw;
        height: 3.5em;
        padding: 1em;
        position: fixed;
        top: 0;
        left: 0;
        background: ${transparentize(0.3, colors.black)};
        display: flex;
        justify-content: space-between;
    }
    @media (min-width: ${theme.breakpointMobileMenu}) {
        background: ${props =>
            props.background
                ? `linear-gradient(to bottom, ${colors.secondary}, transparent)`
                : 'transparent'};
    }

    @media (${mediaQueryMin.md}) {
    }

    @media (${mediaQueryMin.sm}) {
    }
    @media (${mediaQueryMin.lg}) {
    }
`;

export const NavbarContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (max-width: ${theme.breakpointMobileMenu}) {
        display: block;
        width: 100%;
        height: 100%;
        justify-content: space-between;

        position: fixed;
        transform: translateX(${props => (props.menuIsOpen ? 0 : '65em')});
        top: 0;
        bottom: 0;

        transition: all 0.4s ease;
        background: ${theme.colors.secondary};
        opacity: 1;
    }
`;

export const NavbarItems = styled.ul`
    display: flex;
    margin: 0;
    @media (max-width: ${theme.breakpointMobileMenu}) {
        flex-direction: column;
    }
`;

const StyledLink = styled(Link)`
    text-transform: none;
    position: relative;
    transition: all 0.2s ease;
    text-decoration: none;
    &::after {
        content: '';
        position: absolute;
        border-bottom: solid 0.2rem ${theme.colors.primary};
        bottom: -0.5rem;
        left: 50%;
        right: 50%;
        transition: all 0.2s ease;
    }
    &:hover {
        cursor: pointer;
        color: ${theme.colors.primary};
        &::after {
            left: 0;
            right: 0;
        }
    }
`;

const NavbarItemBase = ({ className, href, text }) => (
    <NavBarLi className={className}>
        <StyledLink to={href} className="menuitem">
            {text}
        </StyledLink>
    </NavBarLi>
);

NavbarItemBase.propTypes = {
    className: PropTypes.string,
    href: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
};

NavbarItemBase.defaultProps = {
    className: '',
};

export const NavbarItem = styled(NavbarItemBase)`
    display: inline-block;
    padding: 0 1.33em;
    &:last-child {
        padding-right: 0;
    }
    @media (max-width: ${theme.breakpointMobileMenu}) {
        margin-bottom: 0.5em;
        padding: 0 1em;
        &:first-child {
            margin-top: 4rem;
        }
    }
`;

export const Logo = styled.span`
    display: block;
    @media (min-width: ${theme.breakpointMobileMenu}) {
        img {
            width: 7em;
        }
    }
    img {
        @media (max-width: ${theme.breakpointMobileMenu}) {
            display: none;
        }
    }
`;

export const MobileNavLogo = styled.img`
    height: 100%;
    color: white;
    display: none;
    @media (max-width: ${theme.breakpointMobileMenu}) {
        display: block;
        width: auto;
        height: 100%;
        min-width: 2em;
    }
`;

export const MenuButton = styled.a`
    position: relative;
    height: 100%;
    color: white;
    align-items: center;
    display: none;
    img {
        height: 80%;
        width: auto;
    }
    @media (max-width: ${theme.breakpointMobileMenu}) {
        display: flex;
    }
`;

// TODO: Clean this, as it is a hack at the moment to make it work
// TODO: Create new button SVG
export const CloseMenuButton = styled(MenuButton)`
    display: flex;
    justify-content: right;
    height: 100%;
    padding: 0.5em;
    min-height: 4em;
    margin-right: 0.5em;
    @media (min-width: ${theme.breakpointMobileMenu}) {
        display: none;
    }
`;

export const BlackOverlay = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: black;
    transition: all 0.5s ease;
    opacity: 0;
    display: none;
    @media (max-width: ${theme.breakpointMobileMenu}) {
        display: ${props => (props.menuIsOpen ? 'block' : 'none')};
        opacity: ${props => (props.menuIsOpen ? 0.5 : 0)};
    }
`;
