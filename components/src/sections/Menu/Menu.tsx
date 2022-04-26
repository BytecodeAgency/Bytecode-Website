import React from "react";
import { theme } from "../../theme";
import { useWindowSize } from "../../helpers/device";
import { DesktopMenu } from "./Components/DesktopMenu";
import { MobileMenu } from "./Components/MobileMenu";

export interface MenuInterface {
	navLinks: NavLink[]
}

export interface NavLink {
	name: string;
	Link: React.FC;
}

const Menu: React.FC<MenuInterface> = ({ navLinks }) => {
	const device = useWindowSize();
	if (!device.width || (theme.breakpoints.xl && device.width > theme.breakpoints.xl)) {
		return <DesktopMenu navLinks={navLinks} />;
	}
	return (
		<MobileMenu navLinks={navLinks} />
	);
};

export default Menu;