import React, { useState } from 'react';
import { Link } from 'gatsby';
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
import { NavbarProps } from './Navbar.types';

const logo = require('../../images/img/logo.svg');
const logoMin = require('../../images/img/logo-min.svg');
const hamburger = require('../../images/img/hamburger-menu.svg');
const closeMenuImg = require('../../images/img/close-menu.svg');

const Navbar: React.FC<NavbarProps> = ({ background }) => {
    const [menuIsOpen, setMenuIsOpen] = useState(false);
    const closeMenu = () => setMenuIsOpen(false);
    const openMenu = () => setMenuIsOpen(true);
    return (
        <NavbarContainer background={background}>
            <Link to="/" aria-label="homePage">
                <MobileNavLogo src={logoMin} alt="Logo" />
            </Link>
            <BlackOverlay menuIsOpen={menuIsOpen} onClick={closeMenu} />
            <MenuButton href="#" onClick={openMenu}>
                <img src={hamburger} alt="Close menu" width="100%" />
            </MenuButton>
            <NavbarContent menuIsOpen={menuIsOpen}>
                <Link to="/" aria-label="homePage">
                    <Logo>
                        <img src={logo} alt="Bytecode logo" />
                    </Logo>
                </Link>
                <NavbarItems>
                    <CloseMenuButton href="#" onClick={closeMenu}>
                        <img src={closeMenuImg} alt="Close menu" width="100%" />
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
};

export default Navbar;
