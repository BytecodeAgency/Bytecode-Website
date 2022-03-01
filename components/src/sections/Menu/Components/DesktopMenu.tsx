import React from "react";
import { MenuInterface } from "../Menu";
import styled from "styled-components";
import Spacer from "../../../components/Spacer/Spacer";
import Logo from "../../../components/Branding/Branding";
import {theme} from "../../../theme";
import { MenuContainer } from "../../../components/Container/Container";

const DesktopMenuContainer = styled(MenuContainer)`
    display: grid;
    grid-template-columns: 200px 1fr;
    padding-top: 44px;
	z-index: 90;
`;

const NavLinksContainer = styled.div`
    display: flex;
    gap: ${theme.layout.gutter}px;
    justify-content: end;
`;

export const DesktopMenu: React.FC<MenuInterface> = ({ navLinks }) => (
	<DesktopMenuContainer>
		<div>
			<Logo color="black" />
		</div>
		<NavLinksContainer>
			{navLinks.map((item) => (
				<item.Link key={item.name} />
			))}
		</NavLinksContainer>
		<Spacer color="black" />
	</DesktopMenuContainer>
);