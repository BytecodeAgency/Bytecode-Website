import React from "react";
import theme from "../../theme";
import { useWindowSize } from "../../helpers/device";
import { DesktopMenu } from "./DesktopMenu";
import { MenuInterface } from "./Menu.types";
import { MobileMenu } from "./MobileMenu";

const Menu: React.FC<MenuInterface> = ({ navLinks }) => {
	const device = useWindowSize();
	if (!device.width || device.width > theme.breakpoints.xl) {
		return <DesktopMenu navLinks={navLinks} />;
	}
	return (
		<MobileMenu navLinks={navLinks} />
	);
};

export default Menu;