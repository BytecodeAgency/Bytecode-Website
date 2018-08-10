/* eslint-disable jsx-a11y/anchor-is-valid */

import Link from 'next/link';
import styled from 'styled-components';

const Anchor = styled.a`
    text-transform: none;
`;

const NavbarItem = ({ href, text }) => (
    <li>
        <Link href={href}>
            <Anchor className="menuitem">{text}</Anchor>
        </Link>
    </li>
);

const Navbar = () => (
    <nav>
        <ul>
            <NavbarItem href="/" text="Home" />
            <NavbarItem href="/services" text="Services" />
            <NavbarItem href="/over" text="Over" />
            <NavbarItem href="/cases" text="Cases" />
            <NavbarItem href="/contact" text="Contact" />
        </ul>
    </nav>
);

export default Navbar;
