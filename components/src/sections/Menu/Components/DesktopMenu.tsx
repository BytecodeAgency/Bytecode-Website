import React from "react";
import { MenuInterface } from "../Menu";
import styled from "styled-components";
import Spacer from "../../../components/Spacer";
import Logo from "../../../components/Branding";
import {  theme } from "../../../theme";
import { MenuContainer } from "../../../components/Container";
import Link from "next/link";

const DesktopMenuContainer = styled(MenuContainer)`
    display: grid;
    grid-template-columns: 200px 1fr;
	align-items: center;
    padding-top: 44px;
	z-index: 90;
	width: 100%;
	background-color: rgba(255, 255, 255, .32);

`;

const NavLinksContainer = styled.ul`
    display: flex;
    gap: ${theme.layout.gutter}px;
    justify-content: end;
`;

const LogoContainer = styled.div`
	cursor: pointer;
`;

export const DesktopMenu: React.FC<MenuInterface> = ({ navLinks }) => (
	<DesktopMenuContainer>
		<Link href="/">
			<LogoContainer>
				<Logo color="black" />
			</LogoContainer>
		</Link>
		<NavLinksContainer>
			{navLinks.map((item) => (
				<item.Link key={item.name} />
			))}
		</NavLinksContainer>
		<Spacer />
	</DesktopMenuContainer>
);
