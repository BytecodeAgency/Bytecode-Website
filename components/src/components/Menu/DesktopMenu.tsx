import React from "react";
import { MenuInterface } from "./Menu.types";
import styled from "styled-components";
import Spacer from "../Spacer";
import theme from "../../theme";

const DesktopMenuContainer = styled.div`
    display: grid;
    grid-template-columns: 200px 1fr;
    padding-top: 44px;
`;

const NavLinksContainer = styled.div`
    display: flex;
    gap: ${theme.layout.gutter}px;
    justify-content: end;
`

export const DesktopMenu: React.FC<MenuInterface> = ({ navLinks, Logo }) => (
    <DesktopMenuContainer>
        <div>
            <Logo />
        </div>
        <NavLinksContainer>
            {navLinks.map((item) => (
                <item.Link />
            ))}
        </NavLinksContainer>
        <Spacer color="black" />
    </DesktopMenuContainer>
)