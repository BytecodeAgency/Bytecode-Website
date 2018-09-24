/*  eslint-disable
    jsx-a11y/anchor-is-valid,
    no-confusing-arrow,
    react/destructuring-assignment
*/
import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { transparentize } from 'polished';
import theme from '../styles/theme';

const NavbarContainer = styled.nav`
    position: relative;
    z-index: 10000;
    padding: 1rem 10%;
    background: ${transparentize(.3, theme.colors.black)};
    @media (max-width: ${theme.breakpointMobileMenu}) {
        height: 7rem;
        width: 100vw;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
    }
`;

const NavbarContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 6rem;
    @media (max-width: ${theme.breakpointMobileMenu}) {
        display: block;
        width: 30rem;
        height: 100vh;
        position: fixed;
        right: ${props => (props.menuIsOpen ? 0 : '-30rem')};
        top: 0;
        bottom: 0;
        padding-top: 6rem;
        transition: all 0.4s ease;
        background: ${theme.colors.secondary};
        opacity: 1;
    }
`;

const NavbarItems = styled.ul`
    display: flex;
    @media (max-width: ${theme.breakpointMobileMenu}) {
        flex-direction: column;
    }
`;

const Anchor = styled.a`
    text-transform: none;
    position: relative;
    transition: all 0.2s ease;
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

const NavbarItemBase = ({ className, ...props }) => {
    const { href, text } = props;
    return (
        <li className={className}>
            <Link href={href}>
                <Anchor className="menuitem">{text}</Anchor>
            </Link>
        </li>
    );
};

const NavbarItem = styled(NavbarItemBase)`
    display: inline-block;
    padding: 0 2rem;
    &:last-child {
        padding-right: 0;
    }
    @media (max-width: ${theme.breakpointMobileMenu}) {
        padding: 1rem 2rem;
        &:first-child {
            margin-top: 4rem;
        }
    }
`;

const Logo = styled.img`
    height: 80%;
    max-height: 6rem;
    width: auto;
    @media (max-width: ${theme.breakpointMobileMenu}) {
        display: none;
    }
`;

const MobileNavLogo = styled.img`
    height: 4.5rem;
    position: absolute;
    top: 1.25rem;
    left: 1.25rem;
    color: white;
    display: none;
    @media (max-width: ${theme.breakpointMobileMenu}) {
        display: block;
    }
`;

const MenuButton = styled.a`
    height: 3rem;
    width: 3rem;
    position: absolute;
    top: 2rem;
    right: 2rem;
    color: white;
    align-items: center;
    display: none;
    @media (max-width: ${theme.breakpointMobileMenu}) {
        display: flex;
    }
`;

const BlackOverlay = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: #000;
    transition: all 0.5s ease;
    opacity: 0;
    display: none;
    @media (max-width: ${theme.breakpointMobileMenu}) {
        display: ${props => (props.menuIsOpen ? 'block' : 'none')};
        opacity: ${props => (props.menuIsOpen ? 0.5 : 0)};
    }
`;

export default {
    NavbarContainer,
    NavbarContent,
    NavbarItems,
    NavbarItem,
    Logo,
    MobileNavLogo,
    MenuButton,
    BlackOverlay,
};
