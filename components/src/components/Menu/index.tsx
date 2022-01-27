import React from 'react'
import theme from '../../theme';
import { useWindowSize } from '../../helpers/device'; //TODO: absolute imports for component lib
import { DesktopMenu } from './DesktopMenu';
import { MenuInterface } from './Menu.types';
import { MobileMenu } from './MobileMenu';

const Menu: React.FC<MenuInterface> = ({ navLinks, children }) => {
    const device = useWindowSize();
    if (device.width && device.width > theme.breakpoints.xl) {
        return <DesktopMenu navLinks={navLinks}>{children}</DesktopMenu>
    }
    return (
        <MobileMenu navLinks={navLinks}>
            {children}
        </MobileMenu>
    )
}

export default Menu