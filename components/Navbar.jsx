/* eslint-disable jsx-a11y/anchor-is-valid, no-confusing-arrow */

import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import theme from '../styles/theme';

/* eslint-disable */
const NavbarContent = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 6rem;
    @media (max-width: ${theme.breakpointMobileMenu}) {
        display: block;
        width: 30rem;
        height: 100vh;
        position: fixed;
        right: ${props => props.menuIsOpen ? 0 : '-30rem'};
        top: 0;
        bottom: 0;
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
            <div>
                <a href="#" onClick={this.openMenu} style={{ color: 'white' }}>
                    Open menu
                </a>
                <NavbarContent menuIsOpen={menuIsOpen}>
                    <Logo src="/static/img/logo-min.svg" alt="Bytecode logo" />
                    <NavbarItems>
                        <a href="#" onClick={this.closeMenu} style={{ color: 'white' }}>
                            Close menu
                        </a>
                        <NavbarItem href="/" text="Home" />
                        <NavbarItem href="/services" text="Services" />
                        <NavbarItem href="/over" text="Over" />
                        <NavbarItem href="/cases" text="Cases" />
                        <NavbarItem href="/contact" text="Contact" />
                    </NavbarItems>
                </NavbarContent>
            </div>
        );
    };
};

export default Navbar;
