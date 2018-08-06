import Link from 'next/link';

const NavbarItem = ({href, text}) => (
    <li>
        <Link href={href}><a>{text}</a></Link>
    </li>
);

const Navbar = () => (
    <nav>
        <ul>
            <NavbarItem href="/" text="Home"/>
            <NavbarItem href="/services" text="Services"/>
            <NavbarItem href="/over" text="Over"/>
            <NavbarItem href="/cases" text="Cases"/>
            <NavbarItem href="/contact" text="Contact"/>
        </ul>
    </nav>
);

export default Navbar;
