import React from "react";
import styled from "styled-components";
import { theme } from "../../../../theme";
import Hamburger from "hamburger-react";
import { breakpointNameToPx, responsiveValuesCSS } from "../../../../helpers/responsiveCss";
import Logo from "../../../../components/Branding";
import { isWindowDesktop } from "../../../../helpers/device";
import Link from "next/link";

type PopupHeaderProps = {
	closePopup: () => void;
}

const DesktopPopupMenu = styled.div`
	height: 48px;
	padding-top: 25px;
	z-index: 9998;
	width: 100%;
	display: flex;
	justify-content: flex-end;
	grid-area: menu;
	background-color: ${theme.colors.white};
`;
const DesktopPopupHeader = ({ closePopup }: PopupHeaderProps) => (
	<DesktopPopupMenu>
		<Hamburger toggled={true} onToggle={closePopup} />
	</DesktopPopupMenu>
);

const MobilePopupMenu = styled.div`
	position: fixed;
	z-index: 9998;
	display: flex;
	justify-content: space-between;
	width: 100%;
	height: 75px;
	align-items: center;
	grid-area: menu;
	top:0;
	left:0;
	background-color: ${theme.colors.white};
`;

const logoContainerResponsiveCSS = responsiveValuesCSS(
	"padding-left",
	"px",
	breakpointNameToPx({
		xs: 12,
		md: 16,
		lg: 32,
	}));
const LogoContainer = styled.div`
	${logoContainerResponsiveCSS}
`;
const MobilePopupHeader = ({ closePopup }: PopupHeaderProps) => (
	<MobilePopupMenu >
		<Link href="/">
			<LogoContainer>
				<Logo color="black" />
			</LogoContainer>
		</Link>
		<Hamburger toggled={true} onToggle={closePopup} />
	</MobilePopupMenu>
);


const PopupHeader = ({ closePopup }: PopupHeaderProps) => isWindowDesktop()
	? <DesktopPopupHeader closePopup={closePopup} />
	: <MobilePopupHeader closePopup={closePopup} />
	;

export default PopupHeader;