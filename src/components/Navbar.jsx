import React from 'react';
import { Link } from 'gatsby';
import NavbarComponents from './NavbarComponents';

const {
    NavbarContainer,
    NavbarContent,
    NavbarItems,
    NavbarItem,
    Logo,
    MobileNavLogo,
    MenuButton,
    CloseMenuButton,
    BlackOverlay,
} = NavbarComponents;

const logo = require('../images/img/logo.svg');
const logoMin = require('../images/img/logo-min.svg');
const hamburger = require('../images/img/hamburger-menu.svg');
const closeMenu = require('../images/img/close-menu.svg');

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
                <Link to="/" aria-label="homePage">
                    <MobileNavLogo src={logoMin} alt="Logo" />
                </Link>
                <BlackOverlay
                    menuIsOpen={menuIsOpen}
                    onClick={this.closeMenu}
                />
                <MenuButton href="#" onClick={this.openMenu}>
                    <img src={hamburger} alt="Close menu" width="100%" />
                </MenuButton>
                <NavbarContent menuIsOpen={menuIsOpen}>
                    <Link to="/" aria-label="homePage">
                        <Logo>
                            <img src={logo} alt="Bytecode logo" />
                        </Logo>
                    </Link>
                    <NavbarItems>
                        <CloseMenuButton href="#" onClick={this.closeMenu}>
                            <img
                                src={closeMenu}
                                alt="Close menu"
                                width="100%"
                            />
                        </CloseMenuButton>
                        <NavbarItem href="/" text="Home" />
                        <NavbarItem href="/services" text="Services" />
                        <NavbarItem href="/cases" text="Work" />
                        <NavbarItem href="/insights" text="Insights" />
                        <NavbarItem href="/over" text="Over" />
                        <NavbarItem href="/contact" text="Contact" />
                    </NavbarItems>
                </NavbarContent>
            </NavbarContainer>
        );
    }
}

export default Navbar;
