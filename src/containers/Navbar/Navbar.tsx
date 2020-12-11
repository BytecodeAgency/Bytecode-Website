import React from 'react';
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
    // @ts-expect-error ts-migrate(6142) FIXME: Module './Navbar.components' was resolved to '/hom... Remove this comment to see the full error message
} from './Navbar.components';

const logo = require('../../images/img/logo.svg');
const logoMin = require('../../images/img/logo-min.svg');
const hamburger = require('../../images/img/hamburger-menu.svg');
const closeMenu = require('../../images/img/close-menu.svg');

type Props = {
    background: boolean,
};

type State = any;

class Navbar extends React.Component<Props, State> {
    constructor(props: Props) {
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
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <NavbarContainer background={background}>
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <Link to="/" aria-label="homePage">
                    {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                    <MobileNavLogo src={logoMin} alt="Logo" />
                </Link>
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <BlackOverlay
                    menuIsOpen={menuIsOpen}
                    onClick={this.closeMenu}
                />
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <MenuButton href="#" onClick={this.openMenu}>
                    {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                    <img src={hamburger} alt="Close menu" width="100%" />
                </MenuButton>
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <NavbarContent menuIsOpen={menuIsOpen}>
                    {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                    <Link to="/" aria-label="homePage">
                        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                        <Logo>
                            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                            <img src={logo} alt="Bytecode logo" />
                        </Logo>
                    </Link>
                    {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                    <NavbarItems>
                        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                        <CloseMenuButton href="#" onClick={this.closeMenu}>
                            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                            <img
                                src={closeMenu}
                                alt="Close menu"
                                width="100%"
                            />
                        </CloseMenuButton>
                        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                        <NavbarItem href="/" text="Home" />
                        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                        <NavbarItem href="/services" text="Services" />
                        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                        <NavbarItem href="/cases" text="Cases" />
                        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                        <NavbarItem href="/insights" text="Insights" />
                        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                        <NavbarItem href="/over" text="About" />
                        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                        <NavbarItem href="/contact" text="Contact" />
                    </NavbarItems>
                </NavbarContent>
            </NavbarContainer>
        );
    }
}

export default Navbar;
