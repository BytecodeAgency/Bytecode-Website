import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import {
    BlackOverlay,
    CloseMenuButton,
    Logo,
    MenuButton,
    MobileNavLogo,
    NavbarContainer,
    NavbarContent,
    NavbarItem,
    NavbarItems,
} from './Navbar.components';

const logo = require('../../images/img/logo.svg');
const logoMin = require('../../images/img/logo-min.svg');
const hamburger = require('../../images/img/hamburger-menu.svg');
const closeMenu = require('../../images/img/close-menu.svg');

class Navbar extends React.Component {
    constructor(props) {
        super(props);
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
        const { background } = this.props;
        return (
            <NavbarContainer background={background}>
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
                        <NavbarItem href="/cases" text="Cases" />
                        <NavbarItem href="/insights" text="Insights" />
                        <NavbarItem href="/over" text="About" />
                        <NavbarItem href="/contact" text="Contact" />
                    </NavbarItems>
                </NavbarContent>
            </NavbarContainer>
        );
    }
}

export default Navbar;

Navbar.propTypes = {
    background: PropTypes.bool.isRequired,
};
