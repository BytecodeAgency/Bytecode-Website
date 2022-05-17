import React from "react";
import { useState } from "react";
import Hamburger from "hamburger-react";
import { MenuInterface } from "../Menu";
import styled from "styled-components";
import { MenuContainer } from "../../../components/Container";
import { theme } from "../../../theme";
import ContactBox from "./ContactBox";
import Logo from "../../../components/Branding";
import Link from "next/link";

const MobileMenuBarTopContainer = styled(MenuContainer)`
    display: grid;
    grid-template-columns: 1fr 80px;
    padding-top: 25px;
    padding-right: 25px;
    height: 72px;
	z-index: 90;
`;

const MobileMenuContainer = styled.div`
	display: grid;
	grid-template-rows: 1fr 200px;
	height: calc(100vh - 72px);
	width: 100vw;
	position: fixed;
	top: 72px;
	left: 0;
	background: white;
	z-index: 9998;
`;

const MenuList = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: ${theme.layout.gutter}px;
    & > li {
        text-align: center;
        font-size: ${theme.typography.menu.mobile}em;
    }
`;

const ContactContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
`;

export const MobileMenu: React.FC<MenuInterface> = ({ navLinks }) => {
	const [isOpen, setOpen] = useState(false);

	const Opened = () => {
		return (
			<MobileMenuContainer >
				<MenuList>
					{navLinks.map((item) => (
						<li key={item.name} onClick={() => { setOpen(false); }}>
							<item.Link />
						</li>
					))}
				</MenuList>
				<ContactContainer>
					<ContactBox icon="email" text="Send us an email" url="mailto: info@bytecode.nl" />
					<ContactBox icon="email" text="Plan a meeting" url="https://calendly.com/nickbroekarts-bytecode" />
				</ContactContainer>
			</MobileMenuContainer>
		);
	};

	return (
		<>
			<MobileMenuBarTopContainer background={isOpen ? theme.colors.white : "transparant"}>
				<Link href="/">
					<div>
						<Logo color="black" />
					</div>
				</Link>
				<Hamburger toggled={isOpen} toggle={setOpen} />
			</MobileMenuBarTopContainer>
			{isOpen && <Opened />}
		</>
	);
};