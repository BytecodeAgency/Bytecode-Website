/* eslint-disable jsx-a11y/anchor-is-valid */

import Link from 'next/link';
import styled from 'styled-components';

const NavbarContent = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 6rem;
`;

const NavbarItems = styled.ul`
    display: flex;
`;

const Anchor = styled.a`
    text-transform: none;
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
`;

const Logo = styled.img`
    height: 80%;
`;

const Navbar = () => (
    <NavbarContent>
        <Logo src="/static/img/logo-min.svg" alt="Bytecode logo" />
        <NavbarItems>
            <NavbarItem href="/" text="Home" />
            <NavbarItem href="/services" text="Services" />
            <NavbarItem href="/over" text="Over" />
            <NavbarItem href="/cases" text="Cases" />
            <NavbarItem href="/contact" text="Contact" />
        </NavbarItems>
    </NavbarContent>
);

export default Navbar;
