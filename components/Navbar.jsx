/* eslint-disable jsx-a11y/anchor-is-valid, no-confusing-arrow */

import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import theme from '../styles/theme';

const NavbarContainer = styled.nav`
    @media (max-width: ${theme.breakpointMobileMenu}) {
        height: 7rem;
        background: ${theme.colors.black};
        width: 100vw;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
    }
`;

/* eslint-disable */
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
    }
`;
/* eslint-enable */
/* eslint-disable jsx-a11y/anchor-is-valid, no-confusing-arrow */

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

class Navbar extends React.Component {
    constructor() {
        super();
        this.state = {
            menuIsOpen: false,
        };
        this.openMenu = this.openMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
    }

    openMenu() {
        this.setState({ menuIsOpen: true });
    }

    closeMenu() {
        this.setState({ menuIsOpen: false });
    }

    render() {
        const { menuIsOpen } = this.state;
        return (
            <NavbarContainer>
                <MobileNavLogo src="/static/img/logo-min.svg" />
                <BlackOverlay
                    menuIsOpen={menuIsOpen}
                    onClick={this.closeMenu}
                />
                <MenuButton href="#" onClick={this.openMenu}>
                    <img
                        src="/static/img/close-menu.svg"
                        alt="Close menu"
                        width="100%"
                    />
                </MenuButton>
                <NavbarContent menuIsOpen={menuIsOpen}>
                    <Logo src="/static/img/logo-min.svg" alt="Bytecode logo" />
                    {/* // TODO: Link Logo to homepage */}
                    <NavbarItems>
                        <MenuButton href="#" onClick={this.closeMenu}>
                            <img
                                src="/static/img/close-menu.svg"
                                alt="Close menu"
                                width="100%"
                            />
                        </MenuButton>
                        <NavbarItem href="/" text="Home" />
                        <NavbarItem href="/services" text="Services" />
                        <NavbarItem href="/over" text="Over" />
                        <NavbarItem href="/cases" text="Cases" />
                        <NavbarItem href="/contact" text="Contact" />
                    </NavbarItems>
                </NavbarContent>
            </NavbarContainer>
        );
    }
}

export default Navbar;
