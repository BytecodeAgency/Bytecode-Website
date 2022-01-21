import React from 'react'
import { useWindowSize } from '../../helpers/device'; //TODO: absolute imports for component lib
import { DesktopMenu } from './DesktopMenu';
import { MenuInterface } from './Menu.types';
import { MobileMenu } from './MobileMenu';

const Menu: React.FC<MenuInterface> = ({ navLinks, children }) => {
    const device = useWindowSize();
    if (device.width && device.width > 1200) { //TODO: set theme breakpoint
        return <DesktopMenu navLinks={navLinks}>{children}</DesktopMenu>
    }
    return (
        <MobileMenu navLinks={navLinks}>
            {children}
        </MobileMenu>
    )
}

export default Menu