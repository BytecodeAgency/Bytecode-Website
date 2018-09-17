/* eslint-disable jsx-a11y/anchor-is-valid, no-confusing-arrow */

import React from 'react';
import NavbarComponents from './NavbarComponents';
import { Container } from '../lib/Grid';

const {
    NavbarContainer,
    NavbarContent,
    NavbarItems,
    NavbarItem,
    Logo,
    MobileNavLogo,
    MenuButton,
    BlackOverlay,
} = NavbarComponents;

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
                <Container>
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
                        {/* TODO: Link Logo to homepage */}
                        <Logo
                            src="/static/img/logo-min.svg"
                            alt="Bytecode logo"
                        />
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
                </Container>
            </NavbarContainer>
        );
    }
}

export default Navbar;
